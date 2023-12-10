import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () =>{
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    const themeContex = React.useContext(ThemeContext);
    return themeContex
};
