import React from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import styles from "./style";

interface IViewModeProps {
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
}

const ViewModeToggle: React.FC<IViewModeProps> = ({viewMode, setViewMode}) => {
    const modes = [
        {type: "grid", icon: "proicons:grid", size: "w-[37px] h-[37px]"},
        {type: "list", icon: "iconoir:menu", size: "w-[37px] h-[37px]"},
    ] as const;
    const handleSetViewMode = (mode: "grid" | "list") => () => setViewMode(mode);
    return (
        <div className={styles.wrapper}>
            {modes.map(({type, icon, size}) => (
                <div key={type} className={styles.buttonWrapper(viewMode === type)}>
                    <ButtonIcon
                        icon={icon}
                        className={styles.buttonIcon(viewMode === type, size)}
                        onClick={handleSetViewMode(type)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ViewModeToggle;
