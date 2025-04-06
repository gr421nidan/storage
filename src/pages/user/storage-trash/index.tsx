import { ReactNode, useState } from "react";
import SearchInput from "@/shared/components/search";
import ViewModeToggle from "@/shared/components/view-mode";
import emptyTrash from "@/assets/img-empty/empty_trash.png";
import emptyTrashDark from "@/assets/img-empty/empty_trash_dark.png";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "@/shared/components/buttons/style.ts";
import FoldersViewWidget from "@/widgets/folders-view";
import CleaningTrashConfirm from "@/features/trash/cleaning-confirm/ui";
import useGetTrashFilesAndFoldersUseCase from "@/entities/cases/storage/trash/get-files-and-folders/use-case";
import FilesViewWidget from "@/widgets/files-view";
import FilesRowHeaders from "@/shared/components/files-row-header";
import ToggleSection from "@/shared/components/toggle-section";
import EmptyState from "@/shared/components/empty-state";

const StorageTrashPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [visibility, setVisibility] = useState({ files: true, folders: true });
    const [isClearTrashModalOpen, setIsClearTrashModalOpen] = useState(false);
    const { files, folders } = useGetTrashFilesAndFoldersUseCase({ search });
    const isEmpty = !folders.length && !files.length;

    const toggleVisibility = (key: "files" | "folders") => {
        setVisibility(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const openClearTrashModal = () => setIsClearTrashModalOpen(true);
    const closeClearTrashModal = () => setIsClearTrashModalOpen(false);

    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[822px] h-[54px]" onSearch={setSearch} />
                <div className="flex items-center gap-[35px]">
                    <ButtonIcon
                        icon="lucide:trash"
                        className={cn(buttonStyles({ variant: "base" }), "w-[301px] h-[52px]")}
                        onClick={openClearTrashModal}>
                        Очистить корзину
                    </ButtonIcon>
                    {isClearTrashModalOpen && (
                        <CleaningTrashConfirm isOpen={isClearTrashModalOpen} onClose={closeClearTrashModal} />
                    )}
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
            </div>

            <EmptyState
                isEmpty={isEmpty}
                emptyText="Ничего не найдено"
                emptyImage={{ light: emptyTrash, dark: emptyTrashDark }}
                content={
                    <>
                        {!!folders.length && (
                            <ToggleSection
                                type="folders"
                                visibility={visibility}
                                toggleVisibility={toggleVisibility}
                                content={<FoldersViewWidget folders={folders} variant="trash" />}
                            />
                        )}

                        {!!folders.length && !!files.length && <div className="h-[2px] bg-purple w-[1227px] mt-[18px] mb-[10px]" />}

                        {!!files.length && (
                            <ToggleSection
                                type="files"
                                visibility={visibility}
                                toggleVisibility={toggleVisibility}
                                content={
                                    <>
                                        <FilesRowHeaders viewMode={viewMode} variant="trash" />
                                        <FilesViewWidget files={files} viewMode={viewMode} variant="trash" />
                                    </>
                                }
                            />
                        )}
                    </>
                }
            />
        </div>
    );
};

export default StorageTrashPage;
