import { useState } from "react";
import PageHero from "./PageHero";
import { useTheme } from "@/context/ThemeContext";

const privacySections = [
  {
    id: "information-collection",
    title: "1. Information We Collect",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <p>
          QuickMuse collects personal and technical information voluntarily provided by contributors
          during registration, node onboarding, and task evaluation sessions. We adhere to strict data
          minimization principles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <div className="p-4 rounded-xl border backdrop-blur-md bg-inherit/40 border-inherit">
            <h4 className="font-bold text-sm">Personal Identifiers</h4>
            <p className="text-xs opacity-75 mt-1 leading-relaxed">
              Full name, email address, phone contact, and verified bank routing credentials for task payouts.
            </p>
          </div>
          <div className="p-4 rounded-xl border backdrop-blur-md bg-inherit/40 border-inherit">
            <h4 className="font-bold text-sm">Task & Telemetry Data</h4>
            <p className="text-xs opacity-75 mt-1 leading-relaxed">
              Human evaluation ratings, prompt alignments, device metrics, IP logs, and response latency statistics.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Data",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          We process participant information solely under legitimate computational interests,
          direct contractor agreements, and legal compliance:
        </p>
        <ul className="list-disc list-inside space-y-2 opacity-80 pl-2 text-sm leading-relaxed">
          <li>Facilitating secure account verification and neural node activation.</li>
          <li>Accurately computing hourly task bounties, referral fees, and payout distributions.</li>
          <li>Refining machine learning models against adversarial outputs and bias vectors.</li>
          <li>Preventing multi-accounting, automated botting, and malicious prompt attacks.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "sharing-data",
    title: "3. Data Sharing & Third Parties",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          QuickMuse will never sell, rent, or trade your personal information to third-party advertisers.
          Data is strictly handled with:
        </p>
        <p className="text-sm opacity-80 leading-relaxed">
          - <strong>Payment Gateways & Banking Partners:</strong> Exclusively for dispatching validated reward settlements.<br />
          - <strong>Encrypted Cloud Infrastructure:</strong> For hosting secure decentralized training nodes.<br />
          - <strong>Compliance Authorities:</strong> Solely when mandated by binding judicial warrants or local tax laws.
        </p>
      </div>
    ),
  },
  {
    id: "security",
    title: "4. Neural Security & Encryption",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    content: (
      <p>
        We employ end-to-end encryption (AES-256 at rest, TLS 1.3 in transit) across all member databases.
        All training evaluations are pseudonymized before feeding into the core QuickMuse model memory,
        ensuring that no private individual profile can be reconstructed from downstream model outputs.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "5. Your Global Privacy Rights",
    icon: (
      <svg className="w-5 h-5 text-[#800021]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    content: (
      <div className="space-y-3">
        <p>
          Regardless of your jurisdiction, QuickMuse grants all registered contributors full sovereignty
          over their data:
        </p>
        <ul className="list-disc list-inside space-y-1.5 opacity-80 pl-2 text-sm">
          <li><strong>Right to Inspect:</strong> Request a complete export of your task history and payouts.</li>
          <li><strong>Right to Rectify:</strong> Update your payment routing and contact info anytime.</li>
          <li><strong>Right to Erasure:</strong> Close your account and request complete anonymization of non-financial records.</li>
        </ul>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState(privacySections[0].id);

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
        title="Privacy & Data Stewardship"
        subtitle="Complete transparency regarding how QuickMuse protects contributor telemetry, safeguards bank routing, and isolates model training."
        category="Legal & Security Protocol"
        showBadge={true}
        breadcrumbs={[
          { label: "Privacy Policy", link: null },
        ]}
      />

      {/* Main Content Layout */}
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
                  Table of Contents
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-current opacity-60">
                  5 Sections
                </span>
              </div>

              <nav className="space-y-1.5">
                {privacySections.map((sec) => (
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
                <p>Need specific compliance documentation?</p>
                <a
                  href="mailto:privacy@quickmuse.ai"
                  className="font-bold underline text-[#800021] block"
                >
                  privacy@quickmuse.ai
                </a>
              </div>
            </div>
          </aside>

          {/* Privacy Articles Container (8 cols) */}
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
                Standard Compliance: <strong className="text-[#800021]">GDPR / NDPR / CCPA</strong>
              </span>
              <span>
                Revision: <span className="opacity-70 font-mono">v3.4 • October 2026</span>
              </span>
            </div>

            {/* Privacy Sections */}
            {privacySections.map((sec) => (
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

            {/* Bottom Support Banner */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/40"
                  : "bg-white/90 border-[#800021]/20"
              }`}
            >
              <div>
                <h3 className="font-bold text-base">Have Privacy Inquiries?</h3>
                <p className="text-xs opacity-75 mt-0.5">
                  Our Data Protection Officer responds within 24 business hours.
                </p>
              </div>
              <a
                href="https://t.me/quickmuse_support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#f6e6ce] bg-[#800021] hover:bg-[#9a0028] shadow-md transition-all"
              >
                Contact Data Desk
              </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
