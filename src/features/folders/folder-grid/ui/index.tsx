import React from "react";
import folderIcon from "@/assets/folder-icon/folder.png"
import {IGetStorageFoldersDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFolderGridItemProps {
    folder: IGetStorageFoldersDto;
}

const FolderGridItem: React.FC<IFolderGridItemProps> = ({folder}) => {
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[323px] h-[64px]">
            <img src={folderIcon}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{folder.title}</span>
                <span className="text-xs text-right">{formatFileSize(folder.size)}</span>
            </div>
            <ButtonIcon
                icon="charm:menu-kebab"
                className="h-[32px] ml-auto text-black dark:text-white"
            />

        </div>
    );
};

export default FolderGridItem;
