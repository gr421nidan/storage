import { useContext } from "react";
import { ThemeContext } from "@/app/provider/theme";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
};

export default useTheme;
