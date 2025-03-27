import React from "react";
import folderIcon from "@/assets/folder-icon/folder.png"
import {IGetStorageFoldersDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ContextMenu from "@/shared/components/context-menu";

interface IFolderGridItemProps {
    folder: IGetStorageFoldersDto;
}
const menuItems = [
    { label: "Скачать", icon: "fluent:arrow-download-32-filled" },
    { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
    { label: "Пометка", icon: "akar-icons:arrow-down-left" },
    { label: "Поделиться", icon: "mingcute:link-2-line" },
    { label: "Удалить", icon: "lucide:trash" },
];

const FolderGridItem: React.FC<IFolderGridItemProps> = ({folder}) => {
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[282px] h-[64px]">
            <img src={folderIcon}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{folder.title}</span>
                <span className="text-xs text-right">{formatFileSize(folder.size)}</span>
            </div>
            <ContextMenu items={menuItems}/>
        </div>
    );
};

export default FolderGridItem;
