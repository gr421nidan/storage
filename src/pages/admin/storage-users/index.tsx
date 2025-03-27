import {ReactNode, useState} from 'react';
import AddUserForm from "@/features/admin/add-users-form/ui";
import useGetUsersUseCase from "@/entities/cases/user-storage/get-users/use-case";
import UserCard from "@/features/admin/users-cards/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import PageHeader from "@/shared/components/page-header";
import SearchInput from "@/shared/components/search";

const StorageUsersPage = (): ReactNode => {
    const [search, setSearch] = useState<string>("");
    const {data: users} = useGetUsersUseCase(search);
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <PageHeader>
                <h2>Пользователи</h2>
            </PageHeader>
            <div className="flex flex-col gap-[32px]">
                <AddUserForm/>
                <div className="flex justify-between">
                    <SearchInput
                        placeholder="Поиск по фамилии"
                        className="w-[1036px] h-[54px]"
                        onSearch={setSearch}
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
                            {users.length === 0 ? (
                                <p className="text-lg  flex justify-center">Ничего не найдено</p>
                            ) : (
                                users.map((user) => (
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
