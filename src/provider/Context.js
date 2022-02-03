import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

export const StateProvider = ({children}) => {
    
    const [theme, setTheme] = useState(1)

    return (
        <ThemeContext.Provider value={{theme, setTheme }}>
            {children}
        </ThemeContext.Provider>   
    )
}

export const useContextState = () => useContext(ThemeContext)