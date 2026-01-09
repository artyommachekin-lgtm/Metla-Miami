import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-slate-900 text-white pb-24" style={{ minHeight: '600px' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=15&w=480&fm=webp&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=15&w=480&fm=webp&auto=format&fit=crop 480w,
            https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=25&w=800&fm=webp&auto=format&fit=crop 800w,
            https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=35&w=1200&fm=webp&auto=format&fit=crop 1200w
          "
          sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
          alt="Pristine Living Room"
          className="w-full h-full object-cover opacity-40"
          style={{ aspectRatio: '3/2' }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-sm font-medium text-slate-300 tracking-wide">#1 Trusted Luxury Cleaning</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
            Restoring the <span className="text-teal-400 italic">Pristine</span> Condition of Your Home.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Metla House Cleaning brings San Diego's most trusted 50-point cleaning protocol to the Miami Gold Coast.
            Fully vetted, insured, and detail-obsessed.
          </p>

          {/* CTA buttons - explicit height for mobile CLS, auto for desktop */}
          <div className="flex flex-col sm:flex-row gap-4 min-h-[112px] sm:min-h-0">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all rounded-sm shadow-[0_0_20px_rgba(45,212,191,0.3)] cursor-pointer"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm cursor-pointer"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Google_Favicon_2015.svg" className="w-4 h-4" alt="Google" />
              4.9/5 Rating
            </span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Licensed & Bonded</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Background Checked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;