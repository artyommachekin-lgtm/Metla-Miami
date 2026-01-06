import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { LOCATIONS, SERVICES, COMPANY_NAME, PHONE_NUMBER, COMPANY_EMAIL, COMPANY_ADDRESS, BUSINESS_HOURS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">

        {/* Top Section: Brand/Contact, Services, Guarantee */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16 border-b border-slate-900/50 pb-12">

          {/* Brand & Contact Info - Left Aligned */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tighter">
              METLA<span className="text-teal-500">.</span>
            </h3>
            <p className="mb-6 leading-relaxed text-sm max-w-sm">
              Premium residential cleaning serving Miami-Dade and Broward County.
              Hospitality-grade service for your home.
            </p>

            {/* NAP Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-white font-medium hover:text-teal-400 transition-colors"
              >
                <Phone size={16} className="text-teal-500" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-3 hover:text-teal-400 transition-colors text-sm"
              >
                <Mail size={16} className="text-teal-500" />
                {COMPANY_EMAIL}
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS.full}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-teal-500" />
                <span>{BUSINESS_HOURS.display}</span>
              </div>
            </div>
          </div>

          {/* Services - Center Aligned (Visually) */}
          <div className="lg:w-1/3 flex lg:justify-center">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link to={`/service/${s.slug}`} className="hover:text-teal-400 transition-colors text-sm">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee - Right Aligned */}
          <div className="lg:w-1/3 flex lg:justify-end">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">The Guarantee</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  <span>
                    <strong className="text-slate-200 block">100% Satisfaction Promise</strong>
                    We reclean for free if you aren't happy.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  <span>
                    <strong className="text-slate-200 block">Fully Insured</strong>
                    Protected up to $2M Liability.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  <span>
                    <strong className="text-slate-200 block">Strictly Vetted</strong>
                    Background checked & interviewed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Full Width Locations */}
        <div className="mb-12">
          <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm text-center">Locations Served</h4>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to={`/location/${l.slug}`} className="text-xs text-slate-500 hover:text-teal-400 transition-colors block truncate">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
          <Link to="/policies" className="hover:text-teal-400 transition-colors">
            Company Policies & Terms
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900/50 text-xs text-slate-600 text-center max-w-4xl mx-auto leading-relaxed">
          <p>
            {COMPANY_NAME} is not the employer of the domestic worker referred to you. The domestic worker may be your employee or an independent contractor depending on the relationship you have with him or her. If you direct and control the manner and means by which the domestic worker performs his or her work you may have employer responsibilities, including employment taxes and workers' compensation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;