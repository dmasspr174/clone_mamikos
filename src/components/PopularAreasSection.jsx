import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function PopularAreasSection() {
  const cityAreas = [
    {
      id: 1,
      name: "Kos Yogyakarta",
      image:
        "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 2,
      name: "Kos Jakarta",
      image:
        "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 3,
      name: "Kos Bandung",
      image:
        "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 4,
      name: "Kos Surabaya",
      image:
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 5,
      name: "Kos Malang",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 6,
      name: "Kos Semarang",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=360&auto=format&fit=crop&q=75",
    },
    {
      id: 7,
      name: "Kos Medan",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=360&auto=format&fit=crop&q=75",
    },
  ];

  return (
    <section className="w-full bg-white py-6 lg:py-8 select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          Area Kos Terpopuler
        </h2>

        {/* 8-Card Grid Layout (Laptop: 4 columns x 2 rows | Mobile: 2 columns x 4 rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {/* City Cards */}
          {cityAreas.map((city) => (
            <Card
              key={city.id}
              className="group relative overflow-hidden rounded-2xl border-none shadow-sm cursor-pointer aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center"
            >
              {/* Background City Image */}
              <img
                src={city.image}
                alt={city.name}
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20 group-hover:from-black/80 transition-colors" />

              {/* Centered City Name Text */}
              <CardContent className="relative z-10 p-2 text-center">
                <span className="font-extrabold text-white text-sm sm:text-base lg:text-lg tracking-wide drop-shadow-md group-hover:text-emerald-300 transition-colors">
                  {city.name}
                </span>
              </CardContent>
            </Card>
          ))}

          {/* 8th Card: 'Lihat semua →' */}
          <Card className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-300 cursor-pointer aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center">
            <CardContent className="p-2 text-center">
              <a
                href="#"
                className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-emerald-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="hover:underline">Lihat semua</span>
                <span className="text-base lg:text-xl">→</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
