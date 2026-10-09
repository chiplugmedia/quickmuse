import { useState } from "react";
import PageHero from "./PageHero";
import { useTheme } from "@/context/ThemeContext";

const termsSections = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <p>
        By accessing the QuickMuse AI Network, creating a contributor account, or participating in
        neural training modules, you enter into a legally binding agreement with QuickMuse. If you do not
        concur with these Terms and our companion Privacy Policy, you must discontinue platform use immediately.
      </p>
    ),
  },
  {
    id: "user-accounts",
    title: "2. Contributor Accounts & Verification",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Each participant is granted a single personal contributor account. Account creation entails
          supplying accurate, authentic identification and valid payment routing details:
        </p>
        <ul className="list-disc list-inside space-y-1.5 opacity-80 pl-2 text-sm leading-relaxed">
          <li>Automated scripting, multi-accounting, and botting to simulate human evaluations are strictly forbidden.</li>
          <li>Account credentials must be safeguarded; you remain accountable for all activities executed under your session.</li>
          <li>Accounts exhibiting fraudulent activity or synthetic manipulation will be permanently deactivated with forfeiture of pending bounties.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "training-and-rewards",
    title: "3. AI Training, Bounties & Payouts",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Contributors receive compensation based on their active subscription tier (QuickMuse Trial or
          QuickMuse Premium), task accuracy scores, and verified hours:
        </p>
        <p className="text-sm opacity-80 leading-relaxed">
          - <strong>Evaluation Quality Thresholds:</strong> All prompt evaluations are cross-verified by consensus validation algorithms.<br />
          - <strong>Payout Cycles:</strong> Validated rewards are dispatched directly to your designated bank or wallet via automated ledger.<br />
          - <strong>Dispute Resolution:</strong> If a task evaluation is flagged, members may request mentor review within 7 calendar days.
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property & AI Models",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    content: (
      <p>
        All foundational architectures, memory synthesis engines, weights, trademarks, and interfaces
        are the exclusive intellectual property of QuickMuse. Any human annotations or feedback
        submitted by contributors become part of the aggregated model memory under perpetual, royalty-free assignment.
      </p>
    ),
  },
  {
    id: "termination",
    title: "5. Termination & Service Amendments",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    content: (
      <p>
        QuickMuse reserves the right to amend reward schedules, feature releases, or task parameters
        with appropriate notice posted to contributor dashboards. Either party may terminate account
        participation at any time without penalty for verified accumulated earnings.
      </p>
    ),
  },
];

export default function TermsPage() {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState(termsSections[0].id);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      {/* Hero Header */}
      <PageHero
        title="Terms & Operating Conditions"
        subtitle="Clear, transparent terms governing participation in QuickMuse AI training, remote task bounties, and decentralized contributor standards."
        category="Contributor Agreement"
        showBadge={true}
        breadcrumbs={[
          { label: "Terms & Conditions", link: null },
        ]}
      />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky Table of Contents Sidebar (4 cols) */}
          <aside className="lg:col-span-4 h-fit sticky top-28 hidden lg:block">
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40 shadow-xl shadow-[#24000a]/70"
                  : "bg-white/80 border-[#800021]/20 shadow-lg shadow-[#800021]/5"
              }`}
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-inherit">
                <h3 className="text-xs font-bold uppercase tracking-wider opacity-70 font-mono">
                  Agreement Index
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-current opacity-60">
                  5 Articles
                </span>
              </div>

              <nav className="space-y-1.5">
                {termsSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeSection === sec.id
                        ? isDarkMode
                          ? "bg-[#800021] text-[#f6e6ce] shadow-md shadow-[#800021]/30"
                          : "bg-[#800021] text-white shadow-md shadow-[#800021]/20"
                        : isDarkMode
                        ? "text-[#f6e6ce]/70 hover:bg-[#800021]/20 hover:text-[#f6e6ce]"
                        : "text-[#24000a]/70 hover:bg-[#800021]/10 hover:text-[#24000a]"
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-5 border-t border-inherit text-xs opacity-70 space-y-2">
                <p>Questions regarding contractual terms?</p>
                <a
                  href="mailto:legal@quickmuse.ai"
                  className="font-bold underline text-[#800021] block"
                >
                  legal@quickmuse.ai
                </a>
              </div>
            </div>
          </aside>

          {/* Terms Articles Container (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            {/* Metadata Bar */}
            <div
              className={`p-4 rounded-xl border backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs font-medium transition-colors ${
                isDarkMode
                  ? "bg-[#24000a]/60 border-[#800021]/30"
                  : "bg-white/70 border-[#800021]/15"
              }`}
            >
              <span>
                Governing Jurisdiction: <strong className="text-[#800021]">Global Decentralized Network</strong>
              </span>
              <span>
                Effective Date: <span className="opacity-70 font-mono">October 1, 2026</span>
              </span>
            </div>

            {/* Terms Articles */}
            {termsSections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className={`scroll-mt-32 p-7 sm:p-9 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] ${
                  isDarkMode
                    ? "bg-[#800021]/15 border-[#800021]/40 shadow-lg shadow-[#24000a]/60"
                    : "bg-white/80 border-[#800021]/20 shadow-md shadow-[#800021]/5"
                }`}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-2.5 rounded-xl bg-[#800021]/20 border border-[#800021]/30 shrink-0">
                    {sec.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                    {sec.title}
                  </h2>
                </div>

                <div className="leading-relaxed text-sm sm:text-base opacity-85">
                  {sec.content}
                </div>
              </article>
            ))}

            {/* Ready to Join Action */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/40"
                  : "bg-white/90 border-[#800021]/20"
              }`}
            >
              <div>
                <h3 className="font-bold text-lg">Ready to Begin Training?</h3>
                <p className="text-xs sm:text-sm opacity-75 mt-0.5">
                  Set up your contributor profile and begin claiming hourly rewards.
                </p>
              </div>
              <a
                href="/register"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-[#f6e6ce] bg-[#800021] hover:bg-[#9a0028] shadow-md transition-all shrink-0"
              >
                Register Now
              </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
