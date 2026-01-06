import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PHONE_NUMBER } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
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
    } else {
      navigate('/', { state: { targetId } });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3 text-slate-900' : 'bg-transparent py-6 text-white'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
          METLA<span className={`text-teal-500`}>.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-teal-500 transition-colors text-sm font-medium uppercase tracking-wider">Home</Link>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="hover:text-teal-500 transition-colors text-sm font-medium uppercase tracking-wider cursor-pointer"
          >
            Services
          </a>
          <a
            href="#locations"
            onClick={(e) => handleNavClick(e, 'locations')}
            className="hover:text-teal-500 transition-colors text-sm font-medium uppercase tracking-wider cursor-pointer"
          >
            Locations
          </a>
          <Link
            to="/about"
            className="hover:text-teal-500 transition-colors text-sm font-medium uppercase tracking-wider"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hover:text-teal-500 transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Blog
          </Link>

          <div className="flex items-center gap-4 border-l border-current pl-6">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 font-medium">
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <Link
              to="/booking"
              className={`px-5 py-2 rounded-sm font-bold text-sm transition-all shadow-lg ${isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-slate-900 shadow-xl p-6 flex flex-col gap-6 md:hidden">
          <Link to="/" className="text-lg font-medium">Home</Link>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-lg font-medium"
          >
            Services
          </a>
          <a
            href="#locations"
            onClick={(e) => handleNavClick(e, 'locations')}
            className="text-lg font-medium"
          >
            Locations
          </a>
          <Link to="/about" className="text-lg font-medium">
            About
          </Link>
          <Link to="/blog" className="text-lg font-medium">
            Blog
          </Link>
          <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-medium text-teal-600">{PHONE_NUMBER}</a>
          <Link
            to="/booking"
            className="bg-slate-900 text-white text-center py-3 rounded-sm font-bold"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;