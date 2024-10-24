'use client';

import React from 'react';
import { useTheme } from '@/context/themeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <SunIcon className="w-6 h-6 hover:text-primary-500 ease-in-out duration-300 " />
      ) : (
        <MoonIcon className="w-6 h-6 dark:text-almost-white hover:dark:text-primary-500 ease-in-out duration-300" />
      )}
    </button>
  );
}
