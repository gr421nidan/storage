import React from "react";
import FileViewer from "@/shared/components/players";
import { EFileType } from "@/shared/enum/file-types";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFilePreviewProps {
    fileType: EFileType;
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const FilePreviewWindow: React.FC<IFilePreviewProps> = ({ fileType, fileUrl, fileTitle, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-10 shadow-lg min-w-[80vh] w-fit h-fit relative min-h-[80vh]">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl">{fileTitle}</div>
                    <ButtonIcon icon="si:close-circle-line" onClick={onClose} className="h-10 w-10" />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <FileViewer fileType={fileType} fileUrl={fileUrl} />
            </div>
        </div>
    );
};

export default FilePreviewWindow;
