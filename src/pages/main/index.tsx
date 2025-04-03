import {ReactNode, useState} from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import FilesView from "@/features/files/files-view/ui";
import FoldersView from "@/features/folders/folders-view/ui";
import SearchInput from "@/shared/components/search";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";
import FiltersFilesPopupMenu from "@/features/files/filters-files/ui";
import Button from "@/shared/components/buttons/button";
import CreateFolderModal from "@/features/folders/add-folder-form/ui";
import FilesUploadModal from "@/features/files/upload-files-form/ui";
import SortingFilesPopupMenu from "@/features/files/sorting/ui";
import ViewModeToggle from "@/shared/components/view-mode";
import { format } from "date-fns";

const MainPage = (): ReactNode => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [showFiles, setShowFiles] = useState(true);
    const [showFolders, setShowFolders] = useState(true);
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [sortBy, setSortBy] = useState<string | undefined>(undefined);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(undefined);
    const [filters, setFilters] = useState<{ fileType?: string[]; created_at?: string }>({});
    const {allFiles, folders} = useGetStorageFilesAndFoldersUseCase({
        search,
        sortBy,
        sortOrder,
        fileType: filters.fileType,
        created_at: filters.created_at,
    });
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [isSortingPopupOpen, setIsSortingPopupOpen] = useState(false);
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenUpload, setIsOpenUpload] = useState(false);
    const [currentFolder, setCurrentFolder] = useState<string | undefined>(undefined);
    const handleToggleFiles = () => setShowFiles((prev) => !prev);
    const handleToggleFolders = () => setShowFolders((prev) => !prev);
    const handleOpenCreateModal = () => setIsOpenCreate(true);
    const handleOpenUploadModal = () => setIsOpenUpload(true);
    const handleCloseCreateModal = () => setIsOpenCreate(false);
    const handleCloseUploadModal = () => setIsOpenUpload(false);
    const handleApplySorting = (sorting: { sort_by: string, sort_order: "asc" | "desc" }) => {
        setSortBy(sorting.sort_by);
        setSortOrder(sorting.sort_order);
    };
    const handleFolderDoubleClick = (folderId: string) => {
        setCurrentFolder(folderId);
    };

    const handleBackToAllFolders = () => {
        setCurrentFolder(undefined);
    };
    const handleApplyFilters = (newFilters: { fileType?: string[]; date?: Date | null }) => {
        setFilters({
            fileType: newFilters.fileType,
            created_at: newFilters.date ? format(newFilters.date, "yyyy-MM-dd") : undefined,
        });
    };
    const toggleFilterPopup = () => setIsFilterPopupOpen((prev) => !prev);
    const toggleSortingPopup = () => setIsSortingPopupOpen((prev) => !prev);
    const resetFilters = () => setFilters({});
    const resetSorting = () => {
        setSortBy(undefined);
        setSortOrder(undefined);
    };
    const hasFiles = allFiles.length > 0;
    const hasFolders = folders.length > 0;
    const isEmpty = !hasFiles && !hasFolders;
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[591px] h-[54px]" onSearch={setSearch}/>
                <div className="flex items-center gap-[35px]">
                    <div className="relative">
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className="h-[52px] w-[248px]"
                            onClick={toggleFilterPopup}
                        >
                            Фильтрация
                        </ButtonIcon>
                        {isFilterPopupOpen && (
                            <div className="absolute left-0 top-full mt-2 z-50">
                                <FiltersFilesPopupMenu
                                    isOpen={isFilterPopupOpen}
                                    onClose={toggleFilterPopup}
                                    onApply={handleApplyFilters}
                                    onReset={resetFilters}
                                />
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className="h-[52px] w-[248px]"
                            onClick={toggleSortingPopup}
                        >
                            Сортировка
                        </ButtonIcon>
                        {isSortingPopupOpen && (
                            <div className="absolute left-0 top-full mt-2 z-50">
                                <SortingFilesPopupMenu
                                    isOpen={isSortingPopupOpen}
                                    onClose={toggleSortingPopup}
                                    onApply={handleApplySorting}
                                    onReset={resetSorting}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode}/>
            </div>
            <div className="flex gap-[35px]">
                <Button className="w-[295px] h-13" onClick={handleOpenUploadModal}>Загрузить файлы</Button>
                <Button className="w-[261px] h-13" onClick={handleOpenCreateModal}>Создать папку</Button>
            </div>

            <CreateFolderModal isOpen={isOpenCreate} onClose={handleCloseCreateModal} currentFolder={currentFolder}/>
            <FilesUploadModal isOpen={isOpenUpload} onClose={handleCloseUploadModal} currentFolder={currentFolder}/>
            <div className="relative max-h-[560px] overflow-y-auto scrollbar ">
                {currentFolder && (
                    <div className="flex items-center cursor-pointer gap-2 font-semibold mb-[15px]"
                         onClick={handleBackToAllFolders}>
                        <span>Моё хранилище  {folders.find(f => f.id === currentFolder)?.title}</span>
                    </div>)
                }
                {isEmpty ? (
                    <div className="text-center text-xl text-gray-500 mt-10">Ничего не найдено</div>
                ) : (
                    <>
                    {hasFolders && (
                        <div>
                            <div className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]"
                                 onClick={handleToggleFolders}>
                                <span>Все папки</span>
                                <ButtonIcon icon="simple-line-icons:arrow-up"
                                            className={showFolders ? "rotate-90" : ""}/>
                            </div>
                            {showFolders && <FoldersView folders={folders} onFolderDoubleClick={handleFolderDoubleClick}/>}
                        </div>
                    )}
                    {hasFolders && hasFiles && <div className="h-[2px] bg-purple w-[1227px] mt-[18px] mb-[10px]" />}
                        {hasFiles && (
                            <div>
                                <div className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]" onClick={handleToggleFiles}>
                                    <span>Все файлы</span>
                                    <ButtonIcon icon="simple-line-icons:arrow-up" className={showFiles ? "rotate-90" : ""} />
                                </div>
                                {showFiles && (
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
                                        <FilesView files={allFiles} viewMode={viewMode} />
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
