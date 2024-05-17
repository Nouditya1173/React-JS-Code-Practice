import  { createContext, useContext } from 'react';

const ThemeContext = createContext({
    ThemeMode : "light",
    ThemeLight : ()=>{},
    ThemeDark : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext

export function useTheme(){
    return useContext(ThemeContext)
}

