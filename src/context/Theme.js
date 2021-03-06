import React, { createContext, useState, useContext  } from 'react';
import { lightTheme, darkTheme } from '../styles/themes/theme';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [themePage, setTheme] = useState(() => {
        if(localStorage.getItem('theme') === "false"){
            return darkTheme
        }else if(localStorage.getItem('theme') === "true"){
            return lightTheme
        }else{
            return lightTheme
        }
    });

    return(
        <ThemeContext.Provider 
            value={{
                themePage,
                setTheme
            }}
            >
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {
    const context = useContext(ThemeContext);
    const { themePage, setTheme } = context;
    return { themePage, setTheme };
}