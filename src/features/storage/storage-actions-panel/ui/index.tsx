import React, {useState} from "react";
import FilesUpload from "@/features/files/uploud-files/ui";
import CreateFolder from "@/features/folders/add-folder/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import FiltersFilesPopupMenu from "@/features/files/filters-files/ui";

const StorageActionsPanel: React.FC = () => {
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false); // Состояние для открытия Popup с фильтром

    const handleFilterPopupToggle = () => {
        setIsFilterPopupOpen((prev) => !prev); // Переключаем состояние
    };
    return (
        <div className="flex items-center justify-between px-[35px] py-[26px] border-2 border-purple-light rounded-[15px] bg-gr-blocks">
            <div className="flex items-center gap-[32px]">
                <FilesUpload />
                <CreateFolder />
            </div>
            <div className="flex flex-col items-center gap-[29px]">
                <ButtonIcon icon="simple-line-icons:arrow-up" className="h-[52px] w-[248px] font-light"  onClick={handleFilterPopupToggle}>Фильтрация</ButtonIcon>
                <ButtonIcon icon="simple-line-icons:arrow-up" className="h-[52px] w-[248px] font-light">Сортировка</ButtonIcon>
            </div>
            <FiltersFilesPopupMenu
                isOpen={isFilterPopupOpen}
                onClose={handleFilterPopupToggle}
                onApply={(filters) => {
                    console.log(filters);
                }}
                onReset={() => {
                    console.log("Filters reset");
                }}
            />
        </div>
    );
};

export default StorageActionsPanel;