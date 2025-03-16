import React from "react";
import {circleProfileStyle, profileButtonStyle, sidebarContainerStyles} from "./style";
import {cn} from "@/shared/utils/cn";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

interface ISidebarWidgetProps {
    className?: string;
}

const SidebarWidget: React.FC<ISidebarWidgetProps> = ({className}) => {
    return (
        <div className={cn(sidebarContainerStyles, className)}>
            <div className={profileButtonStyle}>
                <Link to={"/"} className={circleProfileStyle}>
                    <Icon icon="lets-icons:user-light" width="30" height="30"/>
                </Link>
                <Link to={"/"} className="font-manrope font-light text-lg">Перейти в профиль</Link>
            </div>
        </div>


    );
};

export default SidebarWidget;