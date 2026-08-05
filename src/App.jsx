import React, { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HomeTopSearch from "@/components/HomeTopSearch";
import PromoCarousel from "@/components/PromoCarousel";
import BookingShortcut from "@/components/BookingShortcut";

// Lazy load below-the-fold sections to optimize initial bundle size & FCP
const PromoNgebutSection = lazy(() => import("@/components/PromoNgebutSection"));
const RekomendasiJakartaSection = lazy(() => import("@/components/RekomendasiJakartaSection"));
const KosPromoSection = lazy(() => import("@/components/KosPromoSection"));
const PopularAreasSection = lazy(() => import("@/components/PopularAreasSection"));
const CampusSection = lazy(() => import("@/components/CampusSection"));
const ArticleAccordionSection = lazy(() => import("@/components/ArticleAccordionSection"));
const Footer = lazy(() => import("@/components/Footer"));
const MobileBottomNav = lazy(() => import("@/components/MobileBottomNav"));

// Skeleton Fallback placeholder to prevent layout shift during chunk load
function SectionSkeleton() {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-4 py-8 animate-pulse">
      <div className="h-6 w-48 bg-slate-200 rounded-md mb-4"></div>
      <div className="h-40 w-full bg-slate-100 rounded-2xl"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* 1. Header Section (Above the fold) */}
      <Header />

      {/* 2. Home Top Search Section (Above the fold - LCP) */}
      <HomeTopSearch />

      {/* 3. Promo Carousel Hero Section (Above the fold) */}
      <PromoCarousel />

      {/* 4. Booking Shortcut Section */}
      <BookingShortcut />

      {/* Lazy Loaded Below-the-fold Sections */}
      <Suspense fallback={<SectionSkeleton />}>
        {/* 5. Section Gambar 1: Promo Ngebut */}
        <PromoNgebutSection />

        {/* 6. Section Gambar 2: Rekomendasi kos di Jakarta */}
        <RekomendasiJakartaSection />

        {/* 7. Section Gambar 3: Kos yang lagi promo di Semua Kota */}
        <KosPromoSection />

        {/* 8. Area Kos Terpopuler Section */}
        <PopularAreasSection />

        {/* 9. Kos Sekitar Kampus Section */}
        <CampusSection />

        {/* 10. Article Accordion Section */}
        <ArticleAccordionSection />

        {/* 11. Footer Section */}
        <Footer />

        {/* 12. Mobile Bottom Navigation Bar & Chat Overlay */}
        <MobileBottomNav />
      </Suspense>
    </div>
  );
}
