import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import singgahSiniLogo from "@/asset/singgahSini.PNG";
import apikLogo from "@/asset/apik.PNG";

export default function BookingShortcut() {
  return (
    <section className="w-full bg-white py-4 lg:py-6 select-none space-y-6">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Card 1: Survei Kos Idaman Kamu Sekarang! */}
        <Card className="relative overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-md">
          <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
            {/* Desktop Bottom-Right Green Dot Matrix Pattern (Gambar 1) */}
            <div className="hidden lg:flex absolute bottom-4 right-8 flex-col gap-1.5 pointer-events-none">
              <div className="flex gap-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/40"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="flex gap-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/30"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex gap-2 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>

            {/* Mobile Bottom-Left Green Dot Matrix Pattern (Gambar 2) */}
            <div className="lg:hidden absolute bottom-4 left-4 flex flex-col gap-1.5 pointer-events-none">
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/40"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/30"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-800">
                Survei Kos Idaman Kamu Sekarang!
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei,
                hingga sewa kos idaman dijamin aman dan GRATIS.
              </p>

              {/* Link 'Baca selengkapnya' (Desktop: Left | Mobile: Right) */}
              <div className="pt-2 flex justify-end lg:justify-start">
                <a
                  href="#"
                  className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-emerald-600 underline underline-offset-4 transition-colors"
                >
                  Baca selengkapnya
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Kos Dikelola Mamikos, Terjamin Nyaman (Gambar 1 Laptop & Gambar 2 Mobile) */}
        <Card className="relative overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-md">
          <CardContent className="p-6 sm:p-7 lg:p-8">
            <div className="flex flex-row items-center justify-between gap-4">
              {/* Text Area */}
              <div className="space-y-1.5 max-w-2xl">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight text-slate-900 leading-snug">
                  Kos Dikelola Mamikos, Terjamin Nyaman
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan
                  kos lolos seleksi.
                </p>
              </div>

              {/* Logos Area (Desktop: Row Horizontal | Mobile: Column Vertical) */}
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6 shrink-0">
                <img
                  src={singgahSiniLogo}
                  alt="Singgahsini"
                  className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
                />
                <img
                  src={apikLogo}
                  alt="Apik"
                  className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
