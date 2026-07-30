import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Calendar,
  ChevronDown,
  ChevronRight,
  Bed,
  Building2,
  Home,
  MessageSquare,
  Menu,
  Info,
  BellOff,
  Bell,
  X,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import mamikosLogo from "@/asset/mamikos-logo.png";
import singgahSiniLogo from "@/asset/singgah-logo.png";
import apikLogo from "@/asset/apik.PNG";

export default function Header() {
  // Mobile Fullscreen Overlays State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileNotifOpen, setIsMobileNotifOpen] = useState(false);

  // Sticky Header Search Bar State (Laptop View)
  const [showSearchInHeader, setShowSearchInHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowSearchInHeader(true);
      } else {
        setShowSearchInHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Navigation items hover style with green bottom separator line (except profile)
  const navLinkStyle =
    "h-16 px-1 flex items-center gap-1 font-medium text-slate-800 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 data-[state=open]:border-emerald-600 transition-all cursor-pointer bg-transparent outline-none";

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* 1. Top Bar (Desktop Only) */}
      <div className="hidden md:block bg-slate-50/80 border-b border-slate-100 py-1.5 text-xs text-slate-600">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between sm:justify-start gap-6">
          <button className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors font-medium">
            <Smartphone className="w-3.5 h-3.5 text-slate-500" />
            <span>Download App</span>
          </button>

          <button className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Sewa Kos</span>
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo Asset with Brand Name OR Sticky Search Bar */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center shrink-0">
            <img
              src={mamikosLogo}
              alt="kos"
              className="h-7 w-auto object-contain"
            />
            {!showSearchInHeader && (
              <p className="ml-2 font-bold text-lg text-[#00BA88]">mamikos</p>
            )}
          </a>

          {/* Sticky Header Search Bar (Laptop view when scrolled past hero section) */}
          {showSearchInHeader && (
            <div className="hidden lg:flex items-center animate-in fade-in slide-in-from-left-2 duration-300">
              <div className="bg-white rounded-2xl shadow-md border border-slate-200/90 p-1 flex items-center gap-2 w-72 lg:w-96">
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-3 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Masukan nama lokasi/area/alamat"
                    className="pl-9 h-8 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-xs text-slate-800 placeholder:text-slate-400 bg-transparent"
                  />
                </div>
                <Button className="h-8 px-4 bg-[#00BA88] hover:bg-[#009c72] text-white font-bold text-xs rounded-xl transition-colors shrink-0">
                  Cari
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-800 h-16">
          {/* Dropdown 1: Cari Apa? */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={navLinkStyle}>
                <span>Cari Apa?</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64 p-2 space-y-1 mt-0"
            >
              <DropdownMenuItem className="py-2.5 px-3 flex items-center gap-3 font-semibold text-slate-800">
                <Bed className="w-5 h-5 text-slate-700" />
                <span>Kos</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="py-2.5 px-3 flex items-center gap-3 font-semibold text-slate-800">
                <div className="flex items-center gap-1">
                  <img
                    src={singgahSiniLogo}
                    alt="Singgahsini"
                    className="h-4 w-auto"
                  />
                </div>
                <span>Kos Singgahsini & Apik</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="py-2.5 px-3 flex items-center gap-3 font-semibold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  A
                </div>
                <span>Kos Andalan</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="py-2.5 px-3 flex items-center gap-3 font-semibold text-slate-800">
                <Building2 className="w-5 h-5 text-slate-700" />
                <span>Apartemen</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="py-2.5 px-3 flex items-center gap-3 font-semibold text-slate-800">
                <Home className="w-5 h-5 text-slate-700" />
                <span>Jual-Beli Properti</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Nav 2: Favorit */}
          <a href="#" className={navLinkStyle}>
            Favorit
          </a>

          {/* Nav 3: Chat (Opens Sheet from RIGHT) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className={navLinkStyle}>Chat</button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[340px] sm:w-[400px] p-6">
              <SheetHeader className="pb-4 border-b border-slate-100">
                <SheetTitle className="text-xl font-bold text-slate-900 text-left">
                  Chat
                </SheetTitle>
              </SheetHeader>

              {/* Chat Content Body Placeholder */}
              <div className="py-8 flex flex-col items-center justify-center space-y-4">
                <div className="w-64 bg-slate-100/80 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="h-2.5 bg-slate-300 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                <div className="w-64 bg-slate-100/80 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="h-2.5 bg-slate-300 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Nav 4: Notifikasi (Popover for Desktop) */}
          <Popover>
            <PopoverTrigger asChild>
              <button className={navLinkStyle}>Notifikasi</button>
            </PopoverTrigger>
            <PopoverContent
              align="center"
              sideOffset={1}
              className="w-[360px] p-0 shadow-2xl rounded-2xl border border-slate-200 bg-white"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <h3 className="font-bold text-lg text-slate-900">Notifikasi</h3>
                <PopoverClose className="rounded-full p-1 hover:bg-slate-100 text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </PopoverClose>
              </div>

              <div className="p-4 space-y-5">
                <div>
                  <button className="px-3.5 py-1 rounded-full border border-slate-300 text-xs font-semibold text-slate-800 flex items-center gap-1.5 hover:bg-slate-50 transition-colors">
                    <Info className="w-3.5 h-3.5 text-slate-600" />
                    <span>Utama</span>
                  </button>
                </div>

                <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-24 h-24 flex items-center justify-center text-slate-300">
                    <BellOff className="w-16 h-16 stroke-[1.25] text-slate-300" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Belum ada notifikasi...
                  </h4>
                  <p className="text-xs text-slate-500 max-w-[260px] leading-relaxed">
                    Belum ada notifikasi. Ketika ada notifikasi baru, akan
                    muncul di halaman ini.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Dropdown 2: Lainnya */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={navLinkStyle}>
                <span>Lainnya</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 p-2 space-y-1">
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800">
                Pusat Bantuan
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800">
                Blog Mamikos
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800">
                Syarat dan Ketentuan
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown 3: Profil Avatar with Red Dot */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative outline-none rounded-full ring-2 ring-transparent focus:ring-emerald-500 ml-1 cursor-pointer">
                <Avatar className="w-9 h-9 border border-slate-200">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Dimas Prasetyo"
                  />
                  <AvatarFallback className="bg-emerald-600 text-white font-bold">
                    DP
                  </AvatarFallback>
                </Avatar>
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 p-2 space-y-1">
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800 flex items-center justify-between">
                <span>Profil</span>
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800">
                Riwayat Transaksi
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2.5 px-3 font-semibold text-slate-800">
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Header Action Triggers */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsMobileNotifOpen(true)}
            className="p-1 text-slate-700 hover:text-emerald-600 transition-colors outline-none"
          >
            <Bell className="w-6 h-6 stroke-[1.75]" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="relative p-1 text-slate-700 hover:text-emerald-600 transition-colors outline-none"
          >
            <Menu className="w-7 h-7 stroke-[1.75]" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE BURGER MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto p-6 animate-in fade-in duration-200">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-2xl bg-slate-100/90 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6 p-2 pr-4 rounded-full border border-slate-100 shadow-sm bg-white flex items-center gap-3">
            <Avatar className="w-10 h-10 border border-slate-200">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Dimas Prasetyo"
              />
              <AvatarFallback className="bg-emerald-600 text-white font-bold">
                DP
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2 flex-1">
              <span className="font-bold text-slate-900 text-base">
                Dimas Prasetyo
              </span>
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block"></span>
            </div>
          </div>

          <div className="space-y-4 font-bold text-slate-900 text-base">
            <a
              href="#"
              className="flex items-center justify-between py-2 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-slate-800" />
                <span>Kos</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-2 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <img
                    src={singgahSiniLogo}
                    alt="Singgahsini"
                    className="h-4 w-auto"
                  />
                </div>
                <span>Kos Singgahsini & Apik</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-2 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                  A
                </div>
                <span>Kos Andalan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-2 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-slate-800" />
                <span>Apartemen</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-2 hover:text-emerald-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-slate-800" />
                <span>Jual-Beli Properti</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>
          </div>

          <hr className="my-6 border-slate-100" />

          <div className="space-y-4 font-medium text-slate-800 text-sm">
            <a href="#" className="block py-1 hover:text-emerald-600">
              Download Aplikasi
            </a>
            <a href="#" className="block py-1 hover:text-emerald-600">
              Pusat Bantuan
            </a>
            <a href="#" className="block py-1 hover:text-emerald-600">
              Blog Mamikos
            </a>
            <a href="#" className="block py-1 hover:text-emerald-600">
              Syarat dan Ketentuan
            </a>
            <a href="#" className="block py-1 hover:text-emerald-600">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      )}

      {/* FULLSCREEN MOBILE NOTIFICATION OVERLAY */}
      {isMobileNotifOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">Notifikasi</h2>
            <button
              onClick={() => setIsMobileNotifOpen(false)}
              className="p-1 text-slate-800 hover:bg-slate-100 rounded-full transition-colors outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col">
            <div>
              <button className="px-4 py-1.5 rounded-full border border-slate-800 text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-slate-700" />
                <span>Utama</span>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-24 h-24 flex items-center justify-center text-slate-300">
                <BellOff className="w-20 h-20 stroke-[1.25] text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Belum ada notifikasi...
              </h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Belum ada notifikasi. Ketika ada notifikasi baru, akan muncul di
                halaman ini.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
