import { ReactNode, useState} from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import FilesView from "@/widgets/files-view";
import FoldersView from "@/widgets/folders-view";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";
import CreateFolderModal from "@/features/folders/add-folder-form/ui";
import FilesUploadModal from "@/features/files/upload-files-form/ui";
import { format } from "date-fns";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import notFound from "@/assets/img-empty/not_found.png";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";
import { Icon } from "@iconify/react";
import ControlPanel from "@/widgets/control-panel";
import useFolderNavigation from "@/shared/hooks/folder-navigation";
import { IFiltersPort, ISortingPort } from "@/shared/interface/files";

const MainPage = (): ReactNode => {
    const [query, setQuery] = useState<{
        search?: string;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
        fileType?: string[];
        created_at?: string;
    }>({});

    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [visibility, setVisibility] = useState({ files: true, folders: true });
    const [modalState, setModalState] = useState({ create: false, upload: false });
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [isSortingPopupOpen, setIsSortingPopupOpen] = useState(false);

    const { currentFolder, openFolder, resetFolder } = useFolderNavigation();

    const { allFiles, folders } = useGetStorageFilesAndFoldersUseCase({
        ...query,
        search: query.search,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
        fileType: query.fileType,
        created_at: query.created_at,
    });

    const isEmpty = !folders.length && !allFiles.length;

    const toggleVisibility = (key: "files" | "folders") => {
        setVisibility(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleApplyFilters = (newFilters: IFiltersPort) => {
        setQuery((prev) => ({
            ...prev,
            fileType: newFilters.fileType,
            created_at: newFilters.date ? format(newFilters.date, "yyyy-MM-dd") : undefined,
        }));
    };

    const handleApplySorting = (sorting: ISortingPort) => {
        setQuery((prev) => ({
            ...prev,
            sortBy: sorting.sort_by,
            sortOrder: sorting.sort_order,
        }));
    };

    const handleModalToggle = (modal: "create" | "upload", state: boolean) => {
        setModalState((prev) => ({ ...prev, [modal]: state }));
    };

    const toggleFilterPopup = () => setIsFilterPopupOpen((prev) => !prev);
    const toggleSortingPopup = () => setIsSortingPopupOpen((prev) => !prev);
    const resetFilters = () => setQuery((prev) => ({ ...prev, fileType: undefined, created_at: undefined }));
    const resetSorting = () => setQuery((prev) => ({ ...prev, sortBy: undefined, sortOrder: undefined }));

    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <ControlPanel
                setSearch={(search) => setQuery((prev) => ({ ...prev, search }))}
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
                {currentFolder && (
                    <div className="flex items-center cursor-pointer gap-2 font-semibold mb-[15px]" onClick={resetFolder}>
                        <span className="flex items-center gap-2">
                            Моё хранилище
                            <Icon icon="simple-line-icons:arrow-right" width="15" height="15" />
                            {folders.find((f) => f.id === currentFolder)?.title}
                        </span>
                    </div>
                )}

                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center mt-[100px] h-full">
                        <ImgThemeSwitcher
                            light={notFound}
                            dark={notFoundDark}
                            alt="нет файлов"
                            className="w-[381px] h-[169px]"
                        />
                        <span className="text-[32px] mt-5">Ничего не найдено</span>
                    </div>
                ) : (
                    <>
                        {!!folders.length && (
                            <div>
                                <div
                                    className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]"
                                    onClick={() => toggleVisibility("folders")}>
                                    <span>Все папки</span>
                                    <ButtonIcon
                                        icon="simple-line-icons:arrow-up"
                                        className={visibility.folders ? "rotate-90" : ""}
                                    />
                                </div>
                                {visibility.folders && (
                                    <FoldersView folders={folders} onFolderDoubleClick={openFolder} variant="default" />
                                )}
                            </div>
                        )}

                        {!!folders.length && !!allFiles.length && (
                            <div className="h-[2px] bg-purple w-[1227px] mt-[18px] mb-[10px]" />
                        )}

                        {!!allFiles.length && (
                            <div>
                                <div
                                    className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]"
                                    onClick={() => toggleVisibility("files")}>
                                    <span>Все файлы</span>
                                    <ButtonIcon
                                        icon="simple-line-icons:arrow-up"
                                        className={visibility.files ? "rotate-90" : ""}/>
                                </div>
                                {visibility.files && (
                                    <>
                                        {viewMode === "list" && (
                                            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-6 px-[36px] py-[10px] text-center">
                                                <span className="text-left">Наименование</span>
                                                <span>Дата создания</span>
                                                <span>Пометки (Тэги)</span>
                                                <span>Размер файла</span>
                                                <span>Действия</span>
                                            </div>
                                        )}
                                        <FilesView files={allFiles} viewMode={viewMode} variant="default" />
                                    </>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;
