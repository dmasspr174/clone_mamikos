import React, { useState, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import KosCard from "@/components/KosCard";
import { kosPromoData } from "@/data/mockKoses";

export default function KosPromoSection() {
  const [api, setApi] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Semua Kota");

  // Tripled items for continuous infinite loop scrolling on desktop carousel
  const carouselItems = [
    ...kosPromoData.map((item, idx) => ({ ...item, uniqueId: `a-${idx}` })),
    ...kosPromoData.map((item, idx) => ({ ...item, uniqueId: `b-${idx}` })),
    ...kosPromoData.map((item, idx) => ({ ...item, uniqueId: `c-${idx}` })),
  ];

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="w-full bg-white py-6 lg:py-8 select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* ========================================================================= */}
        {/* DESKTOP HEADER LAYOUT (Gambar 3 Laptop) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-semibold text-slate-900">
              Kos yang lagi promo di
            </h2>

            {/* City Dropdown Selector Inline */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 text-2xl font-bold text-[#00BA88] hover:text-[#009c72] transition-colors outline-none border-b-2 border-[#00BA88] pb-0.5">
                  <span>{selectedCity}</span>
                  <ChevronDown className="w-5 h-5 text-[#00BA88]" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 p-2">
                {[
                  "Semua Kota",
                  "Jakarta",
                  "Surabaya",
                  "Yogyakarta",
                  "Bandung",
                ].map((city) => (
                  <DropdownMenuItem
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className="font-semibold text-slate-800 cursor-pointer"
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-semibold text-slate-800 border-slate-300 hover:bg-slate-50"
            >
              Lihat semua
            </Button>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="h-8 w-8 rounded-full border-slate-300 shadow-sm hover:bg-slate-100"
              >
                <ChevronLeft className="h-4 w-4 text-slate-700" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="h-8 w-8 rounded-full border-slate-300 shadow-sm hover:bg-slate-100"
              >
                <ChevronRight className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE HEADER LAYOUT (Gambar 3 Mobile) */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-3">
          <h2 className="text-xl font-extrabold text-slate-900">Promo kos</h2>

          {/* Full-width Dropdown Select Box */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full h-11 px-3.5 border border-slate-200 rounded-xl bg-white flex items-center justify-between text-sm font-semibold text-slate-800 shadow-sm outline-none">
                <span>{selectedCity}</span>
                <ChevronDown className="w-5 h-5 text-slate-700" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[calc(100vw-32px)] p-2"
            >
              {[
                "Semua Kota",
                "Jakarta",
                "Surabaya",
                "Yogyakarta",
                "Bandung",
              ].map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className="font-semibold text-slate-800 cursor-pointer"
                >
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CAROUSEL VIEW */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 35,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-2">
              {carouselItems.map((item) => (
                <CarouselItem
                  key={item.uniqueId}
                  className="pl-4 md:basis-1/3 lg:basis-1/4"
                >
                  <KosCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE 2x2 GRID VIEW (Gambar 3 Mobile) */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {kosPromoData.slice(0, 4).map((item) => (
              <KosCard key={item.id} item={item} />
            ))}
          </div>

          {/* Full-width 'Lihat semua' Button */}
          <Button
            variant="outline"
            className="w-full h-11 border-slate-200 bg-white font-semibold text-slate-800 text-sm shadow-sm rounded-xl"
          >
            Lihat semua
          </Button>
        </div>
      </div>
    </section>
  );
}
