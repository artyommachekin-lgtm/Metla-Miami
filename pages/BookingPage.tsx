import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import JobberEmbed from '../components/JobberEmbed';
import { Star } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { updatePageSEO, resetSEO } from '../utils/seo';

const BookingPage: React.FC = () => {
  const location = useLocation();

  // Set dynamic page title and meta description for SEO
  useEffect(() => {
    updatePageSEO({
      title: `Request a Quote | ${COMPANY_NAME}`,
      description: 'Get a free quote for professional house cleaning in Miami. Book online in 60 seconds. No phone call required.',
      path: location.pathname,
    });
    return () => {
      resetSEO();
    };
  }, [location.pathname]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header with Background Image */}
      <div className="relative bg-slate-900 text-white pt-32 pb-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&fm=webp&auto=format&fit=crop"
            alt="Luxury Interior Background"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
            width={2574}
            height={1716}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg">Request a Quote</h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light drop-shadow-md">
            Tell us about your cleaning needs. We'll get back to you with a personalized estimate tailored to your home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          <JobberEmbed />
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-slate-600 italic text-lg">
            "The booking process was seamless, and the team arrived exactly on time. Best cleaning service in Miami!"
          </p>
          <p className="mt-4 font-bold text-slate-900">- Sarah J., Coral Gables</p>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Book Your Professional House Cleaning in Miami</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Getting a quote from Metla House Cleaning is simple and takes less than 60 seconds. Our online booking form allows you to describe your cleaning needs, select your preferred date and time, and receive a personalized estimate—all without making a phone call.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We provide premium residential cleaning services throughout Miami-Dade and Broward counties, including Brickell, Coral Gables, Miami Beach, Fort Lauderdale, and surrounding areas. Whether you need a one-time deep clean, regular maintenance cleaning, or specialized services like move-in/move-out cleaning, our team is ready to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-2 text-slate-700">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-medium">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Star className="w-5 h-5 text-teal-500 fill-current" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Star className="w-5 h-5 text-blue-500 fill-current" />
                <span className="font-medium">Background Checked</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl shadow-md p-8 text-white">
            <h2 className="text-2xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-teal-400">How quickly will I receive my quote?</h3>
                <p className="text-slate-300 mt-1">Most quotes are delivered within 2-4 hours during business hours. For urgent requests, call us directly at (786) 723-7533.</p>
              </div>
              <div>
                <h3 className="font-bold text-teal-400">What information do I need to provide?</h3>
                <p className="text-slate-300 mt-1">We'll ask about your home's square footage, number of bedrooms and bathrooms, and any special cleaning requirements or areas of focus.</p>
              </div>
              <div>
                <h3 className="font-bold text-teal-400">Is there a minimum charge?</h3>
                <p className="text-slate-300 mt-1">Our services start at competitive rates based on your home's size and needs. We'll provide transparent pricing with no hidden fees. See our <Link to="/policies" className="text-teal-400 underline hover:text-teal-300">company policies</Link> for details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;