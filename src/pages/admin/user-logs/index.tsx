import React from "react";
import { useParams } from "react-router-dom";

import useGetUserLogsUseCase from "@/entities/cases/user-storage/get-user-logs/use-case";
import LogsCard from "@/features/admin/user-logs/ui";
//import SearchInput from "@/shared/components/search";
import ButtonIcon from "@/shared/components/buttons/button-icon";

import defaultAvatar from "@/assets/default-avatar.png";
import { BUCKET_BASE_URL } from "@/shared/config";

const StorageUserLogsPage: React.FC = () => {
    const { id_user } = useParams<{ id_user: string }>();
    //const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useGetUserLogsUseCase(id_user ?? "");

    if (isLoading) return <div>Загрузка логов...</div>;
    if (isError) return <div>Ошибка при загрузке логов</div>;
    if (!data) return <div>Нет данных</div>;

    const { user, logs } = data;
    const fullName = `${user.surname} ${user.firstname} ${user.patronymic ?? ""}`.trim();
    const userPhoto = user.img ? `${BUCKET_BASE_URL}${user.img}` : defaultAvatar;

    return (
        <div className="dark:text-white w-full max-w-[1400px] mx-auto flex flex-col gap-5 px-8 py-6">
            <div className="flex items-center justify-between">
                {/*<SearchInput*/}
                {/*    placeholder="Поиск по ключевым словам"*/}
                {/*    className="w-[1036px] h-[54px]"*/}
                {/*    onSearch={setSearch}*/}
                {/*/>*/}
                <ButtonIcon
                    icon="solar:alt-arrow-down-outline"
                    className="h-[54px] w-[248px]">
                    Фильтрация
                </ButtonIcon>
            </div>
            <div className="flex items-center gap-4">
                <img
                    src={userPhoto}
                    alt="avatar"
                    className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <h3 className="text-[40px] font-bold leading-none">{fullName}</h3>
            </div>
            <div className="flex justify-between items-center text-xl font-semibold mt-2 px-2">
                <span>Действие</span>
                <div className="flex gap-12">
                    <span>Время</span>
                    <span>Дата</span>
                </div>
            </div>

            {/* Список логов */}
            <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto scrollbar">
                {logs.length === 0 ? (
                    <div className="text-lg">Логи отсутствуют</div>
                ) : (
                    logs.map((log) => <LogsCard key={log.id} log={log} />)
                )}
            </div>
        </div>
    );
};

export default StorageUserLogsPage;
