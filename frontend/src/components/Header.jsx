import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";

// Import separate logos for dark and light modes
// import logo from "@/assets/img/evermorelogo.png";

import logoDark from "@/assets/img/quickmuselogo-dark.png";
import logoLight from "@/assets/img/quickmuselogo-light.png";

const NAV_LINKS = [
  {
    href: "/about",
    label: "About Us",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    href: "/#plans",
    label: "Plans",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 7h.01M7 11h.01M7 15h.01M13 7h7M13 11h7M13 15h7M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    href: "/#faq",
    label: "FAQ",
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, isAdmin, logout } = useAuth();

  // SEO Metadata
  const pageTitle = "QuickMuse";
  const pageDescription =
    "Bridging digital and real-world opportunities. Train next-generation Generative AI, improve core memory functions, and earn rewards.";
  const siteUrl = "https://quickmuse.com";

  // Select logo dynamically based on current mood
  const currentLogo = isDarkMode ? logoDark : logoLight;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QuickMuse",
    url: siteUrl,
    logo: `${siteUrl}/src/assets/img/quickmuselogo-dark.png`,
    description: pageDescription,
    slogan: "Exist Beyond the Moment",
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="QuickMuse, QuickMuse AI, QuickMuse Network, AI Training, Generative AI"
        />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Dynamic Background Gradient Glows */}
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-500 pointer-events-none ${
          isDarkMode ? "bg-[#24000a]" : "bg-[#f6e6ce]"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-[#800021]/30 opacity-100"
              : "bg-[#800021]/10 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[100px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-[#800021]/20 opacity-100"
              : "bg-[#800021]/15 opacity-80"
          }`}
        />
      </div>

      {/* Compact Header Container */}
      <header
        className="fixed top-0 left-0 right-0 z-50 p-2.5 lg:p-3.5"
        role="banner"
      >
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl backdrop-blur-2xl border transition-all duration-300 shadow-lg ${
            isDarkMode
              ? "bg-[#24000a]/85 border-[#800021]/40 text-[#f6e6ce] shadow-[#24000a]/40"
              : "bg-[#f6e6ce]/85 border-[#800021]/20 text-[#24000a] shadow-[#800021]/10"
          }`}
        >
          <div className="flex items-center justify-between h-13 px-4 lg:px-5">
            {/* Dynamic Brand Logo Switcher */}
            <a
              href="/"
              className="flex items-center gap-2 group"
              aria-label="QuickMuse Homepage"
            >
              <img
                src={currentLogo}
                alt="QuickMuse Logo"
                width="110"
                height="32"
                className="h-7 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className={`hidden lg:flex items-center gap-1 p-1 rounded-xl border backdrop-blur-md transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/30"
                  : "bg-white/60 border-[#800021]/15"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isDarkMode
                      ? "text-[#f6e6ce] hover:bg-[#800021] hover:text-[#f6e6ce]"
                      : "text-[#24000a] hover:bg-[#800021] hover:text-[#f6e6ce]"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions Section */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-1.5 rounded-xl border transition-all duration-200 ${
                  isDarkMode
                    ? "bg-[#800021]/30 border-[#800021]/50 text-[#f6e6ce] hover:bg-[#800021]/50"
                    : "bg-white/80 border-[#800021]/20 text-[#800021] hover:bg-[#800021]/10"
                }`}
                aria-label="Toggle Light and Dark Mode"
              >
                {isDarkMode ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.3 2a10 10 0 0 0-1.9 20 10 10 0 0 0 9.2-6.2 1 1 0 0 0-1.2-1.3 8 8 0 1 1-6.1-12.5 1 1 0 0 0 0-2z" />
                  </svg>
                )}
              </button>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`text-xs font-semibold transition-colors rounded-xl px-3.5 py-1.5 border ${
                      isDarkMode
                        ? "border-[#800021]/40 text-[#f6e6ce] hover:bg-[#800021]/20"
                        : "border-[#800021]/20 text-[#24000a] hover:bg-[#800021]/10"
                    }`}
                  >
                    Dashboard
                  </Link>

                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="text-xs font-bold transition-colors rounded-xl px-3.5 py-1.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/30"
                    >
                      Admin
                    </Link>
                  )}

                  <button
                    onClick={logout}
                    className="text-xs font-semibold transition-colors rounded-xl px-3.5 py-1.5 border border-red-500/30 text-red-500 hover:bg-red-500/10"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`text-xs font-semibold transition-colors rounded-xl px-3.5 py-1.5 border ${
                      isDarkMode
                        ? "border-[#800021]/40 text-[#f6e6ce] hover:bg-[#800021]/20"
                        : "border-[#800021]/20 text-[#24000a] hover:bg-[#800021]/10"
                    }`}
                  >
                    Log In
                  </Link>

                  <Link
                    to="/register"
                    className="group relative overflow-hidden rounded-xl px-4 py-1.5 text-xs font-semibold text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-1.5 rounded-xl border text-xs transition-all ${
                  isDarkMode
                    ? "bg-[#800021]/30 border-[#800021]/50 text-[#f6e6ce]"
                    : "bg-white border-[#800021]/20 text-[#800021]"
                }`}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="h-8 w-8 rounded-xl bg-[#800021] text-[#f6e6ce] flex items-center justify-center transition-colors hover:bg-[#800021]/80"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`m-3 rounded-xl border p-3.5 transition-colors ${
                isDarkMode
                  ? "bg-[#24000a] border-[#800021]/40 text-[#f6e6ce]"
                  : "bg-white/90 border-[#800021]/20 text-[#24000a]"
              }`}
            >
              <nav
                aria-label="Mobile Navigation"
                className="flex flex-col gap-1.5"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                      isDarkMode
                        ? "hover:bg-[#800021]/40 text-[#f6e6ce]"
                        : "hover:bg-[#800021]/10 text-[#24000a]"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 pt-3 border-t border-[#800021]/20 flex flex-col gap-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className={`text-center py-2 rounded-lg border text-xs font-semibold transition ${
                        isDarkMode
                          ? "border-[#800021]/50 text-[#f6e6ce] hover:bg-[#800021]/30"
                          : "border-[#800021]/30 text-[#24000a] hover:bg-[#800021]/10"
                      }`}
                    >
                      Dashboard
                    </Link>

                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="text-center py-2 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                      >
                        Admin Console
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                      }}
                      className="text-center py-2 rounded-lg text-xs font-semibold border border-red-500/30 text-red-500"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className={`text-center py-2 rounded-lg border text-xs font-semibold transition ${
                        isDarkMode
                          ? "border-[#800021]/50 text-[#f6e6ce] hover:bg-[#800021]/30"
                          : "border-[#800021]/30 text-[#24000a] hover:bg-[#800021]/10"
                      }`}
                    >
                      Log In
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="text-center py-2 rounded-lg text-xs text-[#f6e6ce] font-semibold bg-[#800021] shadow transition-all duration-200 hover:scale-[1.01]"
                    >
                      Get Started (Free)
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
