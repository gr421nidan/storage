import React, {useState} from "react";
import FileIcon from "@/shared/components/file-icon";
import {IGetStorageFileDto} from "@/shared/interface/files";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ContextMenu from "@/shared/components/context-menu";
import downloadFile from "@/shared/utils/download-file";
import {BUCKET_BASE_URL} from "@/shared/config";
import FilePreviewWindow from "@/shared/components/file-preview";

interface IFileGridItemProps {
    file: IGetStorageFileDto;
}

const menuItems = (file: IGetStorageFileDto) => [
    {label: "Скачать", icon: "fluent:arrow-download-32-filled", onClick: () => downloadFile(file.path, file.title)},
    {label: "Переименовать", icon: "ci:edit-pencil-line-02"},
    {label: "Пометка", icon: "akar-icons:arrow-down-left"},
    {label: "Поделиться", icon: "mingcute:link-2-line"},
    {label: "Удалить", icon: "lucide:trash"},
];

const FileGridItem: React.FC<IFileGridItemProps> = ({file}) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const handleDoubleClick = () => {
        setIsViewerOpen(true);
    };
    const handleCloseViewer = () => {
        setIsViewerOpen(false);
    };
    const fullFilePath = `${BUCKET_BASE_URL}${file.path}`;
    return (
        <div
            className="flex items-center gap-4 border-2 px-[18px] bg-gr-blocks border-purple-light rounded-[15px] shadow-md w-[282px] h-[64px]">
            <FileIcon fileType={file.type} size={45}/>

            <div
                className="flex flex-col w-[180px] cursor-pointer"
                onDoubleClick={handleDoubleClick}
            >
                <span className="mr-auto max-w-[100px] truncate" title={file.title}>{file.title}</span>
                <span className="text-xs text-right">{formatFileSize(file.size)}</span>
            </div>

            <ContextMenu items={menuItems(file)}/>
            {isViewerOpen && (
                <FilePreviewWindow
                    fileTitle={file.title}
                    fileType={file.type}
                    fileUrl={fullFilePath}
                    onClose={handleCloseViewer}
                />
            )}
        </div>
    );
};

export default FileGridItem;
