'use client';
import { useState, useEffect } from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('shottyodhara-theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme === 'skin-dark' ? 'skin-dark' : 'light');
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'skin-dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('shottyodhara-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme === 'skin-dark' ? 'skin-dark' : 'light');
  };

  return (
    <button
      className="btn btn-sm btn-outline-secondary ml-2"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      style={{ border: 'none', background: 'transparent' }}
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-dark"></i>
      ) : (
        <i className="fas fa-sun text-warning"></i>
      )}
    </button>
  );
};

export default ThemeChanger;
