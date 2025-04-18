import React from "react";
import {IGetStorageFileDto, IGetTrashFileDto} from "@/shared/interface/files";
import {formatSize} from "@/shared/utils/convertSize";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import downloadFile from "@/shared/utils/download-file";
import styles from "../style";
import copyPublicLink from "@/shared/utils/copy-public-link";

interface IFileRowItemProps {
    file: IGetStorageFileDto;
    variant?: "default" | "trash";
    onMoveToTrashClick?: (fileId: string) => void;
    onDeleteClick?: (fileId: string) => void;
    onRecoverClick?: (fileId: string) => void;
}

const FileRowItem: React.FC<IFileRowItemProps> = ({
                                                      file,
                                                      variant = "default",
                                                      onMoveToTrashClick,
                                                      onDeleteClick,
                                                      onRecoverClick,
                                                  }) => {
    const handleDownloadClick = () => downloadFile(file.path, file.title);
    const handleMoveToTrashClick = () => onMoveToTrashClick?.(file.id);
    const handleDeleteClick = () => onDeleteClick?.(file.id);
    const handleRecoverClick = () => onRecoverClick?.(file.id);
    const handleCopyLinkClick = () => copyPublicLink?.(file.id);
    const actionButtons = () => {
        if (variant === "trash") {
            return (
                <>
                    <ButtonIcon
                        icon="ph:arrow-counter-clockwise-bold"
                        className={styles.icon}
                        onClick={handleRecoverClick}
                    />
                    <ButtonIcon
                        icon="lucide:trash"
                        className={styles.icon}
                        onClick={handleDeleteClick}
                    />
                </>
            );
        }

        return (
            <>
                <ButtonIcon
                    icon="fluent:arrow-download-32-filled"
                    className={styles.icon}
                    onClick={handleDownloadClick}
                />
                <ButtonIcon icon="ci:edit-pencil-line-02" className={styles.icon}/>
                <ButtonIcon icon="akar-icons:arrow-down-left" className={styles.icon}/>
                <ButtonIcon icon="mingcute:link-2-line" className={styles.icon} onClick={handleCopyLinkClick}/>
                <ButtonIcon
                    icon="lucide:trash"
                    className={styles.icon}
                    onClick={handleMoveToTrashClick}
                />
            </>
        );
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.title} title={file.title}>
                {file.title}
            </div>
            <span>{file.created_at}</span>
            <span>
        {variant === "trash"
            ? (file as IGetTrashFileDto).deleted_at
            : file.tag_title
                ? `#${file.tag_title}`
                : "-"}
            </span>
            <span>{formatSize(file.size)}</span>

            <div className={styles.actions}>{actionButtons()}</div>
        </div>
    );
};

export default FileRowItem;
