import React, { useState } from "react";
import folderIcon from "@/assets/folder-icon/folder.png";
import { IGetStorageFolderDto } from "@/shared/interface/folders";
import { formatSize } from "@/shared/utils/convertSize";
import ContextMenu from "@/shared/components/context-menu";
import useRenameFolderPresenter from "@/entities/cases/storage/folders/rename/presenter";
import styles from "../style";

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
                                                            onMoveToTrashClick,
                                                            onDeleteClick,
                                                            onRecoverClick,
                                                        }) => {
    const [isRenaming, setIsRenaming] = useState(false);

    const {
        register,
        onSubmit,
        errors,
    } = useRenameFolderPresenter({
        folderId: folder.id,
        currentTitle: folder.title,
        onClose: () => setIsRenaming(false),
    });

    const getMenuItems = () => {
        const recoverClick = () => onRecoverClick?.(folder.id);
        const deleteClick = () => onDeleteClick?.(folder.id);
        const moveToTrashClick = () => onMoveToTrashClick?.(folder.id);

        if (variant === "trash") {
            return [
                { label: "Восстановить", icon: "garden:reload-stroke-12", onClick: recoverClick },
                { label: "Удалить", icon: "lucide:trash", onClick: deleteClick },
            ];
        }

        return [
            { label: "Скачать", icon: "fluent:arrow-download-32-filled" },
            { label: "Переименовать", icon: "ci:edit-pencil-line-02", onClick: () => setIsRenaming(true) },
            { label: "Поделиться", icon: "mingcute:link-2-line" },
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
                            onBlur={onSubmit}
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
