import { createContext, useContext, useState } from 'react';

const ThemeModeContext = createContext({});

export const ThemeModeProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const toggleTheme = () => setStatus(!status);

  return <ThemeModeContext.Provider value={[status, toggleTheme]}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => useContext(ThemeModeContext);
