import { Helmet } from "react-helmet-async";
import SignupForm from "@/components/SignupForm";
import Header from "@/components/Header";
import { useTheme } from "@/context/ThemeContext";

export default function Register() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-hidden antialiased ${isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
        }`}
    >
      <Helmet>
        <title>Join QuickMuse | Create Contributor Account</title>
        <meta
          name="description"
          content="Create your QuickMuse account to start training AI memory, evaluating prompts, and earning hourly rewards up to $18.6/hr."
        />
      </Helmet>

      <Header />

      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glows */}
        <div
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-500 ${isDarkMode ? "bg-[#800021]/30 opacity-100" : "bg-[#800021]/15 opacity-70"
            }`}
        />
        <div
          className={`absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] transition-opacity duration-500 ${isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
            }`}
        />
        <div
          className={`absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full blur-[130px] transition-opacity duration-500 ${isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
            }`}
        />

        {/* Dynamic Grid Overlay */}
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${isDarkMode
              ? "bg-[linear-gradient(to_right,#8000210f_1px,transparent_1px),linear-gradient(to_bottom,#8000210f_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,#80002115_1px,transparent_1px),linear-gradient(to_bottom,#80002115_1px,transparent_1px)]"
            }`}
        />
      </div>


      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 sm:pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Visual & Value Proposition (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Tag */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-6 w-fit transition-colors ${isDarkMode
                  ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                  : "border-[#800021]/30 bg-white/70 text-[#800021]"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
              <span>Live AI Contributor Onboarding</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
              Shape The{" "}
              <span
                className={`block bg-clip-text text-transparent ${isDarkMode
                    ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                    : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                  }`}
              >
                Future Memory
              </span>
              <span>Of Artificial Intelligence.</span>
            </h1>

            <p
              className={`mt-5 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
                }`}
            >
              Join thousands of global contributors training QuickMuse. Evaluate responses,
              align memory nodes, and claim automated payouts with no prior machine learning experience.
            </p>

            {/* Benefit Cards */}
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: "💎",
                  title: "Earn Up to $18.6 / Hour",
                  desc: "Complete simple human verification & prompt refinement tasks at your own pace.",
                },
                {
                  icon: "🚀",
                  title: "Rapid Activation & Line Sync",
                  desc: "Instant onboarding with 1-on-1 mentor guidance immediately after verification.",
                },
                {
                  icon: "🔒",
                  title: "Bank & Wallet Integration",
                  desc: "Direct and secure payout settlements without regional boundaries.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] flex items-start gap-4 ${isDarkMode
                      ? "bg-[#800021]/15 border-[#800021]/40 shadow-sm hover:border-[#800021]/60"
                      : "bg-white/75 border-[#800021]/20 shadow-sm hover:border-[#800021]/40"
                    }`}
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof Stats */}
            <div
              className={`mt-10 p-5 rounded-2xl border backdrop-blur-md flex items-center justify-between transition-colors ${isDarkMode
                  ? "bg-[#24000a]/70 border-[#800021]/40"
                  : "bg-white/80 border-[#800021]/20"
                }`}
            >
              <div>
                <p className="text-xs uppercase tracking-wider opacity-60 font-mono">Platform Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-sm font-black">All Nodes Operational</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider opacity-60 font-mono">Active Models</p>
                <p className="text-sm font-black text-[#800021]">50,000+</p>
              </div>
            </div>
          </div>

          {/* Right Column: Free Registration Form Container (7 cols on lg) */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="fade-in">
              <SignupForm />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
