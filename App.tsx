import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';
import BookingPage from './pages/BookingPage';
import PoliciesPage from './pages/PoliciesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HouseCleaningPage from './pages/HouseCleaningPage';
import BlogPage from './pages/BlogPage';
import DeepCleaningGuidePage from './pages/blog/DeepCleaningGuidePage';
import MoveOutChecklistPage from './pages/blog/MoveOutChecklistPage';
import StandardCleaningBenefitsPage from './pages/blog/StandardCleaningBenefitsPage';
import AirbnbCleaningGuidePage from './pages/blog/AirbnbCleaningGuidePage';
import PostConstructionCleaningPage from './pages/blog/PostConstructionCleaningPage';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/location/:slug" element={<LocationPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/house-cleaning" element={<HouseCleaningPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/deep-cleaning-guide-miami" element={<DeepCleaningGuidePage />} />
          <Route path="/blog/move-out-cleaning-checklist" element={<MoveOutChecklistPage />} />
          <Route path="/blog/benefits-of-regular-cleaning-service" element={<StandardCleaningBenefitsPage />} />
          <Route path="/blog/airbnb-turnover-cleaning-guide" element={<AirbnbCleaningGuidePage />} />
          <Route path="/blog/post-construction-cleaning-guide" element={<PostConstructionCleaningPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;