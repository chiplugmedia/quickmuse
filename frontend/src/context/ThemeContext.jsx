import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
  setTheme: () => {},
  theme: "dark",
});

const THEME_STORAGE_KEY = "quickmuse_theme";

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 1. Check local storage
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme === "dark") return true;
      if (storedTheme === "light") return false;

      // 2. Fall back to system preference or default dark
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return false;
      }
    }
    // Default to dark theme for QuickMuse brand
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const setTheme = (theme) => {
    setIsDarkMode(theme === "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        setTheme,
        theme: isDarkMode ? "dark" : "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback if rendered outside of provider
    return {
      isDarkMode: true,
      toggleTheme: () => {},
      setTheme: () => {},
      theme: "dark",
    };
  }
  return context;
}

export default ThemeContext;
