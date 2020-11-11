import React, { useContext, useLayoutEffect, useMemo, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const lightTheme = [
    '--background: #fff',
    '--textColor: #22262A',
    '--headerColor: #48DEFF',
    '--formColor: #EBEBEB'
];

const darkTheme = [
    '--background: #222222',
    '--textColor: #fff',
    '--headerColor: #121041',
    '--formColor: #bbb9b9'
];

const ThemeProvider = (props: any) => {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = localStorage.getItem('darkTheme');

        if (lastTheme === 'true') {
            setDark(true);
            applyTheme(darkTheme);
        } else {
            setDark(false);
            applyTheme(lightTheme);
        }
    }, [dark]);

    const toggle = () => {
        setDark(!dark);
        localStorage.setItem('darkTheme', JSON.stringify(!dark));
    }

    const applyTheme = (theme: any) => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const themeData = useMemo(() => {
        return { dark, toggle }
    }, [dark])

    return <ThemeContext.Provider value={themeData} {...props} />
}
export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;