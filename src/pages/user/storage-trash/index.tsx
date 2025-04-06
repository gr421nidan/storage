import {ReactNode, useState} from 'react';
import SearchInput from "@/shared/components/search";
import ViewModeToggle from "@/shared/components/view-mode";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import emptyTrash from "@/assets/img-empty/empty_trash.png";
import emptyTrashDark from "@/assets/img-empty/empty_trash_dark.png"
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";
import FoldersView from "@/widgets/folders-view";
import FilesView from "@/widgets/files-view";
import CleaningTrashConfirm from "@/features/trash/cleaning-confirm/ui";

const StorageTrashPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [visibility, setVisibility] = useState({ files: true, folders: true });
    const [isClearTrashModalOpen, setIsClearTrashModalOpen] = useState(false);
    const { allFiles, folders } = useGetStorageFilesAndFoldersUseCase({
        search
    });
    const isEmpty = !folders.length && !allFiles.length;

    const toggleVisibility = (key: "files" | "folders") => {
        setVisibility(prev => ({ ...prev, [key]: !prev[key] }));
    };
    const openClearTrashModal = () => {
        setIsClearTrashModalOpen(true);
    };

    const closeClearTrashModal = () => {
        setIsClearTrashModalOpen(false);
    };
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[822px] h-[54px]" onSearch={setSearch}/>
                <div className="flex items-center gap-[35px]">
                    <div className="relative">
                        <ButtonIcon
                            icon="lucide:trash"
                            className={cn(buttonStyles({ variant: "base" }), "w-[301px] h-[52px]")}
                            onClick={openClearTrashModal}>
                            Очистить корзину
                        </ButtonIcon>
                    </div>
                    {isClearTrashModalOpen && (
                        <CleaningTrashConfirm
                            isOpen={isClearTrashModalOpen}
                            onClose={closeClearTrashModal}
                        />
                    )}
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode}/>
            </div>
            <div className="relative min-h-60 max-h-[560px] overflow-y-auto scrollbar">
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center mt-[100px] h-full">
                        <ImgThemeSwitcher
                            light={emptyTrash}
                            dark={emptyTrashDark}
                            alt="нет файлов"
                            className="w-[400px] h-[207px]"
                        />
                        <span className="text-[32px] mt-5">Ничего не найдено</span>
                    </div>
                ) : (
                    <>
                        {!!folders.length && (
                            <div>
                                <div
                                    className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]"
                                    onClick={() => toggleVisibility("folders")}
                                >
                                    <span>Все папки</span>
                                    <ButtonIcon
                                        icon="simple-line-icons:arrow-up"
                                        className={visibility.folders ? "rotate-90" : ""}
                                    />
                                </div>
                                {visibility.folders && (
                                    <FoldersView folders={folders} variant="trash" />
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
                                    onClick={() => toggleVisibility("files")}
                                >
                                    <span>Все файлы</span>
                                    <ButtonIcon
                                        icon="simple-line-icons:arrow-up"
                                        className={visibility.files ? "rotate-90" : ""}
                                    />
                                </div>
                                {visibility.files && (
                                    <>
                                        {viewMode === "list" && (
                                            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-6 px-[36px] py-[10px] text-center">
                                                <span className="text-left">Наименование</span>
                                                <span>Дата создания</span>
                                                <span>Дата удаления</span>
                                                <span>Размер файла</span>
                                                <span>Действия</span>
                                            </div>
                                        )}
                                        <FilesView files={allFiles} viewMode={viewMode} variant="trash" />
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

export default StorageTrashPage;