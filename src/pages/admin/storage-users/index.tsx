import {ReactNode, useEffect, useState} from 'react';
import AddUserForm from "@/features/admin/add-users-form/ui";
import useGetUsersUseCase from "@/entities/cases/user-storage/get-users/use-case";
import UserCard from "@/features/admin/users-cards/ui";
import SearchFilter from "@/features/search";
import {IGetUserDto} from "@/shared/type/admin";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import PageHeader from "@/shared/components/page-header";

const StorageUsersPage = (): ReactNode => {
    const {data} = useGetUsersUseCase();
    const [filteredUsers, setFilteredUsers] = useState<IGetUserDto[]>(data);

    useEffect(() => {
        if (data) {
            setFilteredUsers(data);
        }
    }, [data]);
    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredUsers(data);
            return;
        }
        const filtered = data.filter((user) =>
            user.surname.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <PageHeader title="Пользователи"/>
            <div className="flex flex-col gap-[32px]">
                <AddUserForm/>
                <div className="flex justify-between">
                    <SearchFilter
                        onSearch={handleSearch}
                        className="w-[1036px] h-[54px]"
                        placeholder="Поиск по фамилии"
                    />
                    <ButtonIcon icon="solar:alt-arrow-down-outline"
                                className="h-[54px] w-[248px]">Фильтрация</ButtonIcon>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-[183px] ml-[31px] ">
                        <div className="flex gap-[257px]">
                            <p>ФИО</p>
                            <p>Статус</p>
                        </div>
                        <p>Права</p>
                    </div>
                    <div className="overflow-y-auto max-h-[365px] scrollbar">
                        <div className="flex flex-col gap-6">
                            {filteredUsers.length === 0 ? (
                                <p className="text-lg  flex justify-center">Ничего не найдено</p>
                            ) : (
                                filteredUsers.map((user) => (
                                    <UserCard key={user.id} user={user}/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorageUsersPage;
