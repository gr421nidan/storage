import {ReactNode, useCallback, useState} from "react";
import {useParams} from "react-router-dom";
import FileRowItem from "@/features/files/file-row/ui";
import FolderCardItem from "@/features/folders/folder-card/ui";
import FolderHistory from "@/shared/components/folder-history";
import useUserAvailableFolderPresenter from "@/entities/cases/storage/folders/get-available-folder/presenter";
import EmptyState from "@/shared/components/empty-state";
import notFound from "@/assets/img-empty/not_found.png";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";
import styles from "./style";

const UserFolderViewPage = (): ReactNode => {
    const {folder_id} = useParams<{ folder_id: string }>();

    const {
        type,
        folder,
        folderFiles,
        folderFolders,
        openInitialFolder,
        openSubfolder,
        folderHistory,
        resetFolder,
        goBack,
        shouldLoadFolderContent,
    } = useUserAvailableFolderPresenter(folder_id!);

    const [isOpened, setIsOpened] = useState(false);
    const isEmpty = shouldLoadFolderContent && !folderFolders.length && !folderFiles.length;
    const handleOpenSubfolder = useCallback(
        (folderId: string) => {
            const subfolder = folderFolders.find((f) => f.id === folderId);
            if (subfolder) {
                openSubfolder(subfolder);
            }
        },
        [folderFolders, openSubfolder]
    );
    if (type === "error") {
        return <div>У вас нет доступа для просмотра!</div>;
    }

    if (type === "folder" && folder) {
        if (!isOpened) {
            return (
                <div
                    onDoubleClick={() => {
                        setIsOpened(true);
                        openInitialFolder();
                    }}
                >
                    <FolderCardItem folder={folder} variant="access"/>
                </div>
            );
        }

        return (
            <div>
                {folderHistory.length > 0 && (
                    <FolderHistory
                        folderHistory={folderHistory}
                        resetFolder={resetFolder}
                        goBack={goBack}
                        showRootLabel={false}
                    />
                )}
                <EmptyState
                    isEmpty={isEmpty}
                    emptyImage={{light: notFound, dark: notFoundDark}}
                    emptyText="Ничего не найдено"
                >
                    <div className={styles.container}>
                        <div className={styles.contentFolders}>
                            {folderFolders.map((subfolder) => (
                                <div key={subfolder.id} onDoubleClick={() => handleOpenSubfolder(subfolder.id)}>
                                    <FolderCardItem folder={subfolder} variant="access"/>
                                </div>
                            ))}
                        </div>
                        {folderFiles.length > 0 && (
                            <div className={styles.contentFiles}>
                                {folderFiles.map((f) => (
                                    <FileRowItem key={f.id} file={f} variant="access"/>
                                ))}
                            </div>
                        )}
                    </div>
                </EmptyState>
            </div>
        );
    }

    return null;
};

export default UserFolderViewPage;
