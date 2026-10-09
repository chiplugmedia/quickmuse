import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function Hero({ isDarkMode: propDarkMode }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const isDarkMode = propDarkMode !== undefined ? propDarkMode : theme.isDarkMode;

  return (
    <section
      id="top"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Animated Glows */}
        <div
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/30 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
        <div
          className={`absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full blur-[130px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />

        {/* Dynamic Grid Overlay */}
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
            isDarkMode
              ? "bg-[linear-gradient(to_right,#8000210f_1px,transparent_1px),linear-gradient(to_bottom,#8000210f_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,#80002115_1px,transparent_1px),linear-gradient(to_bottom,#80002115_1px,transparent_1px)]"
          }`}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-12 pt-32 pb-20 flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT CONTENT COLUMN (Col 7) ================= */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Tag */}
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm transition-colors ${
                isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/60 text-[#800021]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800021] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800021]" />
              </span>
              <span>Next Generation AI Ecosystem</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] transition-colors ${
                isDarkMode ? "text-[#f6e6ce]" : "text-[#24000a]"
              }`}
            >
              Building The{" "}
              <span
                className={`block mt-1 bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                }`}
              >
                Future Memory
              </span>
              <span
                className={`block text-3xl sm:text-5xl font-bold mt-2 transition-colors ${
                  isDarkMode ? "text-[#f6e6ce]/40" : "text-[#24000a]/40"
                }`}
              >
                Of Artificial Intelligence
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-2xl font-normal transition-colors ${
                isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
              }`}
            >
              Earn rewards by helping train AI, improving memory functions,
              contributing to advanced learning systems, promoting products, and
              driving real-world adoption of intelligent technologies with{" "}
              <strong
                className={isDarkMode ? "text-[#f6e6ce]" : "text-[#800021]"}
              >
                QuickMuse
              </strong>
              .
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#9a0028] shadow-[#800021]/30"
              >
                <span>Join QuickMuse</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href="#about"
                className={`inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold border backdrop-blur-md transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#800021]/20 border-[#800021]/40 text-[#f6e6ce] hover:bg-[#800021]/40"
                    : "bg-white/80 border-[#800021]/20 text-[#24000a] hover:bg-white"
                }`}
              >
                Learn More
              </a>
            </div>

            {/* Quick Metrics / Social Proof */}
            <div
              className={`mt-12 pt-8 border-t grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg transition-colors ${
                isDarkMode ? "border-[#800021]/30" : "border-[#800021]/15"
              }`}
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold">99.8%</p>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                  Accuracy Score
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold">50K+</p>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                  Active AI Models
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold">Instant</p>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                  Reward Payouts
                </p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT VISUAL COLUMN (Col 5) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Visual Wrapper Frame with Glassmorphism */}
            <div
              className={`relative w-full max-w-lg rounded-2xl p-3 border backdrop-blur-xl shadow-2xl transition-all ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80"
                  : "bg-white/60 border-[#800021]/20 shadow-[#800021]/10"
              }`}
            >
              {/* Skeleton Loader */}
              {!imageLoaded && (
                <div
                  className={`w-full h-[380px] sm:h-[450px] rounded-xl animate-pulse flex items-center justify-center text-xs ${
                    isDarkMode
                      ? "bg-[#800021]/20 text-[#f6e6ce]/40"
                      : "bg-[#800021]/10 text-[#24000a]/40"
                  }`}
                >
                  Loading QuickMuse Visual...
                </div>
              )}

              {/* Hero Image */}
              <img
                src="https://res.cloudinary.com/dxj0d1g5e/image/upload/v1698230916/evermorehero0_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_qzqf7k.jpg"
                alt="QuickMuse AI Network"
                fetchPriority="high"
                decoding="async"
                draggable="false"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-auto max-h-[480px] object-cover rounded-xl transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />

              {/* Floating Badge - Top Right */}
              <div
                className={`absolute -top-4 -right-4 sm:-right-6 border backdrop-blur-md rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-3 transition-colors ${
                  isDarkMode
                    ? "bg-[#24000a]/90 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white/95 border-[#800021]/20 text-[#24000a]"
                }`}
              >
                <div className="p-2 rounded-lg bg-[#800021]/20 text-[#800021]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold">Fast Neural Training</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    Real-time memory sync
                  </p>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div
                className={`absolute -bottom-4 -left-4 sm:-left-6 border backdrop-blur-md rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-3 transition-colors ${
                  isDarkMode
                    ? "bg-[#24000a]/90 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white/95 border-[#800021]/20 text-[#24000a]"
                }`}
              >
                <div className="p-2 rounded-lg bg-[#800021]/20 text-[#800021]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold">Contribute & Earn</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    Monetize memory tasks
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}