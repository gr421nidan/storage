import React from "react";
import FileIcon from "@/shared/components/file-icon";
import { IGetStorageFileDto } from "@/shared/interface/storage";
import { formatFileSize } from "@/shared/utils/convertSizeFiles";
import ContextMenu from "@/shared/components/context-menu";

interface IFileGridItemProps {
    file: IGetStorageFileDto;
}

const menuItems = [
    { label: "Скачать", icon: "fluent:arrow-download-32-filled" },
    { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
    { label: "Пометка", icon: "akar-icons:arrow-down-left" },
    { label: "Поделиться", icon: "mingcute:link-2-line" },
    { label: "Удалить", icon: "lucide:trash" },
];

const FileGridItem: React.FC<IFileGridItemProps> = ({ file }) => {
    return (
        <div className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[282px] h-[64px]">
            <FileIcon fileType={file.type} size={45} />
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto max-w-[100px] truncate" title={file.title}>{file.title}</span>
                <span className="text-xs text-right">{formatFileSize(file.size)}</span>
            </div>
            <ContextMenu items={menuItems} />
        </div>
    );
};

export default FileGridItem;