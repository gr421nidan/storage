import React from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import { containerStyles, buttonWrapperStyles, buttonIconStyles } from "./style";

interface IViewModeProps {
    viewMode: "grid" | "list";
    setViewMode: (mode: "grid" | "list") => void;
}

const ViewModeToggle: React.FC<IViewModeProps> = ({ viewMode, setViewMode }) => {
    const modes = [
        { type: "grid", icon: "proicons:grid", size: "w-[37px] h-[37px]" },
        { type: "list", icon: "iconoir:menu", size: "w-[32px] h-[30px]" },
    ] as const;

    return (
        <div className={containerStyles}>
            {modes.map(({ type, icon, size }) => (
                <div key={type} className={buttonWrapperStyles(viewMode === type)}>
                    <ButtonIcon
                        icon={icon}
                        className={buttonIconStyles(viewMode === type, size)}
                        onClick={() => setViewMode(type)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ViewModeToggle;
