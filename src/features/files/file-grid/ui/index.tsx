import React from "react";
import FileIcon from "@/shared/components/file-icon";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import IconListMenu from "@/shared/components/lib/IconListMenu.tsx";

interface IFileGridItemProps {
    file: IGetStorageFilesDto;
}

const iconMenuItems = [
    { label: "Скачать", icon: "fluent:arrow-download-32-filled" },
    { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
    { label: "Копировать", icon: "ci:copy" },
    { label: "Пометка", icon: "akar-icons:arrow-down-left" },
    { label: "Поделиться", icon: "mingcute:link-2-line" },
    { label: "Удалить", icon: "lucide:trash" },
];

const FileGridItem: React.FC<IFileGridItemProps> = ({file}) => {
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[323px] h-[64px]">
            <FileIcon fileType={file.type} size={45}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{file.title}</span>
                <span className="text-xs text-right">{formatFileSize(file.size)}</span>
            </div>
            <IconListMenu items={iconMenuItems} />
        </div>
    );
};

export default FileGridItem;
