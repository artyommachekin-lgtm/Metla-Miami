import React, { useEffect, useState, useRef } from 'react';

// Global flag to track if Jobber assets have been preloaded
let jobberAssetsPreloaded = false;

// Preload Jobber assets globally (called on app init or hover)
export const preloadJobberAssets = () => {
  if (jobberAssetsPreloaded) return;
  jobberAssetsPreloaded = true;

  const cssId = 'jobber-css';
  const scriptId = 'jobber-script-preload';

  // Preload CSS
  if (!document.getElementById(cssId)) {
    const link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.media = 'screen';
    document.head.appendChild(link);
  }

  // Preload script (but don't execute yet)
  if (!document.getElementById(scriptId)) {
    const preloadLink = document.createElement('link');
    preloadLink.id = scriptId;
    preloadLink.rel = 'preload';
    preloadLink.as = 'script';
    preloadLink.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    document.head.appendChild(preloadLink);
  }
};

const JobberEmbed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFormReady, setIsFormReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const cssId = 'jobber-css';
    const scriptId = 'jobber-script';

    // Inject CSS immediately if not already present
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
      link.media = 'screen';
      document.head.appendChild(link);
    }

    // Check if script already loaded and form exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript && scriptLoadedRef.current) {
      setIsLoading(false);
      setIsFormReady(true);
      return;
    }

    // Remove any existing script to reinitialize
    if (existingScript) {
      existingScript.remove();
    }

    // Inject Script with high priority
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'd33a529a-72ba-403d-bd83-811fe4abb0e2-641111');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/d33a529a-72ba-403d-bd83-811fe4abb0e2/public/work_request/embedded_work_request_form?form_id=641111');
    // Use sync loading for faster execution
    script.async = false;

    // Poll for form appearance (faster than waiting for onload)
    const pollForForm = () => {
      const formContainer = document.getElementById('d33a529a-72ba-403d-bd83-811fe4abb0e2-641111');
      if (formContainer && formContainer.children.length > 0) {
        setIsLoading(false);
        setIsFormReady(true);
        scriptLoadedRef.current = true;
      } else {
        requestAnimationFrame(pollForForm);
      }
    };

    script.onload = () => {
      // Start polling for form appearance
      requestAnimationFrame(pollForForm);
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      // Don't remove the script on unmount - keep it cached
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="jobber-embed-container bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[600px] relative"
    >
      {/* Loading Skeleton - Simplified for faster paint */}
      {isLoading && (
        <div className="absolute inset-4 md:inset-8 flex flex-col gap-4">
          {/* Minimal Loading UI */}
          <div className="h-6 bg-slate-200 rounded w-48 animate-pulse"></div>
          <div className="h-4 bg-slate-100 rounded w-32 animate-pulse"></div>

          <div className="space-y-3 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
              <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
              <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
            </div>
            <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
            <div className="h-10 bg-slate-100 rounded animate-pulse"></div>
            <div className="h-24 bg-slate-100 rounded animate-pulse"></div>
            <div className="h-12 bg-teal-100 rounded animate-pulse mt-4"></div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            Loading form...
          </div>
        </div>
      )}

      {/* Actual Jobber Form Container */}
      <div
        id="d33a529a-72ba-403d-bd83-811fe4abb0e2-641111"
        className={`transition-opacity duration-200 ${isLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
      ></div>
    </div>
  );
};

export default JobberEmbed;