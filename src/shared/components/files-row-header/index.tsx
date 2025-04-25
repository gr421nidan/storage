import React from "react";
import styles from "./style";

interface IFilesRowHeadersProps {
    viewMode: "list" | "grid";
    variant: "trash" | "default";
}

const FilesRowHeaders: React.FC<IFilesRowHeadersProps> = ({ viewMode, variant }) => {
    if (viewMode === "list" && variant === "trash") {
        return (
            <div className={styles.listTrashHeader}>
                <span className={styles.textLeft}>Наименование</span>
                <span>Дата создания</span>
                <span>Дата удаления</span>
                <span>Размер файла</span>
                <span>Действия</span>
            </div>
        );
    }

    if (viewMode === "list") {
        return (
            <div className={styles.listDefaultHeader}>
                <span className={styles.textLeft}>Наименование</span>
                <span>Дата создания</span>
                <span>Размер файла</span>
                <span>Действия</span>
            </div>
        );
    }

    return null;
};

export default FilesRowHeaders;
