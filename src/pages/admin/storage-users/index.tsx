import { ReactNode, useState } from 'react';
import AddUserForm from "@/features/admin/add-users-form/ui";
import useGetUsersPresenter from "@/features/admin/users-cards/presenter";
import UserCard from "@/features/admin/users-cards/ui";
import SearchFilter from "@/features/search";
import { IGetUserDto } from "@/shared/type/admin";

const StorageUsersPage = (): ReactNode => {
    const { data } = useGetUsersPresenter();
    const [filteredUsers, setFilteredUsers] = useState<IGetUserDto[]>(data);

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
        <div>
            <AddUserForm />
            <SearchFilter
                onSearch={handleSearch}
                className="w-[1036px] h-[54px]"
                placeholder="Поиск по фамилии"
            />
            <div>
                <div className="user-list">
                    {filteredUsers.length === 0 ? (
                        <p>Нет результатов для поиска</p>
                    ) : (
                        filteredUsers.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default StorageUsersPage;
