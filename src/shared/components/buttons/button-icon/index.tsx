import {FC, ButtonHTMLAttributes} from "react";
import {Icon, IconifyIcon} from "@iconify/react";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "../style";

type IButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: string | IconifyIcon;
};

const ButtonIcon: FC<IButtonIconProps> = ({
                                             icon,
                                             type = "button",
                                             className = "",
                                             ...props
                                         }) => {
    const variant = props.children ? "withIcon" : "icon";

    return (
        <button
            type={type}
            className={cn(buttonStyles({variant}), className)}
            {...props}>
            {props.children && <span>{props.children}</span>}
            {icon &&
                (props.children ? (
                    <Icon icon={icon} className="w-fit h-fit"/>
                ) : (
                    <Icon icon={icon} className={className}/>
                ))}
        </button>
    );
};

export default ButtonIcon;
