import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import AboutSection from "@/components/aboutus";
import PageHero from "@/components/PageHero";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>About Us | QuickMuse - Next Gen AI Ecosystem</title>
        <meta
          name="description"
          content="Discover how QuickMuse is engineering the future memory of artificial intelligence, empowering global contributors with high-reward AI training tasks."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <PageHero
          title="Empowering Human & Artificial Intelligence"
          subtitle="Learn how QuickMuse develops long-term memory systems for generative models while creating decentralized income opportunities for contributors worldwide."
          category="About QuickMuse"
          showBadge={true}
          ctaText="Join The Network"
          ctaLink="/register"
          breadcrumbs={[
            { label: "About Us", link: null },
          ]}
        />

        {/* Core Products & Remote Opportunity Sections */}
        <AboutSection />

        {/* Pillars / Values Section */}
        <section
          className={`py-20 lg:py-24 border-t border-b transition-colors duration-500 ${
            isDarkMode
              ? "bg-[#24000a]/80 border-[#800021]/30"
              : "bg-white/40 border-[#800021]/15"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-4 transition-colors ${
                  isDarkMode
                    ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                    : "border-[#800021]/30 bg-white/70 text-[#800021]"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
                <span>Our Principles</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Architected For{" "}
                <span
                  className={`bg-clip-text text-transparent ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-[#800021]"
                      : "bg-gradient-to-r from-[#24000a] via-[#800021] to-[#b3002e]"
                  }`}
                >
                  Transparency & Precision
                </span>
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg ${
                  isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
                }`}
              >
                We believe next-generation AI must be anchored in human ethics,
                accurate verification, and direct participant compensation.
              </p>
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🧬",
                  title: "Continuous Synthesis",
                  desc: "Raw conversational data is transformed into long-term structured memory trees with multi-hop context.",
                },
                {
                  icon: "🛡️",
                  title: "Ethical Alignment",
                  desc: "Zero hallucination tolerance. Human evaluators flag, score, and align every output variant.",
                },
                {
                  icon: "⚡",
                  title: "Instant Compensation",
                  desc: "Transparent task ledgers guarantee rapid payouts for verified evaluations and annotation sessions.",
                },
                {
                  icon: "🌍",
                  title: "Global Inclusivity",
                  desc: "Bridging real-world digital opportunities across all regions without technological gatekeeping.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] flex flex-col justify-between ${
                    isDarkMode
                      ? "bg-[#800021]/15 border-[#800021]/40 shadow-lg shadow-[#24000a]/60 hover:border-[#800021]/70"
                      : "bg-white/80 border-[#800021]/20 shadow-md shadow-[#800021]/5 hover:border-[#800021]/40"
                  }`}
                >
                  <div>
                    <span className="text-3xl mb-4 inline-block">{card.icon}</span>
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
                      }`}
                    >
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-inherit opacity-40 text-[11px] font-mono uppercase tracking-wider">
                    Pillar 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq />

        {/* High-Impact CTA */}
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
