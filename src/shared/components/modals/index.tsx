import { FC, ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";

interface IModalProps {
    title: string;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

const Modal: FC<IModalProps> = ({
                                    title,
                                    onClose,
                                    children,
                                    className
                                }) => {
    return (
        <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 backdrop-blur-md"></div>
            <Dialog.Panel className={cn("relative bg-white flex flex-col gap-[28px] dark:bg-dark-theme dark:text-white rounded-[20px] p-6 border-2 border-purple w-fit", className)}>
                <div className="flex justify-between items-end">
                    <p className="text-[24px]">{title}</p>
                    <button onClick={onClose} className="text-purple-light dark:text-purple">
                        <Icon icon="si:close-circle-line" width={40} height={40} />
                    </button>
                </div>
                <div className="bg-purple w-full h-[2px] "></div>
                <div>{children}</div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default Modal;
