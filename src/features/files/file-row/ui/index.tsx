import React, {useState, useMemo} from "react";
import {IGetStorageFileDto, IGetTrashFileDto} from "@/shared/interface/files";
import {formatSize} from "@/shared/utils/convertSize";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import download from "@/shared/utils/download";
import copyPublicLink from "../../../../shared/utils/copy-link";
import useRenameFilePresenter from "@/entities/cases/storage/files/rename/presenter";
import styles from "../style";
import {cn} from "@/shared/utils/cn";
import {BUCKET_BASE_URL} from "@/shared/config";
import FileViewer from "@/shared/components/players";

interface IFileRowItemProps {
    file: IGetStorageFileDto;
    variant?: "default" | "trash" | "access";
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
    const [isRenaming, setIsRenaming] = useState(false);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const handleDoubleClick = () => {
        setIsViewerOpen(true);
    };
    const handleCloseViewer = () => {
        setIsViewerOpen(false);
    };
    const handleEditClick = () => setIsRenaming(true);
    const handleCloseRename = () => setIsRenaming(false);
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    const {register, onSubmit, errors} = useRenameFilePresenter({
        fileId: file.id,
        currentTitle: file.title,
        onClose: handleCloseRename,
    });
    const handlers = useMemo(() => ({
        download: () => download(file.path, file.title),
        moveToTrash: () => onMoveToTrashClick?.(file.id),
        delete: () => onDeleteClick?.(file.id),
        recover: () => onRecoverClick?.(file.id),
        copyLink: () => copyPublicLink?.(file.id),
    }), [file, onMoveToTrashClick, onDeleteClick, onRecoverClick]);

    const renderActions = () => {
        if (variant === "trash") {
            return (
                <>
                    <ButtonIcon icon="ph:arrow-counter-clockwise-bold" className={styles.icon} onClick={handlers.recover} />
                    <ButtonIcon icon="lucide:trash" className={styles.icon} onClick={handlers.delete} />
                </>
            );
        }
        if (variant === "access") {
            return (
                <ButtonIcon icon="fluent:arrow-download-32-filled" className={styles.icon} onClick={handlers.download} />
            );
        }
        return (
            <>
                <ButtonIcon icon="fluent:arrow-download-32-filled" className={styles.icon} onClick={handlers.download} />
                <ButtonIcon icon="ci:edit-pencil-line-02" className={styles.icon} onClick={handleEditClick} />
                <ButtonIcon icon="mingcute:link-2-line" className={styles.icon} onClick={handlers.copyLink} />
                <ButtonIcon icon="lucide:trash" className={styles.icon} onClick={handlers.moveToTrash} />
            </>
        );
    };
    const wrapperStyle = cn(
        styles.wrapper,
        variant === "trash"
            ? "grid-cols-[1.9fr_1.2fr_1fr_1fr_auto]"
            : "grid-cols-[1.8fr_1.1fr_1fr_auto]"
    );
    const fullFilePath = `${BUCKET_BASE_URL}${file.path}`;
    return (
        <>
            <div className={wrapperStyle} onDoubleClick={handleDoubleClick}>
                <div className={styles.title} title={file.title}>
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
                        file.title
                    )}
                </div>

                <span>{file.created_at}</span>
                {variant === "trash" && (
                    <span>{(file as IGetTrashFileDto).deleted_at}</span>
                )}
                <span>{formatSize(file.size)}</span>

                <div className={styles.actions}>{renderActions()}</div>
            </div>
            {isViewerOpen && (
                <FileViewer
                    fileType={file.type}
                    fileUrl={fullFilePath}
                    fileTitle={file.title}
                    onClose={handleCloseViewer}
                />
            )}
        </>
    );
};

export default FileRowItem;
