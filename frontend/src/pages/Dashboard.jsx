import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@/context/ThemeContext";
import { useAuth, API_BASE } from "@/context/AuthContext";
import Header from "@/components/Header";

export default function Dashboard() {
  const { isDarkMode } = useTheme();
  const { user, token, loading: authLoading, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { replace: true });
      return;
    }

    if (user) {
      fetchDashboard();
    }
  }, [user, authLoading, navigate]);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${API_BASE}/api/dashboard/user`, {
        method: "GET",
        headers,
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 401) {
          logout();
          navigate("/login");
          return;
        }
        throw new Error("Unable to fetch dashboard details.");
      }

      const result = await res.json();
      if (result.success) {
        setDashboardData(result.data);
      } else {
        setError(result.message || "Failed to load dashboard.");
      }
    } catch (err) {
      console.error("Dashboard load error:", err);
      setError("Network error while loading your dashboard information.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || (loading && !dashboardData)) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors ${
          isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#800021] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono uppercase tracking-widest opacity-80">
            Syncing Contributor Workspace...
          </p>
        </div>
      </div>
    );
  }

  const profile = dashboardData?.profile || user || {};
  const stats = dashboardData?.stats || {
    hourlyRate: "$8.6 / hr",
    accuracyScore: "99.4%",
    completedNodes: 12,
    accountTier: "Free Contributor",
    accountStatus: "Operational",
  };
  const tasks = dashboardData?.tasks || [];

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-hidden antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>Contributor Workspace | QuickMuse</title>
        <meta
          name="description"
          content="Manage your QuickMuse AI training sessions, review memory node tasks, and monitor hourly bounties."
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
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDarkMode ? "bg-[#800021]/20 opacity-100" : "bg-[#800021]/10 opacity-60"
          }`}
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 sm:pt-36 pb-20">
        {/* Top Notification / Admin quick switch */}
        {isAdmin && (
          <div className="mb-6 p-4 rounded-2xl border flex items-center justify-between border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>You are signed in as an Administrator.</span>
            </div>
            <Link
              to="/admin"
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#800021] text-[#f6e6ce] shadow transition hover:scale-105"
            >
              Go to Admin Panel →
            </Link>
          </div>
        )}

        {/* Welcome Hero Banner */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border backdrop-blur-2xl shadow-xl transition-colors mb-8 ${
            isDarkMode
              ? "bg-[#800021]/15 border-[#800021]/40 text-[#f6e6ce]"
              : "bg-white/85 border-[#800021]/20 text-[#24000a]"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md mb-3 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Account Status: {profile.status === "active" ? "Active" : profile.status}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                Hello, {profile.fullname || "Contributor"}!
              </h1>
              <p
                className={`mt-1.5 text-xs sm:text-sm ${
                  isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
                }`}
              >
                Username: <span className="font-mono font-bold">@{profile.username || "user"}</span> • Email:{" "}
                <span className="font-mono">{profile.email}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-xl text-xs font-bold border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-all"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {[
            {
              label: "Current Plan",
              value: profile.plan || "Free",
              sub: "Free Starter Tier",
              badge: "Active",
            },
            {
              label: "Hourly Earning Rate",
              value: stats.hourlyRate,
              sub: "Standard Contributor",
              badge: "Verified",
            },
            {
              label: "Accuracy Score",
              value: stats.accuracyScore,
              sub: "Neural Evaluation",
              badge: "Top 5%",
            },
            {
              label: "Completed Tasks",
              value: `${stats.completedNodes} Nodes`,
              sub: "All Nodes Verified",
              badge: "Sync OK",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40"
                  : "bg-white/80 border-[#800021]/20 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">
                  {item.label}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-current font-mono opacity-80">
                  {item.badge}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-black text-[#800021] dark:text-[#f6e6ce]">
                  {item.value}
                </p>
                <p className={`text-xs mt-0.5 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Workspace Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Content: AI Tasks and Training Nodes (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40"
                  : "bg-white/85 border-[#800021]/20 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-black">
                    Available AI Training Tasks
                  </h2>
                  <p className={`text-xs mt-1 ${isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"}`}>
                    Select an active memory training node to evaluate dialogue and refine embeddings.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                  3 Open Tasks
                </span>
              </div>

              <div className="space-y-3.5">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isDarkMode
                        ? "bg-[#24000a]/60 border-[#800021]/30 hover:border-[#800021]/60"
                        : "bg-white/90 border-[#800021]/15 hover:border-[#800021]/30 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs opacity-60">{task.id}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-current font-bold">
                          {task.difficulty}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold mt-1">{task.title}</h3>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 mt-2 sm:mt-0">
                      <div className="text-right">
                        <span className="font-black text-sm text-[#800021] dark:text-[#f6e6ce]">
                          {task.reward}
                        </span>
                        <p className="text-[10px] opacity-60">Reward / Task</p>
                      </div>

                      <button
                        onClick={() => alert(`Node ${task.id} initialized. Stream connected.`)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-[#f6e6ce] bg-[#800021] hover:bg-[#9a0028] shadow transition"
                      >
                        Start Node
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Profile & Node Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Account Details Box */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-2xl transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40"
                  : "bg-white/85 border-[#800021]/20 shadow-sm"
              }`}
            >
              <h3 className="text-base font-black mb-4">Account Information</h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">User ID</span>
                  <span className="font-mono font-bold">#{profile.id}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">Full Name</span>
                  <span className="font-semibold">{profile.fullname}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">Username</span>
                  <span className="font-mono font-bold">@{profile.username}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">Email</span>
                  <span className="font-mono truncate max-w-[160px]">{profile.email}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">Phone</span>
                  <span className="font-mono">{profile.phone}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-inherit/20">
                  <span className="opacity-70">Role</span>
                  <span className="font-bold uppercase tracking-wider">{profile.role || "user"}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="opacity-70">Membership Tier</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {profile.plan || "Free"}
                  </span>
                </div>
              </div>
            </div>

            {/* Support CTA */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-2xl transition-colors ${
                isDarkMode
                  ? "bg-[#800021]/20 border-[#800021]/50"
                  : "bg-[#800021]/5 border-[#800021]/20"
              }`}
            >
              <h3 className="text-sm font-bold mb-1">Need Contributor Help?</h3>
              <p className="text-xs opacity-80 leading-relaxed mb-4">
                Connect with an AI training mentor on Telegram for instant guidance and verification.
              </p>
              <a
                href="https://t.me/quickmuse_support"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0088cc] to-[#006699] hover:from-[#0077b3] hover:to-[#005580] shadow transition"
              >
                Open Telegram Support
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
