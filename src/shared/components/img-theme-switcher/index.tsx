import React from "react";
import useTheme from "@/shared/hooks/theme-context";

interface IImgThemeSwitcherProps {
    light: string;
    dark: string;
    alt?: string;
    className?: string;
}

const ImgThemeSwitcher: React.FC<IImgThemeSwitcherProps> = ({light, dark, alt, className,
                                                           }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <img
            src={isDark ? dark : light}
            alt={alt}
            className={className}
        />
    );
};

export default ImgThemeSwitcher;