import React from "react";
import FileViewer from "@/shared/components/players";
import { EFileType } from "@/shared/emum/file-types";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFilePreviewWindowProps {
    fileType: EFileType;
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const FilePreviewWindow: React.FC<IFilePreviewWindowProps> = ({ fileType, fileUrl, fileTitle, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white rounded-[20px] p-10 shadow-lg max-w-[110vh] w-fit h-auto relative max-h-[80vh]">
                {/* Контейнер для названия и кнопки */}
                <div className="flex items-center justify-between mb-2">
                    {/* Название файла */}
                    <div className="text-2xl">{fileTitle}</div>

                    {/* Кнопка закрытия с иконкой */}
                    <ButtonIcon icon="si:close-circle-line" onClick={onClose} className="h-10 w-10" />
                </div>

                {/* Полоска (разделитель) */}
                <div className="border-t-3 border-purple my-4" />

                {/* Плеер для файлов */}
                <FileViewer fileType={fileType} fileUrl={fileUrl} />
            </div>
        </div>
    );
};

export default FilePreviewWindow;
