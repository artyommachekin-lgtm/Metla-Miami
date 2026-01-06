import React, { useEffect, useState } from 'react';

const JobberEmbed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cssId = 'jobber-css';
    const scriptId = 'jobber-script';

    // Inject CSS if not already present
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
      link.media = 'screen';
      document.head.appendChild(link);
    }

    // Check if script already exists (prevents duplicate loading)
    if (document.getElementById(scriptId)) {
      setIsLoading(false);
      return;
    }

    // Inject Script
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'd33a529a-72ba-403d-bd83-811fe4abb0e2-641111');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/d33a529a-72ba-403d-bd83-811fe4abb0e2/public/work_request/embedded_work_request_form?form_id=641111');
    script.async = true;

    // Hide loading state when script loads
    script.onload = () => {
      // Give the form a moment to render after script loads
      setTimeout(() => setIsLoading(false), 300);
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script tag on unmount to prevent duplicates/memory leaks if navigated away
      const existingScript = document.getElementById(scriptId);
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="jobber-embed-container bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[600px] relative">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-4 md:inset-8 flex flex-col gap-6 animate-pulse">
          {/* Form Header Skeleton */}
          <div className="h-8 bg-slate-200 rounded w-2/3"></div>
          <div className="h-4 bg-slate-100 rounded w-1/2"></div>

          {/* Form Fields Skeleton */}
          <div className="space-y-4 mt-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded w-20"></div>
                <div className="h-12 bg-slate-100 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded w-20"></div>
                <div className="h-12 bg-slate-100 rounded"></div>
              </div>
            </div>

            {/* Email/Phone Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded w-16"></div>
                <div className="h-12 bg-slate-100 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded w-16"></div>
                <div className="h-12 bg-slate-100 rounded"></div>
              </div>
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <div className="h-4 bg-slate-100 rounded w-24"></div>
              <div className="h-12 bg-slate-100 rounded"></div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <div className="h-4 bg-slate-100 rounded w-32"></div>
              <div className="h-12 bg-slate-100 rounded"></div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <div className="h-4 bg-slate-100 rounded w-28"></div>
              <div className="h-32 bg-slate-100 rounded"></div>
            </div>

            {/* Submit Button */}
            <div className="h-14 bg-teal-200 rounded w-full mt-6"></div>
          </div>

          {/* Loading text */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-500 text-sm">
            <svg className="animate-spin h-4 w-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading booking form...
          </div>
        </div>
      )}

      {/* Actual Jobber Form Container */}
      <div id="d33a529a-72ba-403d-bd83-811fe4abb0e2-641111" className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}></div>
    </div>
  );
};

export default JobberEmbed;