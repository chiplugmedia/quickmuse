import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const FAQS = [
  {
    q: "What is QuickMuse?",
    a: "QuickMuse bridges digital intelligence with real-world participation, engineering persistent memory and contextual reasoning for next-generation generative AI while rewarding human evaluators.",
  },
  {
    q: "How does the AI Mentorship Program work?",
    a: "Every verified subscriber is paired with a personal mentor immediately upon registration. Your mentor provides direct guidance on navigating tasks, optimizing verification speed, and maximizing hourly earnings.",
  },
  {
    q: "How do I claim reward payouts?",
    a: "Tasks are logged on an automated ledger. Upon consensus verification of your prompt ratings and memory alignment, bounties are dispatched directly to your registered bank account or wallet.",
  },
  {
    q: "Do I need technical machine learning expertise?",
    a: "No special engineering background is required. If you can read clearly, follow basic evaluation rubrics, and provide thoughtful opinions, you can contribute effectively.",
  },
];

export default function FAQ() {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className={`relative overflow-hidden py-20 lg:py-28 transition-colors duration-500 border-t ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-1/3 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Mentorship Spotlight (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-5 transition-colors ${
                isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/70 text-[#800021]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
              <span>Mentorship & Guidance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Learn, Earn &{" "}
              <span
                className={`bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                }`}
              >
                Grow with QuickMuse
              </span>
            </h2>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
              }`}
            >
              You don't navigate the AI ecosystem alone. Every subscriber receives
              dedicated 1-on-1 mentor support immediately after signing up to help
              you master task rubrics and optimize your hourly output.
            </p>

            <div
              className={`mt-6 p-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/40"
                  : "bg-white/80 border-[#800021]/20"
              }`}
            >
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#800021]">
                  Verified Earning Potential
                </p>
                <p className="text-sm font-semibold mt-0.5">
                  Earn up to $18.6 / hour while contributing to AI memory alignment.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 hover:scale-[1.02] hover:bg-[#9a0028] transition-all duration-300"
              >
                <span>Get Started with a Mentor</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? isDarkMode
                        ? "bg-[#800021]/25 border-[#800021]/60 shadow-lg"
                        : "bg-white/90 border-[#800021]/40 shadow-md"
                      : isDarkMode
                      ? "bg-[#800021]/10 border-[#800021]/25 hover:border-[#800021]/45"
                      : "bg-white/60 border-[#800021]/15 hover:border-[#800021]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base tracking-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#800021] text-[#f6e6ce] border-[#800021]"
                          : isDarkMode
                          ? "bg-[#24000a]/60 border-[#800021]/40 text-[#f6e6ce]"
                          : "bg-white border-[#800021]/20 text-[#800021]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm leading-relaxed opacity-85 border-t border-inherit/20 mt-1">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
