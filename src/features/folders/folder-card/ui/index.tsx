import React from "react";
import folderIcon from "@/assets/folder-icon/folder.png";
import {IGetStorageFolderDto} from "@/shared/interface/folders";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ContextMenu from "@/shared/components/context-menu";

interface IFolderCardItemProps {
    folder: IGetStorageFolderDto;
    variant?: "default" | "trash";
    onMoveToTrashClick?: (folderId: string) => void;
    onDeleteClick?: (folderId: string) => void;
    onRecoverClick?: (fileId: string) => void;
}

const FolderCardItem: React.FC<IFolderCardItemProps> = ({
                                                            folder,
                                                            variant = "default",
                                                            onMoveToTrashClick, onDeleteClick, onRecoverClick
                                                        }) => {
    const getMenuItems = () => {
        if (variant === "trash") {
            return [
                {label: "Восстановить", icon: "garden:reload-stroke-12", onClick: () => onRecoverClick && onRecoverClick(folder.id)},
                {label: "Удалить", icon: "lucide:trash", onClick: () => onDeleteClick && onDeleteClick(folder.id)},
            ];
        }

        return [
            {label: "Скачать", icon: "fluent:arrow-download-32-filled"},
            {label: "Переименовать", icon: "ci:edit-pencil-line-02"},
            {label: "Пометка", icon: "akar-icons:arrow-down-left"},
            {label: "Поделиться", icon: "mingcute:link-2-line"},
            {
                label: "Удалить",
                icon: "lucide:trash",
                onClick: () => onMoveToTrashClick && onMoveToTrashClick(folder.id)
            },
        ];
    };

    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[282px] h-[64px]">
            <img src={folderIcon}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{folder.title}</span>
                <span className="text-xs text-right">{formatFileSize(folder.size)}</span>
            </div>
            <ContextMenu items={getMenuItems()}/>
        </div>
    );
};

export default FolderCardItem;
