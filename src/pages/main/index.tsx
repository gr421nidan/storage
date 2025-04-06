import { ReactNode, useState } from "react";
import FilesView from "@/widgets/files-view";
import FoldersView from "@/widgets/folders-view";
import CreateFolderModal from "@/features/folders/add-folder-form/ui";
import FilesUploadModal from "@/features/files/upload-files-form/ui";
import notFound from "@/assets/img-empty/not_found.png";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";
import { Icon } from "@iconify/react";
import ControlPanel from "@/widgets/control-panel";
import useGetStorageFilesAndFoldersPresenter from "@/entities/cases/storage/get-folders-and-files/presenter";
import FilesRowHeaders from "@/shared/components/files-row-header";
import EmptyState from "@/shared/components/empty-state";
import ToggleSection from "@/shared/components/toggle-section";

const MainPage = (): ReactNode => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [visibility, setVisibility] = useState({ files: true, folders: true });
    const [modalState, setModalState] = useState({ create: false, upload: false });
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [isSortingPopupOpen, setIsSortingPopupOpen] = useState(false);
    const {
        currentFolder,
        openFolder,
        resetFolder,
        files,
        folders,
        setParams,
        handleApplyFilters,
        handleApplySorting,
        resetFilters,
        resetSorting,
        folderHistory,
    } = useGetStorageFilesAndFoldersPresenter();

    const isEmpty = !folders.length && !files.length;

    const toggleVisibility = (key: "files" | "folders") => {
        setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleModalToggle = (modal: "create" | "upload", state: boolean) => {
        setModalState((prev) => ({ ...prev, [modal]: state }));
    };

    const toggleFilterPopup = () => setIsFilterPopupOpen((prev) => !prev);
    const toggleSortingPopup = () => setIsSortingPopupOpen((prev) => !prev);

    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <ControlPanel
                setSearch={(search) => setParams((prev) => ({ ...prev, search }))}
                isFilterPopupOpen={isFilterPopupOpen}
                toggleFilterPopup={toggleFilterPopup}
                isSortingPopupOpen={isSortingPopupOpen}
                toggleSortingPopup={toggleSortingPopup}
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
                isOpen={modalState.create}
                onClose={() => handleModalToggle("create", false)}
                currentFolder={currentFolder}
            />

            <FilesUploadModal
                isOpen={modalState.upload}
                onClose={() => handleModalToggle("upload", false)}
                currentFolder={currentFolder}
            />

            <div className="relative min-h-60 max-h-[560px] overflow-y-auto scrollbar">
                {folderHistory.length > 0 && (
                    <div className="flex items-center cursor-pointer gap-2 font-semibold mb-[15px]">
                        <span className="flex items-center gap-2">
                            <button onClick={() => resetFolder()}>Моё хранилище</button>
                            <Icon icon="simple-line-icons:arrow-right" width="15" height="15" />
                            {folderHistory.map((folder, index) => (
                                <span key={folder.id} className="flex items-center gap-2">
                                    <button onClick={() => openFolder(folder.id, folder.title)}>
                                        {folder.title}
                                    </button>
                                    {index < folderHistory.length - 1 && (
                                        <Icon icon="simple-line-icons:arrow-right" width="15" height="15" />
                                    )}
                                </span>
                            ))}
                        </span>
                    </div>
                )}

                <EmptyState
                    isEmpty={isEmpty}
                    emptyImage={{ light: notFound, dark: notFoundDark }}
                    emptyText="Ничего не найдено"
                    content={
                        <>
                            <ToggleSection
                                type="folders"
                                visibility={visibility}
                                toggleVisibility={toggleVisibility}
                                content={
                                    <>
                                        {!!folders.length && (
                                            <FoldersView
                                                folders={folders}
                                                onFolderDoubleClick={(folderId) => {
                                                    const folder = folders.find((f) => f.id === folderId);
                                                    if (folder) {
                                                        openFolder(folder.id, folder.title);
                                                    }
                                                }}
                                                variant="default"
                                            />
                                        )}
                                    </>
                                }
                            />

                            {!!folders.length && !!files.length && (
                                <div className="h-[2px] bg-purple w-[1227px] mt-[18px] mb-[10px]" />
                            )}

                            <ToggleSection
                                type="files"
                                visibility={visibility}
                                toggleVisibility={toggleVisibility}
                                content={
                                    <>
                                        {!!files.length && (
                                            <>
                                                <FilesRowHeaders viewMode={viewMode} variant="default" />
                                                <FilesView files={files} viewMode={viewMode} variant="default" />
                                            </>
                                        )}
                                    </>
                                }
                            />
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default MainPage;
