"use client";

import { motion } from "motion/react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2.5 rounded-full border border-border hover:border-primary/50 text-text-muted hover:text-primary-light transition-colors duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
    >
      {mounted ? (
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <HiMoon className="text-lg" />
          ) : (
            <HiSun className="text-lg" />
          )}
        </motion.div>
      ) : (
        <HiMoon className="text-lg" />
      )}
    </motion.button>
  );
}
