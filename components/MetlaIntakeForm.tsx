'use client';

// METLA styled intake form (#27) — the CleanOps-native lead form that REPLACES the Jobber embed on flip day.
//
// FIELDS + BEHAVIOR are LOCKED to docs/intake-form-mockup.html in the CleanOps repo (First/Last optional;
// Phone REQUIRED + live-validated; Email REQUIRED + live-validated; a 5-option cleaning-type radio; Notes;
// honeypot; submit DISABLED until phone+email pass; server RE-VALIDATES). VISUAL design is THIS SITE'S system
// (Inter/Playfair via Tailwind, teal #14b8a6/#0d9488/#0f766e + slate neutrals) so the form is indistinguishable
// from the host site — the CRM's own aesthetic never leaks onto the public website.
//
// One implementation, per-site location tagging: the `site` prop ("sd" | "miami") rides the POST payload; the
// CleanOps endpoint maps it to the right Location. Endpoint is env-configurable (cross-origin to the CleanOps
// origin): set NEXT_PUBLIC_CLEANOPS_INTAKE_URL. The CleanOps side allowlists this site's origin for CORS.
//
// LIVE since LEAD-ALERT (2026-09-17): app/booking/BookingContent.tsx renders this form; the Jobber embed is retired.
// If the POST cannot be made (network failure or no endpoint configured) the form shows this site's phone + email
// (from constants.ts) as a tel: link and a prefilled mailto: link, so a lead never dead-ends.
//
// NAME FIELDS DEVIATE FROM THE LOCKED MOCK: the mock leaves First/Last unstarred, but the Run-2 CleanOps
// endpoint (RequestService.submitPublic) 400s on an empty first OR last name. To avoid a post-submit server
// error, BOTH names are REQUIRED here (starred + client-required + folded into disabled-until-valid), mirroring
// the server contract exactly. Confirmed by the owner (LEAD-ALERT 2026-09-17).
//
// FLIP-DAY RESIDUE: removed in LEAD-ALERT (the Jobber asset preload in components/Navigation.tsx and the Jobber
// dns-prefetch in app/layout.tsx). JobberEmbed.tsx stays on disk, unreferenced.

import React, { useState } from 'react';
import { PHONE_NUMBER, COMPANY_EMAIL } from '@/constants';

const ENDPOINT = process.env.NEXT_PUBLIC_CLEANOPS_INTAKE_URL ?? '';

// Display label → the value POSTed (must be one of the CleanOps APPROVED_CLEANING_TYPES: the server rejects
// anything else). Note "Deep clean" DISPLAYS but submits "Deep", exactly as the locked reference embed.
const CLEANING_TYPES: { label: string; value: string }[] = [
  { label: 'Standard', value: 'Standard' },
  { label: 'Deep clean', value: 'Deep' },
  { label: 'Vacation rental', value: 'Vacation rental' },
  { label: 'Post-construction', value: 'Post-construction' },
  { label: 'Something else', value: 'Something else' },
];

// LOCKED client-side checks (UX only — the server re-validates + normalizes to E.164; never trust the browser).
function vPhone(v: string): boolean {
  const d = v.replace(/\D/g, '');
  return d.length === 10 || (d.length === 11 && d[0] === '1');
}
function vEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.trim());
}

type FieldTone = 'neutral' | 'good' | 'bad';
function toneClass(tone: FieldTone): string {
  if (tone === 'good') return 'border-teal-500 bg-teal-50/40 focus:border-teal-600 focus:ring-teal-500/25';
  if (tone === 'bad') return 'border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-400/25';
  return 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20';
}

