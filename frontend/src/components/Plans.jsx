import { PLANS } from "@/lib/constants";
import { useTheme } from "@/context/ThemeContext";

export default function Plans() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="plans"
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 border-t ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-4 transition-colors ${
              isDarkMode
                ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                : "border-[#800021]/30 bg-white/70 text-[#800021]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
            <span>Projected Reward Structure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Transparent Tiers For{" "}
            <span
              className={`bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                  : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
              }`}
            >
              Every Contributor
            </span>
          </h2>

          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-[#f6e6ce]/80" : "text-[#24000a]/80"
            }`}
          >
            Choose your subscription line and begin earning through verified AI training,
            evaluations, referral bounties, and global remote opportunities.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border backdrop-blur-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between ${
                plan.id === "Premium"
                  ? isDarkMode
                    ? "bg-[#800021]/25 border-[#800021]/60 shadow-2xl shadow-[#800021]/20 ring-1 ring-[#800021]"
                    : "bg-white/90 border-[#800021]/40 shadow-xl shadow-[#800021]/10 ring-1 ring-[#800021]/50"
                  : isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/35 shadow-lg shadow-[#24000a]/60"
                  : "bg-white/75 border-[#800021]/20 shadow-md shadow-[#800021]/5"
              }`}
            >
              {/* Premium Badge */}
              {plan.id === "Premium" && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-[#800021] text-[#f6e6ce] text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="text-xl sm:text-2xl font-black">{plan.name}</h3>

                {/* Subscription Fee & Price */}
                <div className="mt-4 pb-5 border-b border-inherit/20">
                  <p className="text-[11px] uppercase tracking-wider opacity-60 font-mono">
                    {plan.subscriptionFee}
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#800021]">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`rounded-xl border p-3 flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors ${
                        isDarkMode
                          ? "bg-[#24000a]/50 border-[#800021]/30"
                          : "bg-white/70 border-[#800021]/15"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{feature.title}</span>
                        {feature.status && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                              feature.status === "PRIORITY"
                                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-extrabold"
                                : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                            }`}
                          >
                            {feature.status}
                          </span>
                        )}
                      </div>

                      <span className="font-black text-[#800021]">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`/register?plan=${encodeURIComponent(plan.id)}`}
                className={`mt-8 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.id === "Premium"
                    ? "text-[#f6e6ce] bg-[#800021] hover:bg-[#9a0028] shadow-lg shadow-[#800021]/30 hover:scale-[1.02]"
                    : isDarkMode
                    ? "bg-[#800021]/20 border border-[#800021]/40 text-[#f6e6ce] hover:bg-[#800021]/40"
                    : "bg-white/80 border border-[#800021]/20 text-[#24000a] hover:bg-white"
                }`}
              >
                Activate {plan.id} Line
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
