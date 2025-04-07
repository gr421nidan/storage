import { ReactNode, useState } from "react";
import FilesView from "@/widgets/files-view";
import FoldersView from "@/widgets/folders-view";
import CreateFolderModal from "@/features/folders/add-folder-form/ui";
import FilesUploadModal from "@/features/files/upload-files-form/ui";
import notFound from "@/assets/img-empty/not_found.png";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";
import ControlPanel from "@/widgets/control-panel";
import useGetStorageFilesAndFoldersPresenter from "@/entities/cases/storage/get-folders-and-files/presenter";
import FilesRowHeaders from "@/shared/components/files-row-header";
import EmptyState from "@/shared/components/empty-state";
import ToggleSection from "@/shared/components/toggle-section";
import FolderHistory from "@/shared/components/folder-history";
import { containerStyles, scrollContainerStyles, dividerStyles } from "./style";

const MainPage = (): ReactNode => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [visibility, setVisibility] = useState({ files: true, folders: true });
    const [modals, setModals] = useState({ create: false, upload: false });
    const [popups, setPopups] = useState({ filter: false, sorting: false });

    const {
        currentFolder,
        openFolder,
        resetFolder,
        goBack,
        files,
        folders,
        folderHistory,
        setParams,
        handleApplyFilters,
        handleApplySorting,
        resetFilters,
        resetSorting,
    } = useGetStorageFilesAndFoldersPresenter();

    const isEmpty = !folders.length && !files.length;
    const hasFolders = !!folders.length;
    const hasFiles = !!files.length;
    const showDivider = hasFolders && hasFiles;

    const toggleVisibility = (key: "files" | "folders") => {
        setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleModalToggle = (modal: "create" | "upload", state: boolean) => {
        setModals((prev) => ({ ...prev, [modal]: state }));
    };

    const togglePopup = (type: "filter" | "sorting") => {
        setPopups((prev) => ({ ...prev, [type]: !prev[type] }));
    };
    const handleFolderDoubleClick = (folderId: string) => {
        const folder = folders.find((f) => f.id === folderId);
        if (folder) openFolder(folder.id, folder.title);
    };
    const renderFolderSection = () => (
        <ToggleSection
            type="folders"
            visibility={visibility}
            toggleVisibility={toggleVisibility}
            content={
                <FoldersView
                    folders={folders}
                    onFolderDoubleClick={handleFolderDoubleClick}
                    variant="default"
                />
            }
        />
    );

    const renderFileSection = () => (
        <ToggleSection
            type="files"
            visibility={visibility}
            toggleVisibility={toggleVisibility}
            content={
                <>
                    <FilesRowHeaders viewMode={viewMode} variant="default" />
                    <FilesView files={files} viewMode={viewMode} variant="default" />
                </>
            }
        />
    );

    return (
        <div className={containerStyles}>
            <ControlPanel
                setSearch={(search) => setParams((prev) => ({ ...prev, search }))}
                isFilterPopupOpen={popups.filter}
                toggleFilterPopup={() => togglePopup("filter")}
                isSortingPopupOpen={popups.sorting}
                toggleSortingPopup={() => togglePopup("sorting")}
                handleApplyFilters={handleApplyFilters}
                resetFilters={resetFilters}
                handleApplySorting={handleApplySorting}
                resetSorting={resetSorting}
                viewMode={viewMode}
                setViewMode={setViewMode}
                handleOpenUploadModal={() => handleModalToggle("upload", true)}
                handleOpenCreateModal={() => handleModalToggle("create", true)}
            />
            <CreateFolderModal
                isOpen={modals.create}
                onClose={() => handleModalToggle("create", false)}
                currentFolder={currentFolder}
            />
            <FilesUploadModal
                isOpen={modals.upload}
                onClose={() => handleModalToggle("upload", false)}
                currentFolder={currentFolder}
            />
            <div className={scrollContainerStyles}>
                {folderHistory.length > 0 && (
                    <FolderHistory
                        folderHistory={folderHistory}
                        resetFolder={resetFolder}
                        goBack={goBack}
                    />
                )}
                <EmptyState
                    isEmpty={isEmpty}
                    emptyImage={{ light: notFound, dark: notFoundDark }}
                    emptyText="Ничего не найдено"
                    content={
                        <>
                            {hasFolders && renderFolderSection()}
                            {showDivider && <div className={dividerStyles} />}
                            {hasFiles && renderFileSection()}
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default MainPage;
