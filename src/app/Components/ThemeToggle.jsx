'use client';

import React from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, resolvedTheme, setTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`relative inline-flex items-center gap-1 ${className}`}>
      <button
        onClick={toggleTheme}
        type="button"
        className="relative p-2 rounded-full text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300 group cursor-pointer"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Current: ${theme.toUpperCase()} (${resolvedTheme} mode)`}
      >
        {/* Sun Icon */}
        <span
          className={`block transform transition-transform duration-500 ${
            isDark ? 'rotate-90 scale-0 absolute' : 'rotate-0 scale-100'
          }`}
        >
          <FiSun className="w-5 h-5 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
        </span>

        {/* Moon Icon */}
        <span
          className={`block transform transition-transform duration-500 ${
            isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0 absolute'
          }`}
        >
          <FiMoon className="w-5 h-5 text-indigo-400 group-hover:-rotate-12 transition-transform duration-300" />
        </span>
      </button>

      {showLabel && (
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </div>
  );
}
