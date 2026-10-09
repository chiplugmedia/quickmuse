import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@/context/ThemeContext";
import { useAuth, API_BASE } from "@/context/AuthContext";
import Header from "@/components/Header";

export default function AdminDashboard() {
  const { isDarkMode } = useTheme();
  const { user, token, loading: authLoading, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate("/login", { replace: true });
        return;
      }
      if (!isAdmin) {
        navigate("/dashboard", { replace: true });
        return;
      }
      fetchAdminData();
    }
  }, [user, authLoading, isAdmin, navigate]);

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      // 1. Fetch Stats
      const statsRes = await fetch(`${API_BASE}/api/admin/stats`, {
        method: "GET",
        headers,
        credentials: "include",
      });

      if (statsRes.status === 403) {
        navigate("/dashboard", { replace: true });
        return;
      }

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        if (statsData.success) {
          setStats(statsData.stats);
        }
      }

      // 2. Fetch Users
      await fetchUsersList();
    } catch (err) {
      console.error("Admin data fetch error:", err);
      setFeedback({ message: "Network error loading admin records.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fetchUsersList = async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (planFilter !== "all") params.append("plan", planFilter);
      if (statusFilter !== "all") params.append("status", statusFilter);

      const usersRes = await fetch(`${API_BASE}/api/admin/users?${params.toString()}`, {
        method: "GET",
        headers,
        credentials: "include",
      });

      if (usersRes.ok) {
        const usersData = await usersRes.json();
        if (usersData.success) {
          setUsers(usersData.users);
        }
      }
    } catch (err) {
      console.error("Users list fetch error:", err);
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchUsersList();
  };

  const toggleUserStatus = async (targetUser) => {
    const nextStatus = targetUser.status === "suspended" ? "active" : "suspended";
    const confirmMsg =
      nextStatus === "suspended"
        ? `Are you sure you want to SUSPEND ${targetUser.fullname || targetUser.email}?`
        : `Activate account for ${targetUser.fullname || targetUser.email}?`;

    if (!window.confirm(confirmMsg)) return;

    try {
      setActionLoading(true);
      setFeedback({ message: "", type: "" });

      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${API_BASE}/api/admin/users/${targetUser.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ status: nextStatus }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Action failed.");
      }

      setFeedback({
        message: `Account status updated to ${nextStatus.toUpperCase()}!`,
        type: "success",
      });

      // Update local state
      setUsers((prev) =>
        prev.map((u) => (u.id === targetUser.id ? { ...u, status: nextStatus } : u)),
      );
      if (selectedUser?.id === targetUser.id) {
        setSelectedUser((prev) => ({ ...prev, status: nextStatus }));
      }
    } catch (err) {
      setFeedback({ message: err.message || "Failed to update account status.", type: "error" });
    } finally {
      setActionLoading(false);
    }
  };

  if (authLoading || (loading && users.length === 0)) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors ${
          isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#800021] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono uppercase tracking-widest opacity-80">
            Verifying Administrator Session...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-hidden antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>Admin Dashboard | QuickMuse Management</title>
        <meta
          name="description"
          content="Administrative console for managing QuickMuse users, inspecting SQL records, and monitoring ecosystem metrics."
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
        {/* Admin Header */}
        <div
          className={`rounded-3xl p-6 sm:p-8 border backdrop-blur-2xl shadow-xl transition-colors mb-8 ${
            isDarkMode
              ? "bg-[#800021]/15 border-[#800021]/40 text-[#f6e6ce]"
              : "bg-white/85 border-[#800021]/20 text-[#24000a]"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md mb-3 border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Authorized Administrator Control Panel</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                QuickMuse Administrator Dashboard
              </h1>
              <p
                className={`mt-1 text-xs sm:text-sm ${
                  isDarkMode ? "text-[#f6e6ce]/70" : "text-[#24000a]/70"
                }`}
              >
                Logged in as <span className="font-mono font-bold">{user?.email}</span> (Administrator)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-[#800021]/30 hover:bg-[#800021]/10 transition-all"
              >
                View User Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-all"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Alert */}
        {feedback.message && (
          <div
            className={`mb-6 p-4 rounded-2xl text-xs sm:text-sm font-semibold border text-center ${
              feedback.type === "error"
                ? "bg-red-950/60 border-red-800 text-red-200"
                : "bg-emerald-950/60 border-emerald-800 text-emerald-200"
            }`}
          >
            {feedback.message}
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            {
              label: "Total Registered Users",
              value: stats?.totalUsers ?? users.length,
              badge: "SQL DB",
            },
            {
              label: "Active Accounts",
              value: stats?.activeUsers ?? users.filter((u) => u.status === "active").length,
              badge: "Operational",
            },
            {
              label: "Suspended Accounts",
              value: stats?.suspendedUsers ?? users.filter((u) => u.status === "suspended").length,
              badge: "Locked",
            },
            {
              label: "Free Registrations",
              value: stats?.freeUsers ?? 0,
              badge: "Free Tier",
            },
            {
              label: "Paid / Subscribed",
              value: stats?.paidUsers ?? 0,
              badge: "Paid",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl transition-all ${
                isDarkMode
                  ? "bg-[#800021]/15 border-[#800021]/40"
                  : "bg-white/80 border-[#800021]/20 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                  {card.label}
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-current font-mono opacity-80">
                  {card.badge}
                </span>
              </div>
              <p className="mt-3 text-2xl sm:text-3xl font-black text-[#800021] dark:text-[#f6e6ce]">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filter and Search Bar */}
        <form
          onSubmit={handleFilterSubmit}
          className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl mb-6 flex flex-col md:flex-row gap-3 items-center justify-between ${
            isDarkMode
              ? "bg-[#800021]/15 border-[#800021]/30"
              : "bg-white/80 border-[#800021]/15"
          }`}
        >
          <div className="w-full md:w-1/2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, username, email, or phone..."
              className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm transition focus:outline-none ${
                isDarkMode
                  ? "bg-[#24000a]/70 border-[#800021]/40 text-[#f6e6ce] placeholder-[#f6e6ce]/30 focus:border-[#800021]"
                  : "bg-white border-[#800021]/20 text-[#24000a] placeholder-[#24000a]/40 focus:border-[#800021]"
              }`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className={`px-3 py-2 rounded-xl border text-xs font-semibold focus:outline-none ${
                isDarkMode
                  ? "bg-[#24000a] border-[#800021]/40 text-[#f6e6ce]"
                  : "bg-white border-[#800021]/20 text-[#24000a]"
              }`}
            >
              <option value="all">All Plans</option>
              <option value="Free">Free</option>
              <option value="Trial">Trial</option>
              <option value="Premium">Premium</option>
              <option value="Sliver">Sliver</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`px-3 py-2 rounded-xl border text-xs font-semibold focus:outline-none ${
                isDarkMode
                  ? "bg-[#24000a] border-[#800021]/40 text-[#f6e6ce]"
                  : "bg-white border-[#800021]/20 text-[#24000a]"
              }`}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>

            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold text-[#f6e6ce] bg-[#800021] hover:bg-[#9a0028] shadow transition"
            >
              Filter
            </button>
          </div>
        </form>

        {/* Users Table */}
        <div
          className={`rounded-3xl border backdrop-blur-2xl shadow-xl overflow-hidden transition-colors ${
            isDarkMode
              ? "bg-[#800021]/15 border-[#800021]/40"
              : "bg-white/85 border-[#800021]/20 shadow-sm"
          }`}
        >
          <div className="p-5 border-b border-inherit/20 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black">Registered Accounts in SQL</h2>
            <span className="text-xs opacity-70 font-mono">
              Showing {users.length} accounts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead
                className={`uppercase tracking-wider font-mono text-[10px] border-b border-inherit/20 ${
                  isDarkMode ? "bg-[#24000a]/50 text-[#f6e6ce]/70" : "bg-slate-50 text-slate-600"
                }`}
              >
                <tr>
                  <th className="py-3.5 px-4">ID</th>
                  <th className="py-3.5 px-4">User Details</th>
                  <th className="py-3.5 px-4">Username</th>
                  <th className="py-3.5 px-4">Plan</th>
                  <th className="py-3.5 px-4">Role</th>
                  <th className="py-3.5 px-4">Account Status</th>
                  <th className="py-3.5 px-4">Registered Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-inherit/15">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm opacity-60">
                      No accounts matched your search criteria.
                    </td>
                  </tr>
                ) : (
                  users.map((row) => {
                    const isSelf = row.email?.toLowerCase() === user?.email?.toLowerCase();
                    const isSuspended = row.status === "suspended";

                    return (
                      <tr
                        key={row.id}
                        className={`transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${
                          row.role === "admin" ? "font-semibold" : ""
                        }`}
                      >
                        <td className="py-3 px-4 font-mono">#{row.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-bold text-sm leading-snug">{row.fullname || "N/A"}</p>
                            <p className="text-[11px] opacity-70 font-mono">{row.email}</p>
                            <p className="text-[10px] opacity-50">{row.phone}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-medium">
                          @{row.username || "user"}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              row.plan === "Premium"
                                ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                                : row.plan === "Free"
                                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                : "bg-sky-500/20 text-sky-600 dark:text-sky-400"
                            }`}
                          >
                            {row.plan || "Free"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                              row.role === "admin"
                                ? "bg-[#800021] text-[#f6e6ce]"
                                : "border border-current opacity-70"
                            }`}
                          >
                            {row.role || "user"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              isSuspended
                                ? "bg-red-500/20 text-red-600 dark:text-red-400"
                                : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSuspended ? "bg-red-500" : "bg-emerald-500"
                              }`}
                            />
                            <span>{row.status || "active"}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[11px] opacity-70">
                          {row.created_at ? new Date(row.created_at).toLocaleDateString() : "N/A"}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => setSelectedUser(row)}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-inherit/30 hover:bg-black/5 dark:hover:bg-white/10"
                            >
                              Details
                            </button>

                            {!isSelf && (
                              <button
                                disabled={actionLoading}
                                onClick={() => toggleUserStatus(row)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                                  isSuspended
                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                    : "bg-red-600/80 hover:bg-red-600 text-white"
                                }`}
                              >
                                {isSuspended ? "Activate" : "Suspend"}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Detail Modal */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div
              className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
                isDarkMode
                  ? "bg-[#24000a] border-[#800021]/50 text-[#f6e6ce]"
                  : "bg-white border-[#800021]/30 text-[#24000a]"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-inherit/20">
                <h3 className="text-lg font-black">User Account #{selectedUser.id}</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="p-1.5 rounded-lg opacity-60 hover:opacity-100"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Full Name</span>
                  <span className="font-bold">{selectedUser.fullname}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Username</span>
                  <span className="font-mono font-bold">@{selectedUser.username}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Email Address</span>
                  <span className="font-mono">{selectedUser.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Phone Number</span>
                  <span className="font-mono">{selectedUser.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">System Role</span>
                  <span className="font-bold uppercase">{selectedUser.role}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Current Plan</span>
                  <span className="font-bold">{selectedUser.plan}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Account Status</span>
                  <span className="font-bold uppercase">{selectedUser.status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Payment Status</span>
                  <span className="font-mono">{selectedUser.payment_status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-inherit/10">
                  <span className="opacity-70">Amount Recorded</span>
                  <span className="font-mono font-bold">₦{Number(selectedUser.amount || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="opacity-70">Registration Date</span>
                  <span className="font-mono">
                    {selectedUser.created_at ? new Date(selectedUser.created_at).toLocaleString() : "N/A"}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-3 border-t border-inherit/20">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold border border-inherit/30 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
