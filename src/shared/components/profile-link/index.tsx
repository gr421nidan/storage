import {ReactNode} from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import ERouterPath from "@/shared/common/enum/router";
import {circleProfileStyle, profileButtonStyle, profileLinkStyle, activeColorStyles} from "./style";

const ProfileLink = (): ReactNode => {
    const location = useLocation();
    const isActive = location.pathname === ERouterPath.USER_PROFILE;
    const iconStyle = isActive ? activeColorStyles : "";

    return (
        <div className={profileButtonStyle}>
            <Link to={ERouterPath.USER_PROFILE} className={cn(circleProfileStyle, iconStyle)}>
                <Icon icon="basil:user-solid" width="35" height="35"/>
            </Link>
            <Link to={ERouterPath.USER_PROFILE} className={profileLinkStyle}>
                Перейти в профиль
            </Link>
        </div>
    );
};

export default ProfileLink;
