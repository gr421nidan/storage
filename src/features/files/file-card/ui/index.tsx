import React from "react";
import FileIcon from "@/shared/components/file-icon";
import {IGetStorageFileDto, IGetTrashFileDto} from "@/shared/interface/files";
import { formatFileSize } from "@/shared/utils/convertSizeFiles";
import ContextMenu from "@/shared/components/context-menu";
import downloadFile from "@/shared/utils/download-file";

interface IFileCardItemProps {
    file: IGetStorageFileDto | IGetTrashFileDto;
    variant?: "default" | "trash";
    onMoveToTrashClick?: (fileId: string) => void;
    onDeleteClick?: (fileId: string) => void;
    onRecoverClick?: (fileId: string) => void;
}

const FileCardItem: React.FC<IFileCardItemProps> = ({
                                                        file,
                                                        variant = "default",
                                                        onMoveToTrashClick,
                                                        onDeleteClick,
                                                        onRecoverClick
                                                    }) => {
    const getMenuItems = () => {
        if (variant === "trash") {
            return [
                { label: "Восстановить", icon: "garden:reload-stroke-12", onClick: () => onRecoverClick && onRecoverClick(file.id) },
                { label: "Удалить", icon: "lucide:trash", onClick: () => onDeleteClick && onDeleteClick(file.id) },
            ];
        }

        return [
            { label: "Скачать", icon: "fluent:arrow-download-32-filled", onClick: () => downloadFile(file.path, file.title) },
            { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
            { label: "Пометка", icon: "akar-icons:arrow-down-left" },
            { label: "Поделиться", icon: "mingcute:link-2-line" },
            {
                label: "Удалить",
                icon: "lucide:trash",
                onClick: () => onMoveToTrashClick && onMoveToTrashClick(file.id),
            },
        ];
    };
    return (
        <div className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[282px] h-[64px]">
            <FileIcon fileType={file.type} size={45} />
            <div className="flex flex-col w-[180px] cursor-pointer">
                <span className="mr-auto max-w-[100px] truncate" title={file.title}>{file.title}</span>
                <span className="text-xs text-right">{formatFileSize(file.size)}</span>
            </div>
            <ContextMenu items={getMenuItems()} />
        </div>
    );
};

export default FileCardItem;
