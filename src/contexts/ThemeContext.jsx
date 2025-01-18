import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
// default light
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

