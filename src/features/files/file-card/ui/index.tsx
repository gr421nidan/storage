import React, { useMemo } from "react";
import FileIcon from "@/shared/components/file-icon";
import { IGetStorageFileDto, IGetTrashFileDto } from "@/shared/interface/files";
import { formatSize } from "@/shared/utils/convertSize";
import ContextMenu from "@/shared/components/context-menu";
import downloadFile from "@/shared/utils/download-file";
import styles from "../style";
import copyPublicLink from "@/shared/utils/copy-public-link";

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
    const menuItems = useMemo(() => {
        return variant === "trash"
            ? [
                { label: "Восстановить", icon: "garden:reload-stroke-12", onClick: () => onRecoverClick?.(file.id) },
                { label: "Удалить", icon: "lucide:trash", onClick: () => onDeleteClick?.(file.id) },
            ]
            : [
                { label: "Скачать", icon: "fluent:arrow-download-32-filled", onClick: () => downloadFile(file.path, file.title) },
                { label: "Переименовать", icon: "ci:edit-pencil-line-02" },
                { label: "Пометка", icon: "akar-icons:arrow-down-left" },
                { label: "Поделиться", icon: "mingcute:link-2-line" , onClick:()=>copyPublicLink(file.id)},
                { label: "Удалить", icon: "lucide:trash", onClick: () => onMoveToTrashClick?.(file.id) },
            ];
    }, [variant, file, onRecoverClick, onDeleteClick, onMoveToTrashClick]);

    return (
        <div className={styles.wrapper}>
            <FileIcon fileType={file.type} size={45} />
            <div className={styles.content}>
        <span className={styles.title} title={file.title}>
          {file.title}
        </span>
                <span className={styles.size}>{formatSize(file.size)}</span>
            </div>
            <ContextMenu items={menuItems} />
        </div>
    );
};

export default FileCardItem;
