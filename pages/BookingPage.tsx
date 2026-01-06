import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
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
      </div>
    </div>
  );
};

export default BookingPage;