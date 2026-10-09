import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import logoDark from "@/assets/img/quickmuselogo-dark.png";
import logoLight from "@/assets/img/quickmuselogo-light.png";

export default function SignupForm() {
  const { isDarkMode } = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    // Client-side quick check
    if (
      !form.fullname.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      return setError("Please complete all required fields.");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const result = await register({
        fullname: form.fullname,
        username: form.username || form.email.split("@")[0],
        phone: form.phone,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      if (result.success) {
        setSuccessMsg("Account created successfully! Redirecting to your dashboard...");
        setTimeout(() => {
          navigate(result.redirect || "/dashboard");
        }, 800);
      } else {
        setError(result.error || "Unable to complete registration. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Network issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentLogo = isDarkMode ? logoDark : logoLight;

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
        isDarkMode
          ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80 text-[#f6e6ce]"
          : "bg-white/80 border-[#800021]/20 shadow-[#800021]/10 text-[#24000a]"
      }`}
    >
      {/* Header & Logo */}
      <div className="text-center pb-6">
        <img
          src={currentLogo}
          alt="QuickMuse"
          className="h-10 sm:h-12 mx-auto object-contain transition-transform duration-300 hover:scale-105"
        />

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold backdrop-blur-md border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>100% Free Public Registration</span>
        </div>

        <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
          Create Contributor Account
        </h2>

        <p
          className={`mt-2 text-sm leading-relaxed max-w-sm mx-auto ${
            isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
          }`}
        >
          Get started with free instant access to training tasks, memory node alignment, and rewards.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        {/* Error Alert */}
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

        {/* Success Alert */}
        {successMsg && (
          <div
            className={`rounded-2xl p-4 text-xs sm:text-sm font-semibold border text-center ${
              isDarkMode
                ? "bg-emerald-950/60 border-emerald-800 text-emerald-200"
                : "bg-emerald-50 border-emerald-200 text-emerald-700"
            }`}
          >
            {successMsg}
          </div>
        )}

        {/* Full Name */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            required
            value={form.fullname}
            onChange={handleChange}
            placeholder="e.g. Ada Lovelace"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
            }`}
          />
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="e.g. ada_lovelace"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
            }`}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 801 234 5678"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
            }`}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="contributor@quickmuse.ai"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
              isDarkMode
                ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
            }`}
          />
        </div>

        {/* Free Plan Badge */}
        <div
          className={`rounded-2xl p-3.5 border flex items-center justify-between transition-colors ${
            isDarkMode
              ? "bg-[#800021]/20 border-[#800021]/40"
              : "bg-white/90 border-[#800021]/20"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Free Starter Contributor</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-extrabold uppercase">
                Free Forever
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
              Standard tasks, prompt refinement & instant onboarding
            </p>
          </div>
          <div className="text-right">
            <span className="font-black text-base sm:text-lg text-emerald-500">₦0</span>
            <p className="text-[10px] opacity-60">No Fee</p>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
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

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-xs font-bold uppercase tracking-wider opacity-80">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••••••"
              className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm transition-all focus:outline-none ${
                isDarkMode
                  ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/40"
                  : "bg-white/90 border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021] focus:ring-2 focus:ring-[#800021]/20"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
            >
              {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-3 inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm text-[#f6e6ce] bg-[#800021] border border-[#800021] shadow-lg shadow-[#800021]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#9a0028] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span>Creating Free Account...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Register for Free</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
        </button>

        {/* Already have an account link */}
        <p className="text-center text-xs opacity-80 pt-2">
          Already registered?{" "}
          <Link to="/login" className="font-bold underline text-[#800021] dark:text-[#f6e6ce]">
            Log In to your Dashboard
          </Link>
        </p>

        <p className="text-center text-[11px] opacity-60 pt-1">
          By signing up, you agree to the QuickMuse Terms of Service & Privacy Policy.
        </p>
      </form>
    </div>
  );
}
