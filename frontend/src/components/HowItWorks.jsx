import { useTheme } from "@/context/ThemeContext";

const STEPS = [
  {
    number: "01",
    title: "Create Your Account",
    body: "Join QuickMuse and become part of a global contributor network shaping the future memory of Generative Artificial Intelligence.",
  },
  {
    number: "02",
    title: "Contribute & Train AI",
    body: "Participate in AI memory training, prompt improvement, response evaluation, and human intelligence tasks guided by your mentor.",
  },
  {
    number: "03",
    title: "Earn Verified Rewards",
    body: "Receive hourly reward bounties up to $18.6/hr directly into your bank or wallet while improving next-generation cognitive systems.",
  },
];

export default function HowItWorks() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="how"
      className={`relative overflow-hidden py-20 lg:py-28 transition-colors duration-500 border-t ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs sm:text-sm font-semibold backdrop-blur-md mb-5 transition-colors ${
              isDarkMode
                ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                : "border-[#800021]/30 bg-white/70 text-[#800021]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
            <span>Workflow & Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">
            From Human Intelligence
            <span
              className={`block mt-1 bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                  : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
              }`}
            >
              To Smarter AI
            </span>
          </h2>

          <p
            className={`mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
            }`}
          >
            Join QuickMuse, contribute to the evolution of advanced AI memory systems,
            and earn consistent rewards while shaping the future of intelligent technologies.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mt-16 sm:mt-20">
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#800021]/40 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border backdrop-blur-2xl p-7 sm:p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between ${
                  isDarkMode
                    ? "bg-[#800021]/15 border-[#800021]/40 shadow-xl shadow-[#24000a]/60 hover:border-[#800021]/70"
                    : "bg-white/80 border-[#800021]/20 shadow-md shadow-[#800021]/5 hover:border-[#800021]/40"
                }`}
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-[#800021] to-[#b3002e] flex items-center justify-center text-[#f6e6ce] font-black text-xl shadow-lg shadow-[#800021]/30 border border-white/10">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isDarkMode ? "text-[#f6e6ce]/75" : "text-[#24000a]/75"
                    }`}
                  >
                    {step.body}
                  </p>
                </div>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#800021] to-[#e5989b]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
