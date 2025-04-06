import React from "react";
import { IGetStorageFileDto, IGetTrashFileDto } from "@/shared/interface/files";
import { formatFileSize } from "@/shared/utils/convertSizeFiles";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import downloadFile from "@/shared/utils/download-file";

interface IFileRowItemProps {
    file: IGetStorageFileDto;
    variant?: "default" | "trash";
    onMoveToTrashClick?: (fileId: string) => void;
    onDeleteClick?: (fileId: string) => void;
}

const FileRowItem: React.FC<IFileRowItemProps> = ({ file, variant = "default", onMoveToTrashClick,onDeleteClick  }) => {
    const handleDownloadClick = () => downloadFile(file.path, file.title);
    const handleDeleteClick = () => {
        if (onMoveToTrashClick) {
            onMoveToTrashClick(file.id);
        }
    };

    return (
        <div className="cursor-pointer text-lg flex bg-gr-blocks items-center p-4 border-3 border-purple-light w-[1227px] h-[64px] px-[36px] rounded-[15px]">
            <div className="w-[373px] flex">
                <span className="max-w-[250px] truncate" title={file.title}>
                    {file.title}
                </span>
            </div>

            {variant === "trash" ? (
                <>
                    <span className="w-[236px]">{file.created_at}</span>
                    <span className="w-[236px]">
                        {(file as IGetTrashFileDto).deleted_at}
                    </span>
                </>
            ) : (
                <>
                    <span className="w-[236px]">{file.created_at}</span>
                    <span className="w-[224px]">
                        {file.tag_title ? `#${file.tag_title}` : "-"}
                    </span>
                </>
            )}

            <span className="w-[209px]">{formatFileSize(file.size)}</span>

            <div className="flex gap-3">
                {variant === "trash" ? (
                    <>
                        <ButtonIcon
                            icon="ph:arrow-counter-clockwise-bold"
                            className="w-5 h-5"
                            onClick={() => {
                            }}
                        />
                        <ButtonIcon
                            icon="lucide:trash"
                            className="w-5 h-5"
                            onClick={() => onDeleteClick && onDeleteClick(file.id)}
                        />
                    </>
                ) : (
                    <>
                        <ButtonIcon
                            icon="fluent:arrow-download-32-filled"
                            className="w-5 h-5"
                            onClick={handleDownloadClick}
                        />
                        <ButtonIcon icon="ci:edit-pencil-line-02" className="w-5 h-5" />
                        <ButtonIcon icon="akar-icons:arrow-down-left" className="w-5 h-5" />
                        <ButtonIcon icon="mingcute:link-2-line" className="w-5 h-5" />
                        <ButtonIcon
                            icon="lucide:trash"
                            className="w-5 h-5"
                            onClick={handleDeleteClick}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default FileRowItem;
