import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsPanel from '../components/StatsPanel';
import { SERVICES, LOCATIONS, TESTIMONIALS, PHONE_NUMBER } from '../constants';
import { getIcon } from '../utils/icons';
import { ShieldCheck, UserCheck, Clock, ArrowRight, Check, Star, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigating from another page with state
    if (location.state && (location.state as any).targetId) {
      const targetId = (location.state as any).targetId;
      // Small timeout to allow the DOM to render and override any ScrollToTop behavior
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // Header height offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      // Clean up the state history to prevent scroll on refresh (optional but good practice)
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero />
      <StatsPanel />

      {/* Trust / Risk Reversal Section - Acts as About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12">
            We are not "strangers". We are professionals.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <ShieldCheck className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">100% Insured</h3>
              <p className="text-slate-600">Your property is protected up to $2M. We treat your sanctuary with the respect it deserves.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <UserCheck className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Strictly Vetted</h3>
              <p className="text-slate-600">Only 1 in 50 applicants joins our team. Background checked and interviewed.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
              <Clock className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="font-bold text-xl mb-2 text-slate-900">Reliability Protocol</h3>
              <p className="text-slate-600">We never cancel. Our backup teams ensure your service happens, no matter what.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Frictionless Speed) */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Select Your Service</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Specific solutions for complex needs. From luxury condos in Brickell to family estates in Coral Gables.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-500 transition-colors">
                    {React.createElement(getIcon(service.iconName), { className: "w-8 h-8 text-teal-600 group-hover:text-white" })}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.shortDescription}</p>
                <ul className="space-y-2 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-teal-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 mt-auto"
                >
                  Learn More & Book <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}

            {/* "Need Something Else?" Card */}
            <div className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Phone className="w-24 h-24 text-teal-400" />
              </div>
              <div>
                <div className="p-3 bg-teal-900/50 rounded-lg w-fit mb-6">
                  <Phone className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Need something else?</h3>
                <p className="text-slate-300 mb-6">
                  Have a unique request or a commercial project? We customize our 50-point checklist to your specific requirements.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Custom Cleaning Plans
                  </li>
                  <li className="flex items-center text-sm text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Event Clean-up
                  </li>
                  <li className="flex items-center text-sm text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    Commercial Spaces
                  </li>
                </ul>
              </div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center w-full bg-teal-600 text-white font-bold py-4 rounded hover:bg-teal-500 transition-colors"
              >
                Give us a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations SEO Silo */}
      <section id="locations" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Serving the Gold Coast Corridor</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/location/${loc.slug}`}
                className="block p-4 border border-white/10 rounded hover:bg-white/5 transition-colors text-center group"
              >
                <span className="block font-bold text-lg mb-1 group-hover:text-teal-400 transition-colors">{loc.name}</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{loc.type}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-serif font-bold mb-16">What Your Neighbors Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-xl relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Easy Button */}
      <section className="py-24 bg-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Get a price in 60 seconds. No phone call required.</p>
          <Link to="/booking" className="inline-block bg-white text-teal-900 px-10 py-5 rounded-sm font-bold text-lg shadow-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-1">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;