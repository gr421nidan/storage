import {createContext, PropsWithChildren, useState} from "react";
import {ETheme} from "@/shared/common/enum/theme";
import {EStorageThemeKey} from "@/shared/common/enum/local-storge";


interface IThemeContextProps {
    theme: ETheme | null;
    toggleTheme: () => void;
}

const defaultThemeContext: IThemeContextProps = {
    theme: ETheme.LIGHT,
    toggleTheme: () => {}
};

const ThemeContext = createContext<IThemeContextProps>(defaultThemeContext);

const setAttributeStoreTheme = (storeTheme: ETheme) => document.documentElement.setAttribute("data-theme", storeTheme);

const getInitialTheme = (): ETheme => {
    const storeTheme = localStorage.getItem(EStorageThemeKey.THEME) as ETheme;
    if (storeTheme) {
        setAttributeStoreTheme(storeTheme);
    }
    return storeTheme || ETheme.LIGHT;
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<ETheme>(getInitialTheme);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
            setAttributeStoreTheme(newTheme);
            localStorage.setItem(EStorageThemeKey.THEME, newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };