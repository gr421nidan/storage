import { ReactNode, useState } from "react";
import PageHeader from "@/shared/components/page-header";
import SearchFilter from "@/features/search";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import FileView from "@/features/files/files-view/ui";
import useGetStorageFilesUseCase from "@/entities/cases/storage/get-files/use-case";

const MainPage = (): ReactNode => {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [showFiles, setShowFiles] = useState<boolean>(true);
    const { allFiles } = useGetStorageFilesUseCase();

    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <PageHeader title="Моё хранилище" />
            <div className="flex justify-between items-center mr-[17px]">
                <SearchFilter
                    onSearch={() => {}}
                    className="w-[421px] h-[54px]"
                    placeholder="Поиск материалов"
                />
                <div className="flex gap-2 items-center">
                    <div
                        className={`flex items-center justify-center ${
                            viewMode === "grid"
                                ? "w-[61px] h-[58px] bg-purple-gr rounded-[15px] border-2 border-purple-light"
                                : ""
                        }`}
                    >
                        <ButtonIcon
                            icon="proicons:grid"
                            className={`w-[37px] h-[37px] ${
                                viewMode === "grid"
                                    ? "dark:text-white text-purple"
                                    : "text-purple-light dark:text-purple"
                            }`}
                            onClick={() => setViewMode("grid")}
                        />
                    </div>
                    <div
                        className={`flex items-center justify-center ${
                            viewMode === "list"
                                ? "w-[61px] h-[58px] bg-purple-gr rounded-[15px] border-2 border-purple-light"
                                : ""
                        }`}
                    >
                        <ButtonIcon
                            icon="iconoir:menu"
                            className={`w-[32px] h-[30px] ${
                                viewMode === "list"
                                    ? "dark:text-white text-purple w-[32px] h-[35px]"
                                    : "text-purple-light dark:text-purple"
                            }`}
                            onClick={() => setViewMode("list")}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="flex items-center cursor-pointer gap-2 text-xl font-semibold mb-[15px]"
                    onClick={() => setShowFiles(!showFiles)}
                >
                    <span>Все файлы</span>
                    <ButtonIcon
                        icon={showFiles ? "mdi:chevron-down" : "mdi:chevron-right"}
                        className="text-2xl"
                    />
                </div>
                <div className="overflow-y-auto max-h-[350px] scrollbar">
                    {showFiles && (
                        <div>
                            {viewMode === "list" && (
                                <div className="flex justify-between w-[1227px] px-[36px]  mb-[15px]">
                                    <span className="w-[275px]">Наименование</span>
                                    <span className="w-[130px]">Дата создания</span>
                                    <span className="w-[140px]">Пометки (Тэги)</span>
                                    <span className="w-[110px]">Размер файла</span>
                                    <span className="w-[140px]">Действия</span>
                                </div>
                            )}
                            <div className={`${viewMode === "list" ? "w-[1227px]" : "w-[1033px]"}`}>
                                <FileView files={allFiles} viewMode={viewMode} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
