import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import buildingImg from "@/asset/building.PNG";

export default function HomeTopSearch() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-8 lg:py-2">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mobile Background Illustration (Gambar 2) */}
        <div className="lg:hidden absolute inset-0 -z-0 flex items-center justify-center opacity-25 pointer-events-none">
          <img
            src={buildingImg}
            alt="Building Background"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* 2-Container Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Container 1: Search Content (Gambar 1 & Gambar 2) */}
          <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-800">
              Mau cari kos?
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Dapatkan infonya dan langsung sewa di Mamikos.
            </p>

            {/* Search Bar Input Box */}
            <div className="pt-3 max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-1.5 flex items-center gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-3.5 w-5 h-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Masukan nama lokasi/area/alamat"
                    className="pl-11 h-11 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent"
                  />
                </div>
                <Button className="h-11 px-7 bg-[#00BA88] hover:bg-[#009c72] text-white font-bold text-sm rounded-xl transition-colors shrink-0">
                  Cari
                </Button>
              </div>
            </div>
          </div>

          {/* Container 2: Building Image Illustration (Desktop Only - Gambar 1) */}
          <div className="hidden lg:flex lg:col-span-6 justify-end items-center">
            <img
              src={buildingImg}
              alt="Building Illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
