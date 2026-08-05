import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import ugmLogo from "@/asset/ugm.png";
import undipLogo from "@/asset/undip.png";
import uiLogo from "@/asset/ui.png";
import unpadLogo from "@/asset/unpad.png";
import stanLogo from "@/asset/stan.png";
import ubLogo from "@/asset/ub.png";
import unairLogo from "@/asset/unair.png";

export default function CampusSection() {
  const campusList = [
    {
      id: 1,
      code: "UGM",
      city: "Jogja",
      logo: ugmLogo,
    },
    {
      id: 2,
      code: "UNDIP",
      city: "Semarang",
      logo: undipLogo,
    },
    {
      id: 3,
      code: "UI",
      city: "Depok",
      logo: uiLogo,
    },
    {
      id: 4,
      code: "UNPAD",
      city: "Jatinangor",
      logo: unpadLogo,
    },
    {
      id: 5,
      code: "STAN",
      city: "Jakarta",
      logo: stanLogo,
    },
    {
      id: 6,
      code: "UB",
      city: "Malang",
      logo: ubLogo,
    },
    {
      id: 7,
      code: "UNAIR",
      city: "Surabaya",
      logo: unairLogo,
    },
  ];

  return (
    <section className="w-full bg-white py-6 lg:py-8 select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          Kos Sekitar Kampus
        </h2>

        {/* 8-Card Grid Layout (Laptop: 4 columns x 2 rows | Mobile: 2 columns x 4 rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {/* Campus Cards */}
          {campusList.map((campus) => (
            <Card
              key={campus.id}
              className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer h-20 sm:h-24 flex items-center"
            >
              <CardContent className="p-3.5 sm:p-4 w-full flex items-center gap-3.5">
                {/* Campus Emblem Logo from Asset */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center bg-slate-50 rounded-full p-1 border border-slate-100">
                  <img
                    src={campus.logo}
                    alt={campus.code}
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Campus Code & City Name */}
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-emerald-600 transition-colors">
                    {campus.code}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {campus.city}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* 8th Card: 'Lihat semua →' */}
          <Card className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-500 hover:shadow-md transition-all duration-300 cursor-pointer h-20 sm:h-24 flex items-center justify-center">
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
