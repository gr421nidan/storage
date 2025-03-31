import { ReactNode, useState } from "react";
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

const MainPage = (): ReactNode => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [showFiles, setShowFiles] = useState(true);
    const [showFolders, setShowFolders] = useState(true);
    const [search, setSearch] = useState("");
    const { allFiles, folders } = useGetStorageFilesAndFoldersUseCase(search);
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [isSortingPopupOpen, setIsSortingPopupOpen] = useState(false);
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenUpload, setIsOpenUpload] = useState(false);

    const handleToggleFiles = () => setShowFiles((prev) => !prev);
    const handleToggleFolders = () => setShowFolders((prev) => !prev);
    const handleToggleFilterPopup = () => setIsFilterPopupOpen((prev) => !prev);
    const handleToggleSortingPopup = () => setIsSortingPopupOpen((prev) => !prev);
    const handleOpenCreateModal = () => setIsOpenCreate(true);
    const handleOpenUploadModal = () => setIsOpenUpload(true);
    const handleCloseCreateModal = () => setIsOpenCreate(false);
    const handleCloseUploadModal = () => setIsOpenUpload(false);
    const handleUploadFiles = (uploadedFiles: File[]) => {
        console.log("Загруженные файлы:", uploadedFiles);
    };
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            {/* Поиск и фильтры */}
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[591px] h-[54px]" onSearch={setSearch} />
                <div className="flex items-center gap-[35px]">
                    <ButtonIcon icon="simple-line-icons:arrow-down" className="h-[52px] w-[248px]" onClick={handleToggleFilterPopup}>
                        Фильтрация
                    </ButtonIcon>
                    <ButtonIcon icon="simple-line-icons:arrow-down" className="h-[52px] w-[248px]" onClick={handleToggleSortingPopup}>
                        Сортировка
                    </ButtonIcon>
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
            </div>

            <FiltersFilesPopupMenu isOpen={isFilterPopupOpen} onClose={handleToggleFilterPopup} onApply={console.log} onReset={() => console.log("Filters reset")} />
            <SortingFilesPopupMenu isOpen={isSortingPopupOpen} onClose={handleToggleSortingPopup} onApply={console.log} onReset={() => console.log("Sorting reset")} />
            
            <div className="flex gap-[35px]">
                <Button className="w-[295px] h-13" onClick={handleOpenUploadModal}>Загрузить файлы</Button>
                <Button className="w-[261px] h-13" onClick={handleOpenCreateModal}>Создать папку</Button>
            </div>

            <CreateFolderModal isOpen={isOpenCreate} onClose={handleCloseCreateModal} />
            <FilesUploadModal isOpen={isOpenUpload} onClose={handleCloseUploadModal} onUpload={handleUploadFiles}/>
            <div className="relative max-h-[560px] overflow-y-auto scrollbar">
                <div>
                    <div className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]" onClick={handleToggleFolders}>
                        <span>Все папки</span>
                        <ButtonIcon icon="simple-line-icons:arrow-up" className={showFolders ? "rotate-90" : ""} />
                    </div>
                    {showFolders && <FoldersView folders={folders} />}
                </div>

                <div className="h-[2px] bg-purple w-[1227px] mt-[18px] mb-[10px]" />
                <div>
                    <div className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]" onClick={handleToggleFiles}>
                        <span>Все файлы</span>
                        <ButtonIcon icon="simple-line-icons:arrow-up" className={showFiles ? "rotate-90" : ""} />
                    </div>
                    {showFiles && (
                        <div>
                            {viewMode === "list" && (
                                <div className="flex justify-between w-[1227px] px-[36px] py-[10px]">
                                    <span className="w-[275px]">Наименование</span>
                                    <span className="w-[130px]">Дата создания</span>
                                    <span className="w-[140px]">Пометки (Тэги)</span>
                                    <span className="w-[110px]">Размер файла</span>
                                    <span className="w-[140px]">Действия</span>
                                </div>
                            )}
                            <FilesView files={allFiles} viewMode={viewMode} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
