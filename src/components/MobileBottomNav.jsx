import React, { useState, useEffect } from "react";
import { Search, Heart, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileBottomNav() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("cari");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show ONLY when scrolling UP (currentScrollY < lastScrollY) and past top hero area
      if (currentScrollY < lastScrollY && currentScrollY > 80) {
        setShowBottomNav(true);
      } else {
        // Hide when scrolling DOWN (currentScrollY > lastScrollY) or at top
        setShowBottomNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCariClick = () => {
    setActiveTab("cari");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatClick = () => {
    setActiveTab("chat");
    setIsChatOpen(true);
  };

  return (
    <>
      {/* Mobile Bottom Navigation Bar (Gambar 1 Mobile) */}
      <div
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200/80 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 transform ${
          showBottomNav
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-around py-2 px-4">
          {/* Tab 1: Cari */}
          <button
            onClick={handleCariClick}
            className={`flex flex-col items-center gap-1 text-xs font-semibold transition-colors ${
              activeTab === "cari"
                ? "text-[#00BA88]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <Search
              className={`w-5 h-5 ${
                activeTab === "cari"
                  ? "text-[#00BA88] stroke-[2.5]"
                  : "text-slate-400"
              }`}
            />
            <span>Cari</span>
          </button>

          {/* Tab 2: Favorit */}
          <button
            onClick={() => setActiveTab("favorit")}
            className={`flex flex-col items-center gap-1 text-xs font-semibold transition-colors ${
              activeTab === "favorit"
                ? "text-[#00BA88]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${
                activeTab === "favorit" ? "text-[#00BA88]" : "text-slate-400"
              }`}
            />
            <span>Favorit</span>
          </button>

          {/* Tab 3: Chat */}
          <button
            onClick={handleChatClick}
            className={`flex flex-col items-center gap-1 text-xs font-semibold transition-colors ${
              activeTab === "chat"
                ? "text-[#00BA88]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <MessageSquare
              className={`w-5 h-5 ${
                activeTab === "chat" ? "text-[#00BA88]" : "text-slate-400"
              }`}
            />
            <span>Chat</span>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Chat Overlay (Gambar 2 Mobile) */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden animate-in fade-in duration-200">
          {/* Top Header */}
          <div className="h-14 px-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-800">Chat</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(false)}
              className="h-9 w-9 rounded-full text-slate-600 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Empty Chat Illustration & Message */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            {/* Custom Empty State Chat Graphic matching Gambar 2 */}
            <div className="w-48 h-48 rounded-full bg-slate-100/70 flex flex-col items-center justify-center relative mb-6">
              <div className="space-y-2.5 w-36">
                <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00BA88] flex items-center justify-center text-white text-[10px]">
                    💬
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-10 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 ml-4">
                  <div className="w-6 h-6 rounded-full bg-[#00BA88] flex items-center justify-center text-white text-[10px]">
                    💬
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-12 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-8 bg-slate-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm font-bold text-slate-800">
              Tidak ada percakapan saat ini.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
