import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useLocation as useRouterLocation } from 'react-router-dom';
import { LOCATIONS, SERVICES, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import {
  MapPin,
  CheckCircle,
  Building2,
  Home,
  Droplets,
  Wind,
  Shield,
  Phone,
  ArrowRight,
  Users,
  Star
} from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import FAQSchema, { FAQItem } from '../components/FAQSchema';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const routerLocation = useRouterLocation();

  useEffect(() => {
    if (location) {
      updatePageSEO({
        title: `${location.name} House Cleaning | ${COMPANY_NAME}`,
        description: `Professional house cleaning and maid services in ${location.name}. ${location.tagline || location.description} Insured, background-checked cleaners. Book today!`,
        path: routerLocation.pathname,
      });
    }
    return () => {
      resetSEO();
    };
  }, [location, routerLocation.pathname]);

  if (!location) return <Navigate to="/" />;

  const displayedServices = location.popularServiceIds
    ? SERVICES.filter(s => location.popularServiceIds?.includes(s.id))
    : SERVICES.slice(0, 3);

  // Location-specific FAQs for rich snippets
  const locationFaqs: FAQItem[] = [
    {
      question: `How much does house cleaning cost in ${location.name}?`,
      answer: `House cleaning prices in ${location.name} vary based on home size and service type. Standard cleaning typically ranges from $120-$300, deep cleaning from $200-$500, and specialized services are quoted based on specific needs. Contact us for a free personalized estimate.`
    },
    {
      question: `Do you serve all areas of ${location.name}?`,
      answer: `Yes, Metla House Cleaning provides full coverage throughout ${location.name} and surrounding areas. Our team knows the area well and can typically accommodate same-week or even same-day appointments depending on availability.`
    },
    {
      question: `Are your ${location.name} cleaners background checked?`,
      answer: `Absolutely. Every member of our ${location.name} cleaning team undergoes a thorough background check, is fully insured and bonded, and receives professional training. Your safety and peace of mind are our top priorities.`
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <LocalBusinessSchema location={location} />
      <FAQSchema faqs={locationFaqs} />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2 text-teal-400" />
              <span>Proudly Serving {location.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Premier House Cleaning Services in{' '}
              <span className="text-teal-400">{location.name}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {location.tagline || location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded transition-colors"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 rounded transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  Keeping {location.name} Homes Sparkling
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {location.detailedContent}
                </p>
              </div>

              {/* Why Trust Us */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                  Why {location.name} Residents Trust {COMPANY_NAME}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Local Expertise</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      {location.housingTypes
                        ? `Specialized in ${location.housingTypes.slice(0, 2).join(' and ')} cleaning with familiarity of local building protocols.`
                        : `Familiar with ${location.name}'s unique housing types and building access requirements.`
                      }
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Vetted Professionals</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Fully insured cleaners who are background-checked and familiar with {location.name} security protocols.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Droplets className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Eco-Friendly Products</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Safe products for homes with pets and children, mindful of {location.name}'s proximity to natural areas.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">5-Star Service</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Consistent, reliable service with a <Link to="/policies#satisfaction-guarantee" className="text-teal-600 underline hover:text-teal-700">satisfaction guarantee</Link>. Rated 4.9/5 by local clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              {(location.landmarks || location.neighborhoods || location.housingTypes) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Service Area & Community Coverage
                  </h2>

                  {location.housingTypes && location.housingTypes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        Residential Communities We Serve
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.housingTypes.map((type, i) => (
                          <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.landmarks && location.landmarks.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        Key Landmarks Near Our Service Routes
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {location.landmarks.map((landmark, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                            <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                            {landmark}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.neighborhoods && location.neighborhoods.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {location.name} Areas Served
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.neighborhoods.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.zipCodes && location.zipCodes.length > 0 && (
                    <p className="text-sm text-slate-500">
                      <strong>ZIP Codes:</strong> {location.zipCodes.join(', ')}
                    </p>
                  )}
                </div>
              )}

              {/* Cleaning Challenges */}
              {location.cleaningChallenges && location.cleaningChallenges.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Common Cleaning Challenges in {location.name}
                  </h2>
                  <div className="grid gap-4">
                    {location.cleaningChallenges.map((challenge, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-orange-50 rounded-xl">
                        <Wind className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1">{challenge.title}</h3>
                          <p className="text-slate-600 text-sm">{challenge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Property Managers Section */}
              {location.propertyManagerContent && (
                <div className="mb-12 p-6 bg-slate-900 text-white rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-teal-400" />
                    <h2 className="text-xl font-bold">For Property Managers & Hosts</h2>
                  </div>
                  <p className="text-slate-300 mb-4">{location.propertyManagerContent}</p>
                  <Link
                    to="/service/vacation-rental-cleaning-airbnb"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  >
                    Learn about our vacation rental services
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Popular Services in {location.name}</h3>
                <ul className="space-y-3 mb-6">
                  {displayedServices.map(s => (
                    <li key={s.id}>
                      <Link
                        to={`/service/${s.slug}`}
                        className="flex items-center text-slate-700 hover:text-teal-600 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-sm text-slate-600">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500">Based on 127+ reviews from {location.name} clients</p>
                </div>

                <Link
                  to="/booking"
                  className="block w-full text-center bg-teal-600 text-white py-3 rounded font-bold hover:bg-teal-700 transition-colors mb-3"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block w-full text-center border border-slate-300 text-slate-700 py-3 rounded font-medium hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations Section for Internal Linking */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">
              We Also Serve Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {LOCATIONS.filter(l => l.slug !== location.slug).slice(0, 8).map((nearbyLocation) => (
                <Link
                  key={nearbyLocation.slug}
                  to={`/location/${nearbyLocation.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {nearbyLocation.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready for a Cleaner Home in {location.name}?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of {location.name} residents who trust Metla for their home cleaning needs.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
          >
            Book Your {location.name} Cleaning Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;