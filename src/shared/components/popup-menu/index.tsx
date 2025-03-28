import { FC, PropsWithChildren, useRef, useEffect } from "react";
import { cn } from "@/shared/utils/cn";
import {popupPanelBaseStyle } from "./style";

interface IPopupMenuProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const PopupMenu: FC<PropsWithChildren<IPopupMenuProps>> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      children,
                                                                      className,
                                                                  }) => {
    const panelRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);
    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div ref={panelRef} className={cn(popupPanelBaseStyle, className)}>
                {children}
            </div>
        </div>
    );
};
