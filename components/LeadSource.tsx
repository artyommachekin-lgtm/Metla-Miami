'use client';

// Lead source for the booking form (master order seo/03, 2026-11-18).
//
// On the FIRST page of a visit we keep the campaign tags (utm_*) from the landing address and the outside page
// the visitor came from. They live in sessionStorage: this tab, this visit, gone when the tab closes. Nothing a
// visitor types ever goes in here. MetlaIntakeForm sends them with the quote request, together with the page the
// form is on, so CleanOps can count requests by source. Every field is optional on the CleanOps side; if the
// browser blocks storage the form still sends the page it is on and nothing else.
//
// Addresses are sent WITHOUT their query string and fragment (CleanOps cuts them too), so nothing typed into a
// search box or tacked onto a link rides along.

import { useEffect } from 'react';

const KEY = 'metla_lead_source_v1';
const MAX = 300; // CleanOps cuts each value at 300 characters

type UtmField = 'utmSource' | 'utmMedium' | 'utmCampaign' | 'utmTerm' | 'utmContent';
type SavedField = UtmField | 'referrer';
export type LeadSource = Partial<Record<SavedField | 'pageUrl', string>>;

const UTM: [string, UtmField][] = [
  ['utm_source', 'utmSource'],
  ['utm_medium', 'utmMedium'],
  ['utm_campaign', 'utmCampaign'],
  ['utm_term', 'utmTerm'],
  ['utm_content', 'utmContent'],
];
const SAVED: SavedField[] = ['utmSource', 'utmMedium', 'utmCampaign', 'utmTerm', 'utmContent', 'referrer'];

// An http(s) address without its query string and fragment; '' for anything else.
function cleanUrl(raw: string): string {
  try {
    const u = new URL(raw);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return '';
    return (u.origin + u.pathname).slice(0, MAX);
  } catch {
    return '';
  }
}

// A campaign tag is a short label chosen by whoever built the link. Anything shaped like an email address or a
// US phone number is dropped, so contact details can never ride in a tag.
function cleanTag(raw: string | null): string {
  const v = (raw ?? '').trim().slice(0, MAX);
  if (!v) return '';
  if (v.includes('@')) return '';
  if (/^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v)) return '';
  return v;
}

// Runs on every page load but only writes once per visit: the first page wins.
export function captureLeadSource(): void {
  if (typeof window === 'undefined') return;
  try {
    if (window.sessionStorage.getItem(KEY) !== null) return;
    const q = new URLSearchParams(window.location.search);
    const src: LeadSource = {};
    for (const [param, field] of UTM) {
      const v = cleanTag(q.get(param));
      if (v) src[field] = v;
    }
    // A page on this same site is not a source (a link opened in a new tab starts a new visit here).
    const ref = cleanUrl(document.referrer);
    if (ref && new URL(ref).host !== window.location.host) src.referrer = ref;
    window.sessionStorage.setItem(KEY, JSON.stringify(src));
  } catch {
    // Storage blocked: the form sends no source.
  }
}

// What the form adds to its POST: the saved first-page values plus the page the form is on.
export function readLeadSource(): LeadSource {
  if (typeof window === 'undefined') return {};
  const out: LeadSource = {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    const saved: unknown = raw ? JSON.parse(raw) : null;
    if (saved && typeof saved === 'object') {
      for (const f of SAVED) {
        const v = (saved as Record<string, unknown>)[f];
        if (typeof v === 'string' && v) out[f] = v.slice(0, MAX);
      }
    }
  } catch {
    // Unreadable storage: send only the page address.
  }
  const page = cleanUrl(window.location.href);
  if (page) out.pageUrl = page;
  return out;
}

// Mounted once in app/layout.tsx so the first page of any visit is seen, whichever page that is.
export default function LeadSourceCapture() {
  useEffect(() => {
    captureLeadSource();
  }, []);
  return null;
}
