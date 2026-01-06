import React, { useEffect } from 'react';

const JobberEmbed: React.FC = () => {
  useEffect(() => {
    const cssId = 'jobber-css';

    // Inject CSS if not already present
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
      link.media = 'screen';
      document.head.appendChild(link);
    }

    // Inject Script
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'd33a529a-72ba-403d-bd83-811fe4abb0e2-641111');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/d33a529a-72ba-403d-bd83-811fe4abb0e2/public/work_request/embedded_work_request_form?form_id=641111');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script tag on unmount to prevent duplicates/memory leaks if navigated away
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="jobber-embed-container bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[600px]">
      <div id="d33a529a-72ba-403d-bd83-811fe4abb0e2-641111"></div>
    </div>
  );
};

export default JobberEmbed;