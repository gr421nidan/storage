import {ReactNode, useState} from 'react';
import PageHeader from "@/shared/components/page-header";
import SearchFilter from "@/features/search";
import ButtonIcon from "@/shared/components/buttons/button-icon";

const MainPage = (): ReactNode => {
    const handleSearch = (query: string) => {

    };
     const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <PageHeader title="Моё хранилище"/>
            <div className="flex justify-between items-center mr-[17px]">
                <SearchFilter
                    onSearch={handleSearch}
                    className="w-[421px] h-[54px]"
                    placeholder="Поиск материалов"
                />
                <div className="flex gap-2 items-center ">
                    <div  className={`flex items-center justify-center ${viewMode === "grid" ? "w-[61px] h-[58px]  bg-purple-gr rounded-[15px] border-2 border-purple-light" : ""}`}>
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
                    <div  className={`flex items-center justify-center ${viewMode === "list" ? "w-[61px] h-[58px]  bg-purple-gr rounded-[15px] border-2 border-purple-light" : ""}`}>
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
        </div>
    );
};

export default MainPage;
