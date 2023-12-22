// contextApi.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const PracticeContextApi = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(prevState => (prevState === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
