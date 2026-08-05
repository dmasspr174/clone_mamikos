import React from "react";
import { Mail, MessageSquare, Facebook, Instagram } from "lucide-react";
import mamikosLogo from "@/asset/mamikos-logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-10 lg:py-14 select-none">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Links Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Logo & App Downloads */}
          <div className="md:col-span-4 space-y-4">
            {/* Logo */}
            <a href="#" className="flex items-center" aria-label="Mamikos Beranda">
              <img
                src={mamikosLogo}
                alt="Mamikos Logo"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain"
              />
              <span className="ml-2 font-bold text-xl text-[#008761]">
                mamikos
              </span>
            </a>

            {/* Description Text */}
            <div className="text-xs sm:text-sm text-slate-600 space-y-1 font-normal leading-relaxed">
              <p>Dapatkan &quot;info kost murah&quot; hanya di MamiKos App.</p>
              <p>Mau &quot;Sewa Kost Murah&quot;?</p>
            </div>

            {/* App Store / Google Play Download Badges */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Google Play Button */}
              <a
                href="#"
                aria-label="Download Mamikos di Google Play Store"
                className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L14.81,13.12L14.81,10.88L16.81,8.88L20.57,11.05C21.14,11.37 21.14,12.63 20.57,12.95L16.81,15.12Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">
                    DAPATKAN DI
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                aria-label="Download Mamikos di Apple App Store"
                className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">
                    Download di
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: MAMIKOS Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              MAMIKOS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="space-y-2.5">
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Tentang Kami
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Job Mamikos
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Promosikan Kost Anda
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Pusat Bantuan
                  </a>
                </div>
              </div>
              <div className="space-y-2.5">
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Blog Mamikos
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Singgahsini
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: KEBIJAKAN */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              KEBIJAKAN
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <div>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Syarat dan Ketentuan Umum
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: HUBUNGI KAMI */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              HUBUNGI KAMI
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <a
                href="mailto:cs@mamikos.com"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>cs@mamikos.com</span>
              </a>
              <a
                href="https://wa.me/6281325111171"
                className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-slate-500 shrink-0" />
                <span>+6281325111171</span>
              </a>
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 pt-1 text-slate-700">
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors font-bold text-sm"
                  aria-label="X Twitter"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: SGS Logo & Copyright Notice */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left: SGS ISO Badge */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-amber-600/80 flex flex-col items-center justify-center p-0.5 text-[8px] font-bold text-slate-700 leading-tight text-center bg-amber-50/50">
              <span className="text-amber-800 text-[7px] font-extrabold">
                SGS
              </span>
              <span className="text-[6px] text-slate-600 font-bold">ISO 27001</span>
            </div>
          </div>

          {/* Right: Copyright Text */}
          <p className="text-xs text-slate-500 font-medium">
            ©2026 Mamikos.com. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
