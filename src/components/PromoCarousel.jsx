import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import promo1 from "@/asset/promo1.PNG";
import promo2 from "@/asset/promo2.PNG";
import promo3 from "@/asset/promo3.PNG";
import promo4 from "@/asset/promo4.PNG";
import promo5 from "@/asset/promo5.PNG";

export default function PromoCarousel() {
  const basePromoImages = [
    { id: 1, img: promo1, alt: "Promo 1" },
    { id: 2, img: promo2, alt: "Promo 2" },
    { id: 3, img: promo3, alt: "Promo 3" },
    { id: 4, img: promo4, alt: "Promo 4" },
    { id: 5, img: promo5, alt: "Promo 5" },
  ];

  // Quadrupled buffer to ensure 100% infinite continuous loop without any rewind jump
  const promoImages = [
    ...basePromoImages.map((item, idx) => ({ ...item, uniqueKey: `a-${idx}` })),
    ...basePromoImages.map((item, idx) => ({ ...item, uniqueKey: `b-${idx}` })),
    ...basePromoImages.map((item, idx) => ({ ...item, uniqueKey: `c-${idx}` })),
    ...basePromoImages.map((item, idx) => ({ ...item, uniqueKey: `d-${idx}` })),
  ];

  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Synchronize active index in real-time on scroll
  const onScroll = useCallback((emblaApi) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onScroll(api);
    api.on("scroll", onScroll);
    api.on("select", onScroll);
    api.on("reInit", onScroll);
    return () => {
      api?.off("scroll", onScroll);
      api?.off("select", onScroll);
    };
  }, [api, onScroll]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="w-full bg-white py-6 lg:py-2 overflow-hidden select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            duration: 35, // Silky smooth physics duration
            skipSnaps: false,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-4">
            {promoImages.map((promo, index) => {
              const isActive = selectedIndex === index;
              return (
                <CarouselItem
                  key={promo.uniqueKey}
                  className="pl-4 basis-[85%] sm:basis-[70%] md:basis-[60%] lg:basis-[55%]"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-out cursor-pointer transform-gpu ${
                      isActive
                        ? "scale-100 opacity-100 z-20"
                        : "scale-[0.75] opacity-65 z-0 blur-[0.3px]"
                    }`}
                  >
                    <img
                      src={promo.img}
                      alt={promo.alt}
                      className="w-full h-44 sm:h-56 md:h-58 lg:h-60 object-cover rounded-2xl pointer-events-none"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Bottom Navigation Controls & Action Text */}
        <div className="mt-6 flex items-center justify-center gap-4 text-center">
          {/* Desktop Left Arrow Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="hidden md:flex h-10 w-10 rounded-full bg-white shadow-md border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-slate-800" />
            <span className="sr-only">Previous Slide</span>
          </Button>

          {/* Center Action Text */}
          <a
            href="#"
            className="font-semibold text-sm sm:text-base text-slate-900 hover:underline py-2 px-4"
          >
            Lihat semua promo
          </a>

          {/* Desktop Right Arrow Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="hidden md:flex h-10 w-10 rounded-full bg-white shadow-md border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-slate-800" />
            <span className="sr-only">Next Slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
