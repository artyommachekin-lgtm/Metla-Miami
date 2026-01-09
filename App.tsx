import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';

// Lazy load below-fold pages to reduce initial bundle size
const Footer = lazy(() => import('./components/Footer'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const PoliciesPage = lazy(() => import('./pages/PoliciesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const HouseCleaningPage = lazy(() => import('./pages/HouseCleaningPage'));
const SameDayCleaningPage = lazy(() => import('./pages/SameDayCleaningPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DeepCleaningGuidePage = lazy(() => import('./pages/blog/DeepCleaningGuidePage'));
const MoveOutChecklistPage = lazy(() => import('./pages/blog/MoveOutChecklistPage'));
const StandardCleaningBenefitsPage = lazy(() => import('./pages/blog/StandardCleaningBenefitsPage'));
const AirbnbCleaningGuidePage = lazy(() => import('./pages/blog/AirbnbCleaningGuidePage'));
const PostConstructionCleaningPage = lazy(() => import('./pages/blog/PostConstructionCleaningPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Navigation />
        <Breadcrumbs />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServicePage />} />
            <Route path="/location/:slug" element={<LocationPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/house-cleaning" element={<HouseCleaningPage />} />
            <Route path="/same-day-cleaning" element={<SameDayCleaningPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/deep-cleaning-guide-miami" element={<DeepCleaningGuidePage />} />
            <Route path="/blog/move-out-cleaning-checklist" element={<MoveOutChecklistPage />} />
            <Route path="/blog/benefits-of-regular-cleaning-service" element={<StandardCleaningBenefitsPage />} />
            <Route path="/blog/airbnb-turnover-cleaning-guide" element={<AirbnbCleaningGuidePage />} />
            <Route path="/blog/post-construction-cleaning-guide" element={<PostConstructionCleaningPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;