import {ReactNode, useState} from 'react';
import SearchInput from "@/shared/components/search";
import ViewModeToggle from "@/shared/components/view-mode";
import Button from "@/shared/components/buttons/button";

const StorageTrashPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex justify-between items-center mr-[17px]">
                <SearchInput placeholder="Поиск материалов" className="w-[822px] h-[54px]" onSearch={setSearch}/>
                <div className="flex items-center gap-[35px]">
                    <div className="relative">
                       <Button className="w-[301px] h-[52px]">Очистить корзину</Button>
                    </div>
                </div>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode}/>
            </div>
            <div className="relative max-h-[560px] overflow-y-auto scrollbar ">
            </div>
        </div>
    );
};

export default StorageTrashPage;
