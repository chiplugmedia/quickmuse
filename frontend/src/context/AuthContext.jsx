import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("qm_token") || null);
  const [loading, setLoading] = useState(true);

  // Validate session on mount
  useEffect(() => {
    async function checkAuth() {
      const storedToken = localStorage.getItem("qm_token");
      try {
        const headers = { "Content-Type": "application/json" };
        if (storedToken) {
          headers["Authorization"] = `Bearer ${storedToken}`;
        }

        const res = await fetch(`${API_BASE}/api/auth/me`, {
          method: "GET",
          headers,
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user) {
            setUser(data.user);
          } else {
            setUser(null);
            localStorage.removeItem("qm_token");
          }
        } else {
          setUser(null);
          localStorage.removeItem("qm_token");
        }
      } catch (err) {
        console.warn("Could not verify session with backend:", err);
        // If offline or local dev without active token, clear
        const cachedUser = localStorage.getItem("qm_user");
        if (cachedUser) {
          try {
            setUser(JSON.parse(cachedUser));
          } catch {
            setUser(null);
          }
        }
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Login handler
  const login = async (identifier, password) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid credentials.");
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("qm_token", data.token);
      localStorage.setItem("qm_user", JSON.stringify(data.user));

      return {
        success: true,
        user: data.user,
        redirect: data.redirect || (data.user.role === "admin" ? "/admin" : "/dashboard"),
      };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Register handler (FREE)
  const register = async (formData) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Registration failed.");
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("qm_token", data.token);
      localStorage.setItem("qm_user", JSON.stringify(data.user));

      return {
        success: true,
        user: data.user,
        redirect: "/dashboard",
      };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Logout handler
  const logout = async () => {
    try {
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Ignore network errors on logout
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem("qm_token");
      localStorage.removeItem("qm_user");
    }
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
