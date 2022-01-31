import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(1)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>   
    )
}

export const useContextTheme = () => useContext(ThemeContext)