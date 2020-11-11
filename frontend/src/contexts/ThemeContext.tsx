import { createContext } from "react";

interface ThemeContextProps { 
    dark: boolean,
    toggle: Function
}

const ThemeContextDefaultValue = {
    dark: false,
    toggle: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(ThemeContextDefaultValue);