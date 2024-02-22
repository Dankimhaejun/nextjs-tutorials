import {useCallback, useEffect, useMemo, useState} from 'react';

type Theme = 'light' | 'dark';

interface Return {
  theme: Theme;
  isDarkMode: boolean;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
}

const useTheme = (): ReturnType<() => Return> => {
  const [theme, setTheme] = useState<Theme>('light');
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  useEffect(() => {
    localStorage?.setItem('theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      return prev === 'light' ? 'dark' : 'light';
    });
  }, []);

  return {theme, isDarkMode, setTheme, toggleTheme};
};

export default useTheme;
