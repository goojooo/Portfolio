// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   // We initialize with 'dark' to preserve your current Scorpio aesthetic
//   const [theme, setTheme] = useState('dark');

//   useEffect(() => {
//     const root = window.document.documentElement;
    
//     if (theme === 'light') {
//       root.classList.remove('dark');
//       root.classList.add('light');
//     } else {
//       root.classList.remove('light');
//       root.classList.add('dark');
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Custom hook to easily grab the theme anywhere in your app
// export const useTheme = () => useContext(ThemeContext);
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 1. Safely check local storage on initial load
  const [theme, setTheme] = useState(() => {
    // Look for a saved theme in the browser
    const savedTheme = localStorage.getItem('portfolio-theme');
    // If it exists, use it. If not, default to 'dark'
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply the correct classes to the HTML tag
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }

    // 2. Save the current theme to the browser's local storage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to easily grab the theme anywhere in your app
export const useTheme = () => useContext(ThemeContext);