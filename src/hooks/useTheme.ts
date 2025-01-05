import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return (saved as Theme) || (prefersDark ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const updateTheme = () => {
      root.setAttribute('data-theme', theme);
      body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateTheme();

    // Add smooth transition class after initial load
    const timeout = setTimeout(() => {
      document.body.classList.add('theme-transition');
    }, 0);

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};