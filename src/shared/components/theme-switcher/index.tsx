import { Switch } from "@headlessui/react";
import { ETheme } from "@/shared/common/enum/theme";
import { switcherButtonStyles, switcherCircleStyles } from "./style";
import useTheme from "@/shared/hooks/theme-context";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Switch
            checked={theme === ETheme.DARK}
            onChange={toggleTheme}
            className={switcherButtonStyles}>
            <span
                className={switcherCircleStyles}
            />
        </Switch>
    );
};
export default ThemeSwitcher;
