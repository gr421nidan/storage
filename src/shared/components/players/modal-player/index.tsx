import React, {PropsWithChildren} from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFilePlayerModalProps extends PropsWithChildren{
    title: string;
    onClose: () => void;
    className?: string;
}

const FilePlayerModal: React.FC<IFilePlayerModalProps> = ({ title, onClose, children, className }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-30 backdrop-saturate-150 overflow-auto">
            <div className={`border-2 border-purple bg-white dark:bg-dark-theme dark:border-purple-light rounded-[20px] p-6 shadow-lg relative ${className ?? "w-full max-w-5xl"}`}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[20vw]" title={title}>{title}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10 text-purple-light dark:text-purple"
                    />
                </div>
                <div className="border-t-3 dark:border-purple-light border-purple my-4" />
                {children}
            </div>
        </div>
    );
};

export default FilePlayerModal;