export default function MetlaIntakeForm({ site }: { site: 'sd' | 'miami' }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cleaningType, setCleaningType] = useState('Standard');
  const [notes, setNotes] = useState('');
  const [company, setCompany] = useState(''); // honeypot — real users never fill this
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<{ text: string; tone: 'ok' | 'err' } | null>(null);
  const [done, setDone] = useState(false);
  const [netFail, setNetFail] = useState(false); // POST could not be made → show call/email fallback

  const phoneOk = vPhone(phone);
  const emailOk = vEmail(email);
  const firstOk = firstName.trim() !== '';
  const lastOk = lastName.trim() !== '';
  const phoneTone: FieldTone = !phone ? 'neutral' : phoneOk ? 'good' : 'bad';
  const emailTone: FieldTone = !email ? 'neutral' : emailOk ? 'good' : 'bad';
  // BOTH names required to mirror the server (submitPublic 400s on empty first OR last) — no post-submit error.
  const canSubmit = firstOk && lastOk && phoneOk && emailOk && !submitting;

  const inputBase =
    'w-full rounded-lg border px-3.5 py-2.5 text-[15px] text-slate-900 placeholder:text-slate-400 ' +
    'outline-none transition focus:ring-2';

  // Fallback email: subject + every typed field (never the honeypot), URL-encoded; CRLF line breaks per RFC 6068.
  const mailBody = [
    `Name: ${firstName} ${lastName}`.trim(),
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Cleaning type: ${cleaningType}`,
    `Notes: ${notes}`,
  ].join('\r\n');
  const mailtoHref =
    `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('Cleaning quote request')}` +
    `&body=${encodeURIComponent(mailBody)}`;

  async function submit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setNetFail(false);
    setMsg({ text: 'Sending…', tone: 'ok' });
    try {
      if (!ENDPOINT) throw new Error('config');
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          cleaningType,
          notes,
          company, // honeypot
          site,
        }),
      });
      if (res.status >= 200 && res.status < 300) {
        setDone(true);
        setMsg({ text: '✓ Thanks — your request is in. We’ll reply shortly, usually within minutes.', tone: 'ok' });
      } else {
        const body = await res.json().catch(() => null);
        const m = body?.error?.message || 'Something went wrong. Please try again.';
        setMsg({ text: m, tone: 'err' });
        setSubmitting(false);
      }
    } catch {
      setMsg(null);
      setNetFail(true);
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="p-8 md:p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">
          ✓
        </div>
        <h2 className="font-serif text-2xl font-bold text-slate-900">Request received</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          Thanks{firstName ? `, ${firstName}` : ''} — we have your details and will reply shortly with a
          personalized quote, usually within minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Get your cleaning quote</h2>
        <p className="mt-1 text-slate-500">Tell us a little about the job — we reply fast, usually within minutes.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        noValidate
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mf-first" className="mb-1.5 block text-sm font-semibold text-slate-700">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="mf-first"
              className={`${inputBase} ${toneClass(!firstName ? 'neutral' : firstOk ? 'good' : 'bad')}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Alex"
              autoComplete="given-name"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="mf-last" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="mf-last"
              className={`${inputBase} ${toneClass(!lastName ? 'neutral' : lastOk ? 'good' : 'bad')}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Rivera"
              autoComplete="family-name"
              aria-required="true"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="mf-phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="mf-phone"
            className={`${inputBase} ${toneClass(phoneTone)}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
            placeholder="(619) 555-0142"
            autoComplete="tel"
            aria-invalid={phoneTone === 'bad'}
          />
          <p className={`mt-1 min-h-[16px] text-xs ${phoneTone === 'bad' ? 'text-red-600' : 'text-teal-600'}`}>
            {phoneTone === 'neutral' ? '' : phoneOk ? '✓ looks like a real number' : 'needs a real 10-digit phone'}
          </p>
        </div>

        <div className="mt-1">
          <label htmlFor="mf-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="mf-email"
            className={`${inputBase} ${toneClass(emailTone)}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputMode="email"
            placeholder="you@email.com"
            autoComplete="email"
            aria-invalid={emailTone === 'bad'}
          />
          <p className={`mt-1 min-h-[16px] text-xs ${emailTone === 'bad' ? 'text-red-600' : 'text-teal-600'}`}>
            {emailTone === 'neutral' ? '' : emailOk ? '✓ looks good' : 'needs a real email like name@place.com'}
          </p>
        </div>

        <fieldset className="mt-3">
          <legend className="mb-2 text-sm font-semibold text-slate-700">What kind of cleaning?</legend>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CLEANING_TYPES.map((t, i) => {
              const selected = cleaningType === t.value;
              const full = i === CLEANING_TYPES.length - 1 && CLEANING_TYPES.length % 2 === 1;
              return (
                <label
                  key={t.value}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition ${
                    selected
                      ? 'border-teal-500 bg-teal-50 font-semibold text-teal-800'
                      : 'border-slate-300 text-slate-700 hover:border-slate-400'
                  } ${full ? 'sm:col-span-2' : ''}`}
                >
                  <input
                    type="radio"
                    name="mf-type"
                    className="h-4 w-4 accent-teal-600"
                    checked={selected}
                    onChange={() => setCleaningType(t.value)}
                  />
                  {t.label}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-4">
          <label htmlFor="mf-notes" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Notes
          </label>
          <textarea
            id="mf-notes"
            className={`${inputBase} min-h-[92px] resize-y ${toneClass('neutral')}`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Bedrooms, bathrooms, anything we should know…"
          />
        </div>

        {/* HONEYPOT — off-screen, not a tab stop. A non-empty value makes the server silently accept-and-drop. */}
        <input
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-5 w-full rounded-lg bg-teal-600 px-4 py-3 text-[15px] font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {submitting ? 'Sending…' : 'Request my quote'}
        </button>

        {netFail ? (
          <p className="mt-3 text-center text-sm text-red-600">
            We couldn&apos;t send that. Call us at{' '}
            <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-teal-700 underline hover:text-teal-800">
              {PHONE_NUMBER}
            </a>{' '}
            or email{' '}
            <a href={mailtoHref} className="font-semibold text-teal-700 underline hover:text-teal-800">
              {COMPANY_EMAIL}
            </a>
            .
          </p>
        ) : msg ? (
          <p className={`mt-3 text-center text-sm ${msg.tone === 'err' ? 'text-red-600' : 'text-teal-700'}`}>
            {msg.text}
          </p>
        ) : (
          <p className="mt-3 text-center text-xs text-slate-400">
            We only use your phone and email to send your quote and reply about the job.
          </p>
        )}
      </form>
    </div>
  );
}
