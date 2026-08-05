import React from "react";
import { Star, Zap, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import singgahSiniLogo from "@/asset/singgahSini.PNG";
import apikLogo from "@/asset/apik.PNG";

export default function KosCard({ item }) {
  // Format Indonesian Currency
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col">
      {/* Image Banner Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Left Badge (Singgahsini / Apik / Andalan) */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1">
          {item.badgeType === "singgahsini" && (
            <div className="bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100">
              <img
                src={singgahSiniLogo}
                alt="Singgahsini"
                width={34}
                height={14}
                loading="lazy"
                decoding="async"
                className="h-3.5 w-auto object-contain"
              />
            </div>
          )}
          {item.badgeType === "apik" && (
            <div className="bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100">
              <img 
                src={apikLogo} 
                alt="Apik" 
                width={24}
                height={14}
                loading="lazy"
                decoding="async"
                className="h-3.5 w-auto object-contain" 
              />
            </div>
          )}
          {item.badgeType === "andalan" && (
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
              A
            </div>
          )}
        </div>

        {/* Image Bottom Banner (Rare Kost / Bebas Deposit) */}
        {item.bannerTag && (
          <div
            className={`absolute bottom-0 inset-x-0 py-1.5 px-3 text-center text-xs font-extrabold text-white flex items-center justify-center gap-1.5 shadow-md ${
              item.bannerTag.color === "pink"
                ? "bg-gradient-to-r from-pink-500 to-rose-500"
                : "bg-gradient-to-r from-purple-600 to-indigo-600"
            }`}
          >
            {item.bannerTag.type === "rare" && (
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                ★
              </span>
            )}
            {item.bannerTag.type === "bebas_deposit" && (
              <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                $
              </span>
            )}
            <span>{item.bannerTag.text}</span>
          </div>
        )}
      </div>

      {/* Card Body Info */}
      <CardContent className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-2">
          {/* Gender & Rating & Room Left Tag */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <Badge
              variant="outline"
              className="px-2 py-0.5 rounded-md font-semibold text-slate-700 border-slate-300 bg-slate-50"
            >
              {item.gender}
            </Badge>

            {item.rating && (
              <div className="flex items-center gap-1 font-bold text-slate-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{item.rating}</span>
              </div>
            )}

            {item.roomLeft && (
              <span className="text-red-600 italic font-semibold">
                {item.roomLeft}
              </span>
            )}
          </div>

          {/* Title & Area */}
          <div>
            <h3 className="font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs font-semibold text-slate-700 line-clamp-1">
              {item.area}
            </p>
          </div>

          {/* Facilities Subtitle */}
          <p className="text-[11px] text-slate-500 line-clamp-1">
            {item.facilities.join(" · ")}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="pt-2 border-t border-slate-100 space-y-1">
          {/* Discount / Promo Tag if available */}
          {item.discountAmount && (
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-bold text-red-600 flex items-center gap-0.5">
                <Zap className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                Diskon {Math.round(item.discountAmount / 1000)}rb
              </span>
              <span className="text-slate-500 line-through text-[11px]">
                {formatRupiah(item.originalPrice)}
              </span>
            </div>
          )}

          {item.promoBadge && (
            <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
              <Gift className="w-3.5 h-3.5" />
              <span>{item.promoBadge}</span>
            </div>
          )}

          {/* Final Price */}
          <div className="text-sm font-extrabold text-slate-900">
            {formatRupiah(item.finalPrice || item.price)}{" "}
            <span className="text-xs font-normal text-slate-500">
              ({item.priceUnit || "bulan"})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
