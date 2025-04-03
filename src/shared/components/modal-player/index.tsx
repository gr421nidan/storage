import React from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";
import FileViewer from "@/shared/components/players"; // Плеер для отображения файлов
import {
    modalWrapperStyle,
    backdropStyle,
    modalPanelStyle,
    modalTitleWrapperStyle,
    modalTitleStyle,
    separatorStyle,
    closeButtonStyle,
} from "./style";
import { EFileType } from "@/shared/emum/file-types"; // Используем стили

interface IFileViewerModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    fileUrl: string;
    fileType: EFileType;
    title: string;
}

const FileViewerModal: React.FC<IFileViewerModalProps> = ({
                                                              isOpen,
                                                              onRequestClose,
                                                              fileUrl,
                                                              fileType,
                                                              title,
                                                          }) => {
    return (
        <Dialog open={isOpen} onClose={onRequestClose} className={modalWrapperStyle}>
            <div className={backdropStyle}></div>
            <Dialog.Panel className={`${modalPanelStyle} w-[80%] h-[80%]`}>
                <div className={modalTitleWrapperStyle}>
                    <p className={modalTitleStyle}>{title}</p>
                    <button onClick={onRequestClose} className={closeButtonStyle}>
                        <Icon icon="si:close-circle-line" width={40} height={40} />
                    </button>
                </div>
                <div className={separatorStyle}></div>
                <div className="p-4 overflow-auto">
                    <FileViewer fileUrl={fileUrl} fileType={fileType} />
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default FileViewerModal;
