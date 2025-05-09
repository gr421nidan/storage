import React, {useState, useMemo} from "react";
import FileIcon from "@/shared/components/file-icon";
import {IGetStorageFileDto, IGetTrashFileDto} from "@/shared/interface/files";
import {formatSize} from "@/shared/utils/convertSize";
import ContextMenu from "@/shared/components/context-menu";
import download from "@/shared/utils/download";
import styles from "../style";
import copyLink from "@/shared/utils/copy-link";
import {BUCKET_BASE_URL} from "@/shared/config";
import FileViewer from "@/shared/components/players";
import useRenameFilePresenter from "@/entities/cases/storage/files/rename/presenter";

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
                                                        onRecoverClick,
                                                    }) => {
    const [isRenaming, setIsRenaming] = useState(false);
    const handleEditClick = () => setIsRenaming(true);
    const handleCloseRename = () => setIsRenaming(false);
    const {
        register,
        onSubmit,
        errors,
    } = useRenameFilePresenter({
        fileId: file.id,
        currentTitle: file.title,
        onClose: handleCloseRename,
    });

    const menuItems = useMemo(() => {
        return variant === "trash"
            ? [
                {label: "Восстановить", icon: "garden:reload-stroke-12", onClick: () => onRecoverClick?.(file.id)},
                {label: "Удалить", icon: "lucide:trash", onClick: () => onDeleteClick?.(file.id)},
            ]
            : [
                {
                    label: "Скачать",
                    icon: "fluent:arrow-download-32-filled",
                    onClick: () => download(file.path, file.title)
                },
                {label: "Переименовать", icon: "ci:edit-pencil-line-02", onClick: handleEditClick},
                {label: "Поделиться", icon: "mingcute:link-2-line", onClick: () => copyLink(file.id, "file")},
                {label: "Удалить", icon: "lucide:trash", onClick: () => onMoveToTrashClick?.(file.id)},
            ];
    }, [variant, file, onRecoverClick, onDeleteClick, onMoveToTrashClick]);

    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const handleDoubleClick = () => {
        setIsViewerOpen(true);
    };
    const handleCloseViewer = () => {
        setIsViewerOpen(false);
    };
    const fullFilePath = `${BUCKET_BASE_URL}${file.path}`;
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    return (
        <>
            <div className={styles.wrapper} onDoubleClick={handleDoubleClick}>
                <FileIcon fileType={file.type} size={45}/>
                <div className={styles.content}>
                    {isRenaming ? (
                        <form onSubmit={onSubmit}>
                            <input
                                {...register("title")}
                                autoFocus
                                onBlur={handleCloseRename}
                                onKeyDown={handleKeyDown}
                                className={`${styles.input} ${errors.title ? "border-red-500" : "border-black"}`}
                            />
                        </form>
                    ) : (
                        <>
                            <span className={styles.title} title={file.title}>
                                {file.title}
                            </span>
                            <span className={styles.size}>{formatSize(file.size)}</span>
                        </>
                    )}
                </div>
                <ContextMenu items={menuItems}/>
            </div>
            {isViewerOpen && (
                <FileViewer fileType={file.type} fileUrl={fullFilePath} fileTitle={file.title}
                            onClose={handleCloseViewer}/>
            )}
        </>
    );
};

export default FileCardItem;
