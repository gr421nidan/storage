import React from "react";
import folderIcon from "@/assets/folder-icon/folder.png"
import {IGetStorageFoldersDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import IconListMenu from "@/shared/components/lib/IconListMenu.tsx";

interface IFolderGridItemProps {
    folder: IGetStorageFoldersDto;
}
const iconMenuItems = [
    { label: "Скачать", icon: "fluent:arrow-download-32-filled" },
    { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
    { label: "Копировать", icon: "ci:copy" },
    { label: "Пометка", icon: "akar-icons:arrow-down-left" },
    { label: "Поделиться", icon: "mingcute:link-2-line" },
    { label: "Удалить", icon: "lucide:trash" },
];

const FolderGridItem: React.FC<IFolderGridItemProps> = ({folder}) => {
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[323px] h-[64px]">
            <img src={folderIcon}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{folder.title}</span>
                <span className="text-xs text-right">{formatFileSize(folder.size)}</span>
            </div>
            <IconListMenu items={iconMenuItems} />
        </div>
    );
};

export default FolderGridItem;
