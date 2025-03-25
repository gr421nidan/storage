import React from "react";
import FileIcon from "@/shared/components/file-icon";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFileGridItemProps {
    file: IGetStorageFilesDto;
}

const FileGridItem: React.FC<IFileGridItemProps> = ({file}) => {
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[323px] h-[64px]">
            <FileIcon fileType={file.type} size={45}/>
            <div className="flex flex-col w-[180px]">
                <span className="mr-auto">{file.title}</span>
                <span className="text-xs text-right">{formatFileSize(file.size)}</span>
            </div>
            <ButtonIcon
                icon="charm:menu-kebab"
                className="h-[24px] ml-auto dark:text-white"
            />

        </div>
    );
};

export default FileGridItem;
