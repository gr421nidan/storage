import {ReactNode, useState} from 'react';
import SearchInput from "@/shared/components/search";
import ViewModeToggle from "@/shared/components/view-mode";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import emptyTrash from "@/assets/img-empty/empty_trash.png";
import emptyTrashDark from "@/assets/img-empty/empty_trash_dark.png"
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

const StorageTrashPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[822px] h-[54px]" onSearch={setSearch}/>
                <div className="flex items-center gap-[35px]">
                    <div className="relative">
                       <ButtonIcon icon="lucide:trash" className={cn(buttonStyles({variant: "base"}),"w-[301px] h-[52px]")}>Очистить корзину</ButtonIcon>
                    </div>
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode}/>
            </div>
            <div className="relative max-h-[560px] overflow-y-auto scrollbar ">
                <div className="flex flex-col items-center justify-center mt-[100px] h-full">
                    <ImgThemeSwitcher
                        light={emptyTrash}
                        dark={emptyTrashDark}
                        alt="нет файлов"
                        className="w-[400px] h-[207px]"
                    />
                    <span className="text-[32px] mt-5">Ничего не найдено</span>
                </div>
            </div>
        </div>
    );
};

export default StorageTrashPage;
