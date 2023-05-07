'use client';

import { Sun, Moon } from 'lucide-react';
import React from 'react';

const THEME_STORAGE_KEY = 'notes-thing-theme';

export default function ToggleThemeBtn() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem(THEME_STORAGE_KEY) ?? 'light'
  );
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      className="text-sm text-medium text-left flex items-center gap-2 w-full  hover:bg-mauve-4 duration-300 rounded p-1.5"
      onClick={handleClick}
    >
      {' '}
      {theme === 'light' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
      Toggle theme
    </button>
  );
}
