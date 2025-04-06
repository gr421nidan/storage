import { ReactNode } from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import SearchInput from "@/shared/components/search";
import FiltersFilesPopupMenu from "@/features/files/filters-files/ui";
import SortingFilesPopupMenu from "@/features/files/sorting/ui";
import Button from "@/shared/components/buttons/button";
import ViewModeToggle from "@/shared/components/view-mode";
import styles from "./style";

import { IFiltersPort, ISortingPort } from "@/shared/interface/files";

type IViewMode = "grid" | "list";

interface IControlPanelProps {
    setSearch: (search: string | undefined) => void;
    isFilterPopupOpen: boolean;
    toggleFilterPopup: () => void;
    isSortingPopupOpen: boolean;
    toggleSortingPopup: () => void;
    handleApplyFilters: (newFilters: IFiltersPort) => void;
    resetFilters: () => void;
    handleApplySorting: (sorting: ISortingPort) => void;
    resetSorting: () => void;
    viewMode: IViewMode;
    setViewMode: (viewMode: IViewMode) => void;
    handleOpenUploadModal: () => void;
    handleOpenCreateModal: () => void;
}

const ControlPanel = ({
                          setSearch,
                          isFilterPopupOpen,
                          toggleFilterPopup,
                          isSortingPopupOpen,
                          toggleSortingPopup,
                          handleApplyFilters,
                          resetFilters,
                          handleApplySorting,
                          resetSorting,
                          viewMode,
                          setViewMode,
                          handleOpenUploadModal,
                          handleOpenCreateModal,
                      }: IControlPanelProps): ReactNode => {
    return (
        <div className={styles.controlPanelContainer}>
            <div className={styles.header}>
                <SearchInput
                    placeholder="Поиск материалов"
                    className="w-[591px] h-[54px]"
                    onSearch={setSearch}
                />
                <div className={styles.buttonContainer}>
                    <div className="relative">
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className={styles.buttonIcon}
                            onClick={toggleFilterPopup}>
                            Фильтрация
                        </ButtonIcon>
                        {isFilterPopupOpen && (
                            <div className={styles.popup}>
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
                            className={styles.buttonIcon}
                            onClick={toggleSortingPopup}>
                            Сортировка
                        </ButtonIcon>
                        {isSortingPopupOpen && (
                            <div className={styles.popup}>
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
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
            </div>
            <div className={styles.flexGap}>
                <Button className={styles.actionButton} onClick={handleOpenUploadModal}>
                    Загрузить файлы
                </Button>
                <Button className={styles.createFolderButton} onClick={handleOpenCreateModal}>
                    Создать папку
                </Button>
            </div>
        </div>
    );
};

export default ControlPanel;
