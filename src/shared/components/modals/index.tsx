import {FC, PropsWithChildren} from "react";
import {Dialog} from "@headlessui/react";
import {cn} from "@/shared/utils/cn";
import {
    modalWrapperStyle,
    backdropStyle,
    modalPanelStyle,
    modalTitleWrapperStyle,
    modalTitleStyle,
    separatorStyle,
} from "./style";

interface IModalProps {
    title: string;
    onClose: () => void;
    className?: string;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
                                                       title,
                                                       onClose,
                                                       children,
                                                       className,
                                                   }) => {
    return (
        <Dialog open={true} onClose={onClose} className={modalWrapperStyle}>
            <div className={backdropStyle}></div>
            <Dialog.Panel
                className={cn(modalPanelStyle, className)}>
                <div className={modalTitleWrapperStyle}>
                    <p className={modalTitleStyle}>{title}</p>
                </div>
                <div className={separatorStyle}></div>
                <div>{children}</div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default Modal;
