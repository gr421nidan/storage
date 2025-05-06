import React, { useState } from "react";
import { IGetStorageFolderDto } from "@/shared/interface/folders";
import FolderCardItem from "@/features/folders/folder-card/ui";
import MoveToTrashFolderConfirm from "@/features/folders/move-to-trash-confirm/ui";
import DeleteFolderConfirm from "@/features/trash/folders/delete-confirm/ui";
import useRecoverFolderPresenter from "@/entities/cases/storage/folders/recover/presenter";
import AddAccessForFolder from "@/features/folders/add-access-form/ui";
import { IBackupDto } from "@/shared/interface/backup";
import FolderZipCardItem from "@/features/folders/backup-card";
import useDeleteBackupPresenter from "@/entities/cases/backup/delete/presenter";

interface IFolderViewProps {
    folders: IGetStorageFolderDto[];
    backups?: IBackupDto[];
    onFolderDoubleClick?: (folderId: string) => void;
    variant?: "default" | "trash";
}

const FoldersViewWidget: React.FC<IFolderViewProps> = ({
                                                         folders,
                                                         onFolderDoubleClick,
                                                         variant = "default",
                                                           backups = [],
                                                     }) => {
    const { handleRecoverFolder } = useRecoverFolderPresenter();
    const { handleDeleteBackup } = useDeleteBackupPresenter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddAccessModalOpen, setIsAddAccessModalOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
    const handleMoveToTrashClick = (folderId: string) => {
        setSelectedFolderId(folderId);
        setIsModalOpen(true);
    };
    const handleAddAccessClick = (folderId: string) => {
        setSelectedFolderId(folderId);
        setIsAddAccessModalOpen(true);
    };
    const handleDeleteFolderClick = (folderId: string) => {
        setSelectedFolderId(folderId);
        setIsDeleteModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsDeleteModalOpen(false);
        setIsModalOpen(false);
        setIsAddAccessModalOpen(false);
        setSelectedFolderId(null);
    };

    const handleFolderClick = (folderId: string) => () => {
        if (onFolderDoubleClick) {
            onFolderDoubleClick(folderId);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-4 gap-8 w-[1227px]">
                {backups.map((backup) => (
                    <div key={backup.id}>
                        <FolderZipCardItem backup={backup} onDeleteClick={handleDeleteBackup}/>
                    </div>
                ))}
                {folders.map((folder) => (
                    <div key={folder.id} onDoubleClick={handleFolderClick(folder.id)}>
                        <FolderCardItem
                            folder={folder}
                            variant={variant}
                            onAddAccessClick={handleAddAccessClick}
                            onMoveToTrashClick={handleMoveToTrashClick}
                            onDeleteClick={handleDeleteFolderClick}
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
            {isAddAccessModalOpen && selectedFolderId && (
                <AddAccessForFolder
                    isOpen={isAddAccessModalOpen}
                    onClose={handleCloseModal}
                    folderId={selectedFolderId}
                />
            )}
        </div>
    );
};

export default FoldersViewWidget;
