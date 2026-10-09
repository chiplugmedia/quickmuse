import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import logoDark from "@/assets/img/quickmuselogo-dark.png";
import logoLight from "@/assets/img/quickmuselogo-light.png";

export default function Login() {
  const { isDarkMode } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier.trim() || !password) {
      return setError("Please provide your username/email and password.");
    }

    try {
      setLoading(true);
      const res = await login(identifier, password);

      if (res.success) {
        const from = location.state?.from || res.redirect || "/dashboard";
        navigate(from, { replace: true });
      } else {
        setError(res.error || "Invalid username or password.");
      }
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const currentLogo = isDarkMode ? logoDark : logoLight;

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-hidden antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>Sign In | QuickMuse Contributor Access</title>
        <meta
          name="description"
          content="Log in to your QuickMuse account to access your AI training dashboard, view tasks, and manage rewards."
        />
      </Helmet>

      <Header />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/30 opacity-100" : "bg-[#800021]/15 opacity-70"
          }`}
        />
        <div
          className={`absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 pt-36 pb-20">
        <div
          className={`rounded-3xl p-6 sm:p-10 border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
            isDarkMode
              ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80 text-[#f6e6ce]"
              : "bg-white/85 border-[#800021]/20 shadow-[#800021]/10 text-[#24000a]"
          }`}
        >
          {/* Header */}
          <div className="text-center pb-6">
            <img
              src={currentLogo}
              alt="QuickMuse"
              className="h-10 sm:h-12 mx-auto object-contain transition-transform duration-300 hover:scale-105"
            />

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold backdrop-blur-md border-[#800021]/40 bg-[#800021]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#800021] animate-pulse" />
              <span>Secure Authentication</span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
              Welcome Back
            </h1>
            <p
              className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
              }`}
            >
              Sign in to manage your AI training nodes, bounties, and platform earnings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div
                className={`rounded-2xl p-4 text-xs sm:text-sm font-semibold border text-center ${
                  isDarkMode
                    ? "bg-red-950/60 border-red-800 text-red-200"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {error}
              </div>
            )}

            {/* Username or Email */}
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider opacity-80">
                Email or Username
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="contributor@quickmuse.ai or username"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                  isDarkMode
                    ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                    : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
                }`}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider opacity-80">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm transition-all focus:outline-none ${
                    isDarkMode
                      ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                      : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#9a0028] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Signing In...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Sign In</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </button>

            {/* Footer Navigation */}
            <div className="pt-4 text-center space-y-2 text-xs">
              <p className="opacity-80">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-bold underline text-[#800021] dark:text-[#f6e6ce]"
                >
                  Register for Free
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
