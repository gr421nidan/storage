import {ReactNode, useState} from "react";
import {useParams} from "react-router-dom";
import useGetUserLogsUseCase from "@/entities/cases/user-storage/get-user-logs/use-case";
import LogsCard from "@/features/admin/user-logs/ui";
import SearchInput from "@/shared/components/search";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import defaultAvatar from "@/assets/default-avatar.png";
import {BUCKET_BASE_URL} from "@/shared/config";
import PageHeader from "@/shared/components/page-header";
import Button from "@/shared/components/buttons/button";
import FiltersUserLogsPopupMenu from "@/features/admin/filters-logs/ui";
import AutomaticClearingPopupMenu from "@/features/admin/automatic-cleaning/ui";
import {IFiltersLogsPort} from "@/shared/interface/admin";
import DeleteLogsUserConfirm from "@/features/admin/delete-user-logs-confirm/ui";
import styles from "./style";

const StorageUserLogsPage = (): ReactNode => {
    const {id_user = ""} = useParams<{ id_user: string }>();
    const [filters, setFilters] = useState<IFiltersLogsPort>({});
    const {data} = useGetUserLogsUseCase(id_user, filters);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isAutomaticClearingOpen, setIsAutomaticClearingOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    if (!data) return <div>Нет данных</div>;
    const {user, logs} = data;
    const isDisabled = logs.length === 0;
    const fullName = `${user.surname} ${user.firstname} ${user.patronymic ?? ""}`.trim();
    const userPhoto = user.img ? `${BUCKET_BASE_URL}${user.img}` : defaultAvatar;
    const handleSearch = (value?: string) => {
        setFilters((prev) => ({...prev, search: value ?? ""}));
    };
    const handleOpenFilter = () => {
        setIsFilterOpen(true);
    };
    const handleCloseFilter = () => {
        setIsFilterOpen(false);
    };
    const handleOpenAutomaticClearing = () => {
        setIsAutomaticClearingOpen(true);
    };

    const handleCloseAutomaticClearing = () => {
        setIsAutomaticClearingOpen(false);
    };
    const handleOpenDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };
    return (
        <>
            <PageHeader className="mb-4">
                <div className={styles.header}>
                    <h2>Пользователи</h2>
                    <div className={styles.headerActions}>
                        <div className={styles.popupWrapper}>
                            <Button className="w-[257px] h-[52px] text-xl" onClick={handleOpenAutomaticClearing}>
                                Автоматическая очистка
                            </Button>
                            {isAutomaticClearingOpen && (
                                <AutomaticClearingPopupMenu
                                    isOpen={isAutomaticClearingOpen}
                                    onClose={handleCloseAutomaticClearing}
                                    userId={user.id}
                                />
                            )}
                        </div>
                        <Button
                            className="w-[255px] h-[52px] text-xl"
                            disabled={isDisabled}
                            onClick={handleOpenDeleteModal}
                        >
                            Очистить историю
                        </Button>
                    </div>
                </div>
            </PageHeader>

            <div className={styles.pageWrapper}>
                <div className={styles.topControls}>
                    <SearchInput
                        placeholder="Поиск по названию папок и файлов"
                        className={styles.searchInput}
                        onSearch={handleSearch}
                    />
                    <div className={styles.popupWrapper}>
                        <ButtonIcon
                            icon="solar:alt-arrow-down-outline"
                            className={styles.filterButton}
                            onClick={handleOpenFilter}
                        >
                            Фильтрация
                        </ButtonIcon>
                        {isFilterOpen && (
                            <FiltersUserLogsPopupMenu
                                isOpen={isFilterOpen}
                                onClose={handleCloseFilter}
                                onApply={(newFilters) => {
                                    setFilters((prev) => ({ ...prev, ...newFilters }));
                                    handleCloseFilter();
                                }}
                                onReset={() => {
                                    setFilters({});
                                    handleCloseFilter();
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className={styles.userInfo}>
                    <img src={userPhoto} alt="avatar" className={styles.avatar} />
                    <h2 className={styles.userName}>{fullName}</h2>
                </div>

                <div className={styles.logsHeader}>
                    <span className={styles.logsHeaderItem}>Действие</span>
                    <span>Время</span>
                    <span>Дата</span>
                </div>

                <div className={styles.logsContainer}>
                    {logs.length === 0 ? (
                        <div className={styles.emptyState}>Логи отсутствуют</div>
                    ) : (
                        logs.map((log) => <LogsCard key={log.id} log={log} />)
                    )}
                </div>
            </div>

            <DeleteLogsUserConfirm
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                userId={user.id}
            />
        </>
    );
};

export default StorageUserLogsPage;
