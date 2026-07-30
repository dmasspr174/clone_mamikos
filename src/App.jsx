import React from "react";
import Header from "@/components/Header";
import HomeTopSearch from "@/components/HomeTopSearch";
import PromoCarousel from "@/components/PromoCarousel";
import BookingShortcut from "@/components/BookingShortcut";
import PromoNgebutSection from "@/components/PromoNgebutSection";
import RekomendasiJakartaSection from "@/components/RekomendasiJakartaSection";
import KosPromoSection from "@/components/KosPromoSection";
import PopularAreasSection from "@/components/PopularAreasSection";
import CampusSection from "@/components/CampusSection";
import ArticleAccordionSection from "@/components/ArticleAccordionSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* 1. Header Section */}
      <Header />

      {/* 2. Home Top Search Section */}
      <HomeTopSearch />

      {/* 3. Promo Carousel Hero Section */}
      <PromoCarousel />

      {/* 4. Booking Shortcut Section */}
      <BookingShortcut />

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
    </div>
  );
}
