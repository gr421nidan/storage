import React from "react";
import folderZipIcon from "@/assets/folder-icon/folder-zip.png";
import {formatSize} from "@/shared/utils/convertSize";
import ContextMenu from "@/shared/components/context-menu";
import styles from "@/features/folders/folder-card/style";
import {IBackupDto} from "@/shared/interface/backup";

interface IBackupCardItemProps {
    backup: IBackupDto;
    onDeleteClick?: (backupId: string) => void;
}

const FolderZipCardItem: React.FC<IBackupCardItemProps> = ({backup, onDeleteClick,}) => {
    const getMenuItems = () => {
        const deleteClick = () => onDeleteClick?.(backup.id);

        return [
            {label: "Скачать", icon: "fluent:arrow-download-32-filled"},
            {label: "Удалить", icon: "lucide:trash", onClick: deleteClick},
        ];
    };

    return (
        <div className={styles.wrapper}>
            <img src={folderZipIcon} alt="backup"/>
            <div className={styles.content}>
                        <span className={styles.title} title={backup.title}>
                            {backup.title}
                        </span>
                <span className={styles.size}>{formatSize(backup.size)}</span>

            </div>
            <ContextMenu items={getMenuItems()}/>
        </div>
    );
};

export default FolderZipCardItem;
