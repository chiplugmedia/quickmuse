import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function AboutSection() {
  const { isDarkMode } = useTheme();
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-20 lg:py-28 transition-colors duration-500 ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-32 w-[550px] h-[550px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
        {/* Subtle Grid Mask */}
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] ${
            isDarkMode
              ? "bg-[linear-gradient(to_right,#8000210f_1px,transparent_1px),linear-gradient(to_bottom,#8000210f_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,#80002115_1px,transparent_1px),linear-gradient(to_bottom,#80002115_1px,transparent_1px)]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24 lg:space-y-32">
        {/* ================= SECTION 1: CORE NEURAL ECOSYSTEM ================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Visual Column Left (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className={`relative w-full max-w-lg rounded-2xl p-3 border backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.01] ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80"
                  : "bg-white/70 border-[#800021]/20 shadow-[#800021]/10"
              }`}
            >
              {!img1Loaded && (
                <div
                  className={`w-full h-[380px] rounded-xl animate-pulse flex items-center justify-center text-xs ${
                    isDarkMode
                      ? "bg-[#800021]/20 text-[#f6e6ce]/40"
                      : "bg-[#800021]/10 text-[#24000a]/40"
                  }`}
                >
                  Loading Neural Architecture...
                </div>
              )}

              <img
                src="https://res.cloudinary.com/dxj0d1g5e/image/upload/v1698230916/evermorehero0_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_qzqf7k.jpg"
                alt="QuickMuse Neural Network"
                loading="lazy"
                decoding="async"
                onLoad={() => setImg1Loaded(true)}
                className={`w-full h-auto max-h-[460px] object-cover rounded-xl transition-all duration-700 ${
                  img1Loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />

              {/* Floating Badge Top Right */}
              <div
                className={`absolute -top-4 -right-3 sm:-right-5 border backdrop-blur-md rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-3 transition-colors ${
                  isDarkMode
                    ? "bg-[#24000a]/90 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white/95 border-[#800021]/20 text-[#24000a]"
                }`}
              >
                <div className="p-2 rounded-lg bg-[#800021]/20 text-[#800021]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold">Adaptive Memory</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    Multi-turn context retention
                  </p>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div
                className={`absolute -bottom-4 -left-3 sm:-left-5 border backdrop-blur-md rounded-xl p-3 shadow-lg hidden sm:flex items-center gap-3 transition-colors ${
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
                  <p className="text-xs font-bold">Continuous RLHF</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    High-reward human feedback
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column Right (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors ${
                isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/70 text-[#800021]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
              <span>Core Foundation</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Meet the
              <span
                className={`block bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                }`}
              >
                QuickMuse Neural Architecture
              </span>
            </h2>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
              }`}
            >
              QuickMuse is our flagship Generative Intelligence platform, engineered
              to perceive nuance, retain long-term memory patterns, and evolve through
              real human interaction. We bridge the frontier of cutting-edge AI models
              with tangible global participation.
            </p>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
              }`}
            >
              To surpass standard probabilistic language models, QuickMuse relies on
              continuous reinforcement, precision prompt testing, and ethical human
              evaluation. Every subscriber has the direct opportunity to contribute to
              knowledge validation, memory alignment, and reasoning tasks.
            </p>

            {/* Feature Chips */}
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              {[
                { label: "Memory Enhancement", icon: "🧠" },
                { label: "AI Alignment Tasks", icon: "⚡" },
                { label: "Prompt Optimization", icon: "🎯" },
                { label: "Instant Reward Payouts", icon: "💎" },
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border backdrop-blur-md transition-all duration-300 hover:scale-[1.03] ${
                    isDarkMode
                      ? "bg-[#800021]/20 border-[#800021]/40 text-[#f6e6ce]"
                      : "bg-white/80 border-[#800021]/20 text-[#24000a]"
                  }`}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 hover:scale-[1.02] hover:bg-[#9a0028] transition-all duration-300"
              >
                <span>Join AI Training</span>
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
                href="#jobs"
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold border backdrop-blur-md transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#800021]/15 border-[#800021]/30 text-[#f6e6ce] hover:bg-[#800021]/30"
                    : "bg-white/60 border-[#800021]/20 text-[#24000a] hover:bg-white"
                }`}
              >
                Explore Remote Tasks
              </a>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: GLOBAL WORKFLOW & REWARDS ================= */}
        <div id="jobs" className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Content Column Left (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors ${
                isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/70 text-[#800021]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
              <span>Decentralized Labor Market</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Unlock Global Remote Tasks
              <span
                className={`block bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                }`}
              >
                With QuickMuse Ecosystem
              </span>
            </h2>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
              }`}
            >
              Enrolling in the QuickMuse Network grants you instant access to a
              distributed ecosystem of micro-tasks and remote AI operations.
              Our automated matching engine sources, tests, and delivers high-impact
              opportunities directly to your dashboard.
            </p>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
              }`}
            >
              No high-tech degree or programming background required. If you can
              read, communicate, formulate creative thoughts, or analyze answers,
              you are equipped to earn up to{" "}
              <strong className={isDarkMode ? "text-[#f6e6ce]" : "text-[#800021]"}>
                $18.6 / hour
              </strong>{" "}
              while advancing the future of machine cognition.
            </p>

            {/* Quick Metrics Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {[
                { title: "$18.6 / hr", desc: "Top Task Rate", sub: "Verified Payouts" },
                { title: "100% Remote", desc: "Work Anywhere", sub: "No Fixed Hours" },
                { title: "Under 15m", desc: "Fast Activation", sub: "Dedicated Mentor" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode
                      ? "bg-[#800021]/15 border-[#800021]/40"
                      : "bg-white/70 border-[#800021]/20"
                  }`}
                >
                  <p className="text-xl sm:text-2xl font-black">{stat.title}</p>
                  <p className="text-xs font-semibold mt-1 opacity-90">{stat.desc}</p>
                  <p className="text-[11px] opacity-60 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column Right (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex items-center justify-center">
            <div
              className={`relative w-full max-w-lg rounded-2xl p-3 border backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.01] ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80"
                  : "bg-white/70 border-[#800021]/20 shadow-[#800021]/10"
              }`}
            >
              {!img2Loaded && (
                <div
                  className={`w-full h-[380px] rounded-xl animate-pulse flex items-center justify-center text-xs ${
                    isDarkMode
                      ? "bg-[#800021]/20 text-[#f6e6ce]/40"
                      : "bg-[#800021]/10 text-[#24000a]/40"
                  }`}
                >
                  Loading Global Workforce...
                </div>
              )}

              <img
                src="https://res.cloudinary.com/dxj0d1g5e/image/upload/v1698230916/evermorehero0_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_qzqf7k.jpg"
                alt="QuickMuse Remote Work Opportunities"
                loading="lazy"
                decoding="async"
                onLoad={() => setImg2Loaded(true)}
                className={`w-full h-auto max-h-[460px] object-cover rounded-xl transition-all duration-700 ${
                  img2Loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />

              {/* Floating Shield Badge */}
              <div
                className={`absolute -bottom-4 right-4 sm:-right-4 border backdrop-blur-md rounded-xl p-3 shadow-lg flex items-center gap-3 transition-colors ${
                  isDarkMode
                    ? "bg-[#24000a]/90 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white/95 border-[#800021]/20 text-[#24000a]"
                }`}
              >
                <div className="p-2 rounded-lg bg-[#800021]/20 text-[#800021]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold">Guaranteed Payouts</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    Transparent automated ledger
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
