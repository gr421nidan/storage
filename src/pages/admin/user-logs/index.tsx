import {ReactNode, useState} from "react";
import { useParams } from "react-router-dom";
import useGetUserLogsUseCase from "@/entities/cases/user-storage/get-user-logs/use-case";
import LogsCard from "@/features/admin/user-logs/ui";
import SearchInput from "@/shared/components/search";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import defaultAvatar from "@/assets/default-avatar.png";
import { BUCKET_BASE_URL } from "@/shared/config";
import PageHeader from "@/shared/components/page-header";
import Button from "@/shared/components/buttons/button";
import FiltersUserLogsPopupMenu from "@/features/admin/filters-logs/ui";
import useDeleteUserLogsPresenter from "@/entities/cases/logs-user/delete-user-logs/presenter";
import AutomaticClearingPopupMenu from "@/features/admin/automatic-cleaning/ui";
import {IFiltersLogsPort} from "@/shared/interface/admin";
const StorageUserLogsPage = (): ReactNode => {
    const { id_user = "" } = useParams<{ id_user: string }>();
    const [filters, setFilters] = useState<IFiltersLogsPort>({});
    const { data } = useGetUserLogsUseCase(id_user, filters);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isAutomaticClearingOpen, setIsAutomaticClearingOpen] = useState(false);
    const { handleDeleteUserLogs } = useDeleteUserLogsPresenter();
    if (!data) return <div>Нет данных</div>;

    const { user, logs } = data;
    const fullName = `${user.surname} ${user.firstname} ${user.patronymic ?? ""}`.trim();
    const userPhoto = user.img ? `${BUCKET_BASE_URL}${user.img}` : defaultAvatar;
    const handleSearch = (value?: string) => {
        setFilters((prev) => ({ ...prev, search: value ?? "" }));
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
    return (
        <>
            <PageHeader className="mb-4">
                <div className="flex justify-between items-center">
                    <h2>Пользователи</h2>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Button
                                className="w-[257px] h-[52px] text-xl"
                                onClick={handleOpenAutomaticClearing}
                            >
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
                        <Button className="w-[255px] h-[52px] text-xl" onClick={() => handleDeleteUserLogs(user.id)}>Очистить историю</Button>
                    </div>
                </div>
            </PageHeader>
            <div className="dark:text-white w-full max-w-[1400px] mx-auto flex flex-col gap-5 pb-6">
                <div className="flex items-center justify-between">
                    <SearchInput
                        placeholder="Поиск по названию папок и файлов"
                        className="w-[1036px] h-[54px]"
                        onSearch={handleSearch}
                    />
                    <div className="relative">
                        <ButtonIcon
                            icon="solar:alt-arrow-down-outline"
                            className="h-[54px] w-[248px]"
                            onClick={handleOpenFilter}>
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
                <div className="flex items-center gap-4">
                    <img
                        src={userPhoto}
                        alt="avatar"
                        className="w-[60px] h-[60px] rounded-full object-cover"
                    />
                    <h2 >{fullName}</h2>
                </div>
                <div className="grid grid-cols-[2.7fr_0.5fr_0.4fr] justify-between text-right mt-2 text-xl px-10 w-[1198px]">
                    <span className="text-left">Действие</span>
                    <span>Время</span>
                    <span>Дата</span>
                </div>
                <div className="flex flex-col gap-4 max-h-[530px] overflow-y-auto scrollbar w-[1280px]">
                    {logs.length === 0 ? (
                        <div className="text-lg">Логи отсутствуют</div>
                    ) : (
                        logs.map((log) => <LogsCard key={log.id} log={log} />)
                    )}
                </div>
            </div>
        </>
    );
};

export default StorageUserLogsPage;
