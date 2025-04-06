import React, { useState } from "react";
import { IGetStorageFolderDto } from "@/shared/interface/folders";
import FolderCardItem from "@/features/folders/folder-card/ui";
import MoveToTrashFolderConfirm from "@/features/folders/move-to-trash-confirm/ui";
import DeleteFolderConfirm from "@/features/trash/folders/delete-confirm/ui";
import useRecoverFolderPresenter from "@/entities/cases/storage/folders/recover/presenter";

interface IFileViewProps {
    folders: IGetStorageFolderDto[];
    onFolderDoubleClick?: (folderId: string) => void;
    variant?: "default" | "trash";
}

const FoldersViewWidget: React.FC<IFileViewProps> = ({
                                                         folders,
                                                         onFolderDoubleClick,
                                                         variant = "default",
                                                     }) => {
    const { handleRecoverFolder } = useRecoverFolderPresenter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
    const handleMoveToTrashClick = (folderId: string) => {
        setSelectedFolderId(folderId);
        setIsModalOpen(true);
    };
    const handleDeleteClick = (folderId: string) => {
        setSelectedFolderId(folderId);
        setIsDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsModalOpen(false);
        setSelectedFolderId(null);
    };

    const handleFolderClick = (folderId: string) => () => {
        if (onFolderDoubleClick) {
            onFolderDoubleClick(folderId);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-4 gap-[32px] w-[1227px]">
                {folders.map((folder) => (
                    <div key={folder.id} onDoubleClick={handleFolderClick(folder.id)}>
                        <FolderCardItem
                            folder={folder}
                            variant={variant}
                            onMoveToTrashClick={handleMoveToTrashClick}
                            onDeleteClick={handleDeleteClick}
                            onRecoverClick={handleRecoverFolder}
                        />
                    </div>
                ))}
            </div>
            {isModalOpen && selectedFolderId && (
                <MoveToTrashFolderConfirm
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    folderId={selectedFolderId}
                />
            )}
            {isDeleteModalOpen && selectedFolderId && (
                <DeleteFolderConfirm
                    isOpen={isDeleteModalOpen}
                    onClose={handleCloseModal}
                    folderId={selectedFolderId}
                />
            )}
        </div>
    );
};

export default FoldersViewWidget;
