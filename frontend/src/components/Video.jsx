import { useTheme } from "@/context/ThemeContext";

export default function Video() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-28 transition-colors duration-500 border-t ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
        <div
          className={`absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Content Left (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-5 transition-colors ${
                isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/70 text-[#800021]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
              <span>Global Contributor Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
              QuickMuse is Opening{" "}
              <span
                className={`block bg-clip-text text-transparent ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                }`}
              >
                Global AI Opportunities
              </span>
            </h2>

            <p
              className={`mt-6 text-base sm:text-lg leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
              }`}
            >
              QuickMuse unlocks direct earnings for thousands of contributors worldwide.
              Simply evaluate model responses, test prompt edge cases, and guide the
              development of more thoughtful, human-like generative intelligence.
            </p>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
              }`}
            >
              No coding experience or AI credentials needed. By sharing your genuine human
              perspective, cultural context, and everyday judgment, you play a pivotal role
              in mitigating machine hallucinations.
            </p>

            {/* Metric pill */}
            <div
              className={`mt-6 p-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/40"
                  : "bg-white/80 border-[#800021]/20"
              }`}
            >
              <span className="text-2xl">🌍</span>
              <p className="text-xs sm:text-sm font-semibold">
                Turn your available time into extra income while helping teach smarter AI models.
              </p>
            </div>
          </div>

          {/* Video / Visual Right (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className={`relative w-full max-w-lg rounded-2xl p-3 border backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.01] ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80"
                  : "bg-white/70 border-[#800021]/20 shadow-[#800021]/10"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl">
                <video
                  src="https://res.cloudinary.com/dxj0d1g5e/image/upload/v1698230916/evermorehero0_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_qzqf7k.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[460px] object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-4 right-4 sm:-right-4 border backdrop-blur-md rounded-xl p-3 shadow-lg flex items-center gap-3 transition-colors ${
                  isDarkMode
                    ? "bg-[#24000a]/90 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white/95 border-[#800021]/20 text-[#24000a]"
                }`}
              >
                <div className="p-2 rounded-lg bg-[#800021]/20 text-[#800021]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold">Watch & Learn</p>
                  <p className={`text-[10px] ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                    AI training walk-through
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
