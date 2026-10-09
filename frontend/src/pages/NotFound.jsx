import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function NotFound() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 flex flex-col justify-between antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>404 - Node Not Found | QuickMuse</title>
        <meta
          name="description"
          content="The requested page could not be found on the QuickMuse AI Network."
        />
      </Helmet>

      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/35 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/25 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
            isDarkMode
              ? "bg-[linear-gradient(to_right,#8000210f_1px,transparent_1px),linear-gradient(to_bottom,#8000210f_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,#80002115_1px,transparent_1px),linear-gradient(to_bottom,#80002115_1px,transparent_1px)]"
          }`}
        />
      </div>

      <Header />

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-32 sm:py-36">
        <div className="max-w-2xl w-full text-center space-y-6">
          {/* Eyebrow Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm transition-colors ${
              isDarkMode
                ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                : "border-[#800021]/30 bg-white/70 text-[#800021]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#800021] animate-ping" />
            <span>Neural Error 404 • Coordinate Unresolved</span>
          </div>

          {/* Holographic 404 Display */}
          <div>
            <span
              className={`block text-8xl sm:text-9xl md:text-[13rem] font-black leading-none tracking-tighter select-none bg-clip-text text-transparent ${
                isDarkMode
                  ? "bg-gradient-to-b from-[#f6e6ce] via-[#e5989b] to-[#800021]/30"
                  : "bg-gradient-to-b from-[#24000a] via-[#800021] to-[#b3002e]/30"
              }`}
            >
              404
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mt-2">
              Memory Pathway Not Found
            </h1>
          </div>

          <p
            className={`max-w-md mx-auto text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-[#f6e6ce]/75" : "text-[#24000a]/75"
            }`}
          >
            The neural cluster you are attempting to query hasn't been encoded in our
            memory weights yet, or has been relocated to another address.
          </p>

          {/* Quick Actions Card */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl shadow-2xl mt-8 max-w-lg mx-auto transition-all ${
              isDarkMode
                ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80"
                : "bg-white/80 border-[#800021]/20 shadow-[#800021]/10"
            }`}
          >
            <p className="text-xs uppercase tracking-wider font-bold mb-4 opacity-70">
              Suggested Re-routing
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link
                to="/about"
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  isDarkMode
                    ? "bg-[#24000a]/60 border-[#800021]/30 hover:border-[#800021]"
                    : "bg-white/80 border-[#800021]/15 hover:border-[#800021]"
                }`}
              >
                About QuickMuse
              </Link>
              <Link
                to="/register"
                className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                  isDarkMode
                    ? "bg-[#24000a]/60 border-[#800021]/30 hover:border-[#800021]"
                    : "bg-white/80 border-[#800021]/15 hover:border-[#800021]"
                }`}
              >
                Join & Earn
              </Link>
            </div>

            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 hover:scale-[1.02] hover:bg-[#9a0028] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Return To QuickMuse Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
