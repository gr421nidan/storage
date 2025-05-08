import React, { useState } from "react";
import folderIcon from "@/assets/folder-icon/folder.png";
import { IGetStorageFolderDto } from "@/shared/interface/folders";
import { formatSize } from "@/shared/utils/convertSize";
import ContextMenu from "@/shared/components/context-menu";
import useRenameFolderPresenter from "@/entities/cases/storage/folders/rename/presenter";
import styles from "../style";
import useDownloadFolderPresenter from "@/entities/cases/storage/folders/download/presenter";

interface IFolderCardItemProps {
    folder: IGetStorageFolderDto;
    variant?: "default" | "trash";
    onAddAccessClick?: (folderId: string) => void;
    onMoveToTrashClick?: (folderId: string) => void;
    onDeleteClick?: (folderId: string) => void;
    onRecoverClick?: (folderId: string) => void;
}

const FolderCardItem: React.FC<IFolderCardItemProps> = ({
                                                            folder,
                                                            variant = "default",
                                                            onMoveToTrashClick,
                                                            onDeleteClick,
                                                            onRecoverClick,
                                                            onAddAccessClick,
                                                        }) => {
    const {handleDownloadFolder} = useDownloadFolderPresenter()
    const [isRenaming, setIsRenaming] = useState(false);
    const handleEditClick = () => setIsRenaming(true);
    const handleCloseRename = () => setIsRenaming(false);
    const {
        register,
        onSubmit,
        errors,
    } = useRenameFolderPresenter({
        folderId: folder.id,
        currentTitle: folder.title,
        onClose: handleCloseRename,
    });
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    const getMenuItems = () => {
        const downloadClick =()=> handleDownloadFolder(folder.id);
        const recoverClick = () => onRecoverClick?.(folder.id);
        const deleteClick = () => onDeleteClick?.(folder.id);
        const moveToTrashClick = () => onMoveToTrashClick?.(folder.id);
        const addAccessClick = () => onAddAccessClick?.(folder.id);

        if (variant === "trash") {
            return [
                { label: "Восстановить", icon: "garden:reload-stroke-12", onClick: recoverClick },
                { label: "Удалить", icon: "lucide:trash", onClick: deleteClick },
            ];
        }

        return [
            { label: "Скачать", icon: "fluent:arrow-download-32-filled", onClick: downloadClick },
            { label: "Переименовать", icon: "ci:edit-pencil-line-02", onClick: handleEditClick },
            { label: "Поделиться", icon: "mingcute:link-2-line", onClick: addAccessClick},
            { label: "Удалить", icon: "lucide:trash", onClick: moveToTrashClick },
        ];
    };

    return (
        <div className={styles.wrapper}>
            <img src={folderIcon} alt="folder" />
            <div className={styles.content}>
                {isRenaming ? (
                    <form onSubmit={onSubmit}>
                        <input
                            {...register("title")}
                            autoFocus
                            onBlur={handleCloseRename}
                            onKeyDown={handleKeyDown}
                            className={`${styles.input} ${errors.title ? 'border-red-500' : 'border-black'}`}
                        />
                    </form>
                ) : (
                    <>
                        <span className={styles.title} title={folder.title}>
                            {folder.title}
                        </span>
                        <span className={styles.size}>{formatSize(folder.size)}</span>
                    </>
                )}
            </div>
            <ContextMenu items={getMenuItems()} />
        </div>
    );
};

export default FolderCardItem;
