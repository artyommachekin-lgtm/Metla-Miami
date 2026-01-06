import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { SERVICES, COMPANY_NAME, LOCATIONS } from '../constants';
import { getIcon } from '../utils/icons';
import { Check, ArrowDownCircle, ArrowRight, BookOpen, MapPin } from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';
import ServiceSchema from '../components/ServiceSchema';
import { BLOG_POSTS } from './BlogPage';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  const location = useLocation();

  // Set dynamic page title and meta description for SEO
  useEffect(() => {
    if (service) {
      updatePageSEO({
        title: `${service.title} | ${COMPANY_NAME}`,
        description: service.shortDescription,
        path: location.pathname,
      });
    }
    return () => {
      resetSEO();
    };
  }, [service, location.pathname]);

  if (!service) return <Navigate to="/" />;

  return (
    <div className="bg-white min-h-screen">
      <ServiceSchema service={service} />
      <div className="bg-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          {React.createElement(getIcon(service.iconName), { className: "w-16 h-16 text-teal-400 mx-auto mb-6" })}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{service.shortDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Definition Box for AI/GEO - "What is X?" */}
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 definition-box">
            <h2 className="text-lg font-bold text-teal-800 mb-2">What is {service.title}?</h2>
            <p className="text-slate-700">
              <strong>{service.title}</strong> is a professional cleaning service that {service.shortDescription.toLowerCase()}
              {service.id === 'standard' && ' This recurring service maintains your home\'s cleanliness on a weekly or bi-weekly schedule, covering all essential surfaces, bathrooms, kitchen, and living areas.'}
              {service.id === 'deep' && ' Unlike regular cleaning, deep cleaning addresses hidden grime, sanitizes inside appliances, cleans baseboards and light fixtures, and resets your home to pristine condition—recommended every 3-6 months or before starting recurring service.'}
              {service.id === 'post-construction' && ' Specialized for newly renovated spaces, this service safely removes fine construction dust, cleans inside new cabinets, removes manufacturer labels, and makes your space move-in ready.'}
              {service.id === 'vacation-rental' && ' Designed for Airbnb/VRBO hosts, this rapid turnover service ensures your property is guest-ready with hotel-style staging, fresh linens, and damage reporting between stays.'}
              {service.id === 'move-in-out' && ' This exhaustive cleaning for empty properties reaches inside every cabinet, drawer, and appliance—meeting strict property management standards for lease turnovers or new home preparation.'}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Service Overview</h2>
            <p className="text-lg leading-relaxed mb-8 whitespace-pre-line">{service.fullDescription}</p>

            {service.focusPoints && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.focusPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="mt-1 mr-4 p-3 bg-teal-50 rounded-lg group-hover:bg-teal-500 transition-colors">
                      {point.iconName ? (
                        React.createElement(getIcon(point.iconName), { className: "w-6 h-6 text-teal-600 group-hover:text-white transition-colors" })
                      ) : (
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">{point.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {service.suitability && (
              <div className="bg-teal-50/50 rounded-2xl p-8 mb-16 border border-teal-100">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  {service.suitability.title || "Is this the right service for you?"}
                </h3>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">{service.suitability.text}</p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {service.suitability.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-3 w-5 h-5 bg-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-teal-800" />
                      </div>
                      <span className="text-slate-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 text-teal-800 font-semibold bg-white/50 p-4 rounded-lg inline-flex">
                  <ArrowDownCircle className="w-5 h-5" />
                  <span>{service.suitability.footer}</span>
                </div>
              </div>
            )}

            {service.checklist ? (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Comprehensive Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(service.checklist).map(([room, items]) => (
                    <div key={room} className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-serif font-bold text-xl text-slate-800 mb-4 pl-4 border-l-4 border-teal-500">
                        {room}
                      </h4>
                      <ul className="space-y-3">
                        {items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-12">
                <h3 className="text-xl font-bold mb-4">What's Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center text-slate-800">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Available Locations Section for Internal Linking */}
            <div className="mt-12 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Available In These Locations</h3>
              <p className="text-slate-600 mb-6">We provide {service.title.toLowerCase()} services throughout South Florida:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {LOCATIONS.slice(0, 6).map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/location/${loc.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Content Section for Internal Linking */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Related Articles & Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {BLOG_POSTS.slice(0, 2).map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors group"
                  >
                    <BookOpen className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">{post.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Related Services */}
              <h4 className="text-lg font-bold text-slate-900 mt-8 mb-4">Other Services You Might Need</h4>
              <div className="flex flex-wrap gap-2">
                {SERVICES.filter(s => s.slug !== slug).slice(0, 3).map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={`/service/${relatedService.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors"
                  >
                    {relatedService.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/booking"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
              >
                Get a Quote for {service.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;