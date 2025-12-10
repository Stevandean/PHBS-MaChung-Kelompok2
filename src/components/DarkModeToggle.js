import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-all duration-200 hover:bg-opacity-20 hover:bg-gray-500"
      style={{
        background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        border: '1px solid var(--border-light)',
      }}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
      )}
    </button>
  );
};

export default DarkModeToggle;