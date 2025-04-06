import React, { useState } from "react";
import { IGetStorageFileDto } from "@/shared/interface/files";
import FileCardItem from "@/features/files/file-card/ui";
import FileRowItem from "@/features/files/file-row/ui";
import DeleteFileConfirm from "@/features/trash/files/delete-confirm/ui";
import MoveToTrashConfirm from "@/features/files/move-to-trash-confirm/ui";

interface IFileViewProps {
    files: IGetStorageFileDto[];
    viewMode: "grid" | "list";
    variant?: "default" | "trash";
}

const FilesViewWidget: React.FC<IFileViewProps> = ({ files, viewMode, variant = "default" }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isMoveToTrashModalOpen, setIsMoveToTrashModalOpen] = useState(false);
    const [currentFileId, setCurrentFileId] = useState<string | null>(null);
    const handleMoveToTrashClick = (fileId: string) => {
        setCurrentFileId(fileId);
        setIsMoveToTrashModalOpen(true);
    };
    const handleDeleteClick = (fileId: string) => {
        setCurrentFileId(fileId);
        setIsDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsMoveToTrashModalOpen(false);
        setCurrentFileId(null);
    };

    return (
        <div>
            <div className={viewMode === "grid" ? "grid grid-cols-4 gap-8 w-[1227px]" : "flex flex-col gap-6"}>
                {files.map((file) =>
                    viewMode === "grid" ? (
                        <FileCardItem
                            key={file.id}
                            file={file}
                            variant={variant}
                            onMoveToTrashClick={handleMoveToTrashClick}
                            onDeleteClick={handleDeleteClick}
                        />
                    ) : (
                        <FileRowItem
                            key={file.id}
                            file={file}
                            variant={variant}
                            onMoveToTrashClick={handleMoveToTrashClick}
                            onDeleteClick={handleDeleteClick}
                        />
                    )
                )}
            </div>
            {isMoveToTrashModalOpen && currentFileId && (
                <MoveToTrashConfirm
                    isOpen={isMoveToTrashModalOpen}
                    onClose={handleCloseModal}
                    fileId={currentFileId}
                />
            )}
            {isDeleteModalOpen && currentFileId && (
                <DeleteFileConfirm
                    isOpen={isDeleteModalOpen}
                    onClose={handleCloseModal}
                    fileId={currentFileId}
                />
            )}
        </div>
    );
};

export default FilesViewWidget;
