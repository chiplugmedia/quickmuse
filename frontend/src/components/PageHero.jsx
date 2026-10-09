import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function PageHero({
  title = "Welcome",
  subtitle = "Building scalable digital solutions and seamless web experiences.",
  category = "QuickMuse Ecosystem",
  showBadge = true,
  breadcrumbs = [],
  ctaText = null,
  ctaLink = null,
}) {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-500 pt-32 sm:pt-36 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-20 border-b ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glow Orbs */}
        <div
          className={`absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/30 opacity-100" : "bg-[#800021]/15 opacity-80"
          }`}
        />
        <div
          className={`absolute top-1/2 -right-32 w-[450px] h-[450px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/10 opacity-70"
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

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 text-left">
        {/* Top Eyebrow / Category Pill */}
        {showBadge && (
          <div className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm mb-5 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800021] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800021]" />
            </span>
            <span
              className={
                isDarkMode ? "text-[#f6e6ce]" : "text-[#800021]"
              }
            >
              {category}
            </span>
          </div>
        )}

        {/* Dynamic Title with Multi-stop Gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          <span
            className={`block bg-clip-text text-transparent pb-1 ${
              isDarkMode
                ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
            }`}
          >
            {title}
          </span>
        </h1>

        {/* Decorative Divider Accent Line */}
        <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#800021] via-[#9a0028] to-[#e5989b]" />

        {/* Subtitle / Description */}
        <p
          className={`mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl font-normal transition-colors ${
            isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
          }`}
        >
          {subtitle}
        </p>

        {/* Optional Action or Breadcrumbs */}
        {(ctaText && ctaLink) || breadcrumbs.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 hover:scale-[1.02] hover:bg-[#9a0028] transition-all duration-300"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}

            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium opacity-60">
                <Link to="/" className="hover:underline">Home</Link>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <span>/</span>
                    {crumb.link ? (
                      <Link to={crumb.link} className="hover:underline">{crumb.label}</Link>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
