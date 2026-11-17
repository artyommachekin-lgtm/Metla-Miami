import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  MapPin,
  Tag,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '@/constants';
import { SITE_CONFIG } from '@/src/config/site-config';
import FAQSchema, { FAQItem } from '@/components/FAQSchema';
import { BLOG_POSTS } from '@/data/blog-posts';

const pageTitle = `House Cleaning Specials & Discounts | Miami | ${COMPANY_NAME}`;
const pageDescription = `Host-Ready Holiday Clean in Miami: book a deep clean by December 15 for a visit December 16 to 23. New clients take $40 off with code HOLIDAY40. Call ${PHONE_NUMBER}.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/specials' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/specials',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SpecialsPage() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const faqs: FAQItem[] = [
    {
      question: 'What is the Host-Ready Holiday Clean?',
      answer: 'It is a deep cleaning scheduled for the week before Christmas. Book by December 15, 2026 for a visit between December 16 and December 23, 2026.',
    },
    {
      question: 'Who gets $40 off?',
      answer: 'New clients. Mention code HOLIDAY40 when you book by December 15, 2026 and we take $40 off your first cleaning: standard, deep, move-in/move-out, or post-construction. One per household.',
    },
    {
      question: 'How do I redeem the offer?',
      answer: `Call us at ${PHONE_NUMBER} during business hours (Monday through Sunday, 9 AM to 7 PM) and mention code HOLIDAY40, or write HOLIDAY40 in the notes of the online quote request. We confirm the price before anything is booked.`,
    },
    {
      question: 'Can I still book a holiday-week clean after December 15?',
      answer: 'You can ask. Holiday-week appointments are scheduled first come, first served, so after December 15 it depends on what is still open.',
    },
    {
      question: 'Is the offer available in my Miami neighborhood?',
      answer: 'Yes. The offer is available across Miami-Dade and Broward, including Brickell, Coconut Grove, Coral Gables, Miami Beach, Aventura and Fort Lauderdale.',
    },
  ];

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'House Cleaning Specials - Miami',
    description: `Current cleaning special from ${COMPANY_NAME} in Miami`,
    numberOfItems: 1,
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Host-Ready Holiday Clean: $40 Off for New Clients',
        description:
          'Book a deep cleaning by December 15, 2026 for a visit December 16 to 23, 2026. New clients take $40 off their first cleaning with code HOLIDAY40.',
        priceValidUntil: '2026-12-15',
        availability: 'https://schema.org/InStock',
        availableAtOrFrom: {
          '@type': 'LocalBusiness',
          name: `${COMPANY_NAME} Miami`,
          telephone: SITE_CONFIG.phone,
          areaServed: { '@type': 'City', name: 'Miami' },
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: `${baseUrl}/booking`,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'House Cleaning Specials',
        item: `${baseUrl}/specials`,
      },
    ],
  };

  const featuredLocations = LOCATIONS.slice(0, 12);

  return (
    <div className="bg-white min-h-screen">
      {/* Schema Markup */}
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema, null, 2) }}
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              House Cleaning Specials in Miami
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              A holiday deep clean for the week before Christmas, with $40 off for first-time clients.
              Available across all Miami neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 hover:bg-teal-600 text-white font-bold rounded transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {PHONE_NUMBER} to Redeem
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 rounded transition-colors"
              >
                Request a Quote Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 quick-answer">
              <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
              <p className="text-slate-700">
                {COMPANY_NAME} has one current special for Miami residents: the{' '}
                <strong>Host-Ready Holiday Clean</strong>. Book a deep clean by December 15 for a
                visit December 16 to 23. <strong>New clients take $40 off</strong> their first
                cleaning with code HOLIDAY40. Call us at{' '}
                <a href={`tel:${PHONE_NUMBER}`} className="text-teal-700 font-medium underline">
                  {PHONE_NUMBER}
                </a>{' '}
                or write the code in the notes of the online quote request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Current Offer
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-teal-500 rounded-xl p-8">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Holiday 2026 — Book by Dec 15
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4 mb-3">
                  Host-Ready Holiday Clean
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-slate-600 font-medium">New client code:</span>
                  <span className="bg-slate-100 px-4 py-2 rounded font-mono font-bold text-lg">
                    HOLIDAY40
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  Book by: December 15, 2026 &bull; Visits: December 16 to 23, 2026
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Hosting this year? Book a deep cleaning by December 15 and we come the week before
                  Christmas, December 16 to 23. Holiday-week appointments are scheduled first come,
                  first served. New to {COMPANY_NAME}? Mention code HOLIDAY40 and take $40 off your
                  first cleaning.
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">Deep clean includes:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    {[
                      'Appliance exteriors',
                      'Baseboards',
                      'Door frames',
                      'Ceiling fans',
                      'Blinds',
                      'Light fixtures',
                      'Window sills',
                      'Full bathroom sanitization',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-400 mt-3">
                    $40 off is for new clients, one per household, on a first cleaning of any type
                    booked by December 15, 2026. Add-ons such as inside the fridge or inside the oven
                    are available at regular cost.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">How to Redeem</h4>
                  <ol className="space-y-2 text-slate-600 text-sm">
                    {[
                      `Call ${PHONE_NUMBER}`,
                      'Ask for a deep clean between December 16 and 23',
                      'New client? Mention code HOLIDAY40',
                      'We confirm the price before anything is booked',
                    ].map((step, index) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="bg-teal-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-700 hover:bg-teal-600 text-white font-bold rounded transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call {PHONE_NUMBER} to Book
                </a>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8">
              Last updated: November 17, 2026
            </p>
          </div>
        </div>
      </section>

      {/* How to Redeem Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              How to Redeem Your Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-teal-700" />
                </div>
                <div className="text-2xl font-bold text-teal-700 mb-2">1</div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 text-sm">
                  Call{' '}
                  <a href={`tel:${PHONE_NUMBER}`} className="text-teal-700 font-medium">
                    {PHONE_NUMBER}
                  </a>{' '}
                  (Mon&ndash;Sun, 9 AM &ndash; 7 PM)
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-teal-700" />
                </div>
                <div className="text-2xl font-bold text-teal-700 mb-2">2</div>
                <h3 className="font-bold text-slate-900 mb-1">Pick Your Date</h3>
                <p className="text-slate-600 text-sm">
                  Ask for a deep clean between December 16 and 23
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-teal-700" />
                </div>
                <div className="text-2xl font-bold text-teal-700 mb-2">3</div>
                <h3 className="font-bold text-slate-900 mb-1">Mention Your Code</h3>
                <p className="text-slate-600 text-sm">
                  New client? Say HOLIDAY40 for $40 off your first cleaning
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-teal-700" />
                </div>
                <div className="text-2xl font-bold text-teal-700 mb-2">4</div>
                <h3 className="font-bold text-slate-900 mb-1">Schedule Your Cleaning</h3>
                <p className="text-slate-600 text-sm">
                  We confirm the price before anything is booked
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-lg p-4 text-center text-sm text-slate-500">
              HOLIDAY40 is for new clients, one per household, and ends December 15, 2026.
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              What&apos;s Included in Each Service
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              The Host-Ready Holiday Clean is a deep cleaning. New clients can use HOLIDAY40 on a
              first cleaning of any type.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Standard Cleaning */}
              <Link
                href="/service/standard-cleaning"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  Standard Cleaning
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Routine maintenance — dusting, vacuuming, mopping, bathroom sanitization, kitchen
                  surfaces. Best for weekly or bi-weekly upkeep.
                </p>
                <p className="text-xs text-slate-400">
                  Add-ons available: inside fridge, inside oven, inside cabinets, interior windows
                </p>
                <span className="text-teal-700 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>

              {/* Deep Cleaning */}
              <Link
                href="/service/deep-cleaning-miami"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  Deep Cleaning
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Top-to-bottom detail — baseboards, ceiling fans, blinds, cabinet fronts, appliance
                  exteriors, full bathroom scrub. Ideal for first-time cleans or quarterly resets.
                </p>
                <p className="text-xs text-slate-400">
                  Add-ons available: inside fridge, inside oven, inside cabinets, interior windows
                </p>
                <span className="text-teal-700 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>

              {/* Move-In/Move-Out */}
              <Link
                href="/service/move-in-out-cleaning"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  Move-In / Move-Out
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Empty-home detail — inside cabinets, inside fridge and oven, interior windows
                  all included. Meets property management and lease-end standards.
                </p>
                <p className="text-xs text-slate-400">
                  Ideal for lease transitions, property closings, and new-tenant prep
                </p>
                <span className="text-teal-700 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serving All Miami Neighborhoods */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              Serving All Miami Neighborhoods
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Our specials are available across Miami-Dade and Broward, from Brickell and Coconut Grove
              to Coral Gables, Miami Beach, Aventura and Fort Lauderdale.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {featuredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/location/${loc.slug}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
                >
                  <MapPin className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{loc.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                See all {LOCATIONS.length} locations <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions About Our Specials
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Guides Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              Helpful Cleaning Guides
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Learn more about the services covered by our specials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'deep-cleaning-guide-miami',
                'airbnb-turnover-cleaning-guide',
                'benefits-of-regular-cleaning-service',
                'post-construction-cleaning-guide',
              ].map((blogSlug) => {
                const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
                if (!post) return null;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors text-sm">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{post.readTime}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                View All Cleaning Guides <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Book Your Holiday Clean?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Call today and mention your code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 font-bold rounded hover:bg-teal-50 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded transition-colors"
            >
              Request a Quote Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
