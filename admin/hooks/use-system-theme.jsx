import { useEffect, useState } from 'react';

export function useSystemTheme() {
  const getCurrentTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const [theme, setTheme] = useState(getCurrentTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    // Add event listener for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return theme;
}
