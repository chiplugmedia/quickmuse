import { Link } from "react-router-dom";
import logo from "@/assets/img/quickmuselogo-dark.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#180007] text-[#f6e6ce] border-t border-[#800021]/30">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#800021]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#800021]/15 rounded-full blur-[140px]" />
      </div>

      {/* Large Background Watermark */}
      <div
        className="
          absolute
          bottom-[-30px]
          left-1/2
          -translate-x-1/2
          select-none
          pointer-events-none
          whitespace-nowrap
          font-black
          tracking-[0.06em]
          text-[90px]
          sm:text-[180px]
          md:text-[260px]
          lg:text-[340px]
          xl:text-[420px]
          text-white/[0.03]
          leading-none
          z-0
        "
        aria-hidden="true"
      >
        QuickMuse
      </div>

      <div className="relative z-10">
        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand Column (5 cols) */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="QuickMuse"
                  className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <p className="mt-5 text-[#f6e6ce]/70 leading-relaxed text-sm max-w-md">
                QuickMuse is our next-generation AI memory ecosystem, designed to evolve
                through real human feedback and reward contributors worldwide with verified hourly bounties.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-[#f6e6ce]/60">
                  Global Distributed Nodes • 99.8% Sync
                </span>
              </div>
            </div>

            {/* Platform Column (2 cols) */}
            <div className="lg:col-span-2 col-span-6">
              <h4 className="font-bold text-sm tracking-wide uppercase text-[#f6e6ce]/90">
                Ecosystem
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-[#f6e6ce]/60">
                <li>
                  <Link to="/about" className="hover:text-[#f6e6ce] transition-colors">
                    About QuickMuse
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-[#f6e6ce] transition-colors">
                    Training Line
                  </Link>
                </li>
                <li>
                  <a href="/#plans" className="hover:text-[#f6e6ce] transition-colors">
                    Reward Plans
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-[#f6e6ce] transition-colors">
                    Mentorship FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Opportunities Column (2 cols) */}
            <div className="lg:col-span-2 col-span-6">
              <h4 className="font-bold text-sm tracking-wide uppercase text-[#f6e6ce]/90">
                Opportunities
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-[#f6e6ce]/60">
                <li>
                  <Link to="/register?plan=Trial" className="hover:text-[#f6e6ce] transition-colors">
                    Trial Tier
                  </Link>
                </li>
                <li>
                  <Link to="/register?plan=Premium" className="hover:text-[#f6e6ce] transition-colors">
                    Premium Tier
                  </Link>
                </li>
                <li>
                  <Link to="/about#jobs" className="hover:text-[#f6e6ce] transition-colors">
                    Remote Tasks
                  </Link>
                </li>
                <li>
                  <a
                    href="https://t.me/quickmuse_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f6e6ce] transition-colors"
                  >
                    Telegram Desk
                  </a>
                </li>
              </ul>
            </div>

            {/* Trust & Legal Column (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-sm tracking-wide uppercase text-[#f6e6ce]/90">
                Trust & Compliance
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-[#f6e6ce]/60">
                <li>
                  <Link to="/privacy" className="hover:text-[#f6e6ce] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#f6e6ce] transition-colors">
                    Terms & Operating Conditions
                  </Link>
                </li>
                <li>
                  <span className="text-xs text-[#f6e6ce]/40 block pt-1">
                    GDPR / NDPR / CCPA Protected
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#800021]/50 to-transparent" />

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[#f6e6ce]/50 text-xs sm:text-sm">
              © {new Date().getFullYear()} QuickMuse AI Network. All Rights Reserved.
            </p>
            <p className="text-[#f6e6ce]/40 text-xs">
              Building The Future Memory Of Artificial Intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
