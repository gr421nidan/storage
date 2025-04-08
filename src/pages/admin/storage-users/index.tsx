import { ReactNode, useState } from "react";
import AddUserForm from "@/features/admin/add-users-form/ui";
import useGetUsersUseCase from "@/entities/cases/user-storage/get-users/use-case";
import UserCard from "@/features/admin/users-cards/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import SearchInput from "@/shared/components/search";
import FiltersUsersPopupMenu from "@/features/admin/filters-users/ui";
import {EGrantID} from "@/shared/enum/admin";

const StorageUsersPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [grantId, setGrantId] = useState<EGrantID | undefined>(undefined);
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { data: users} = useGetUsersUseCase({
        search,
        grant_id: grantId,
        is_active: isActive,
    });
    const handlePopupToggle = () => {
        setIsPopupOpen((prevState) => !prevState);
    };
    const handleClose = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="dark:text-white flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[32px]">
                <AddUserForm />
                <div className="flex justify-between">
                    <SearchInput
                        placeholder="Поиск по фамилии"
                        className="w-[1036px] h-[54px]"
                        onSearch={setSearch}
                    />
                    <div className="relative">
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className="h-[54px] w-[248px]"
                            onClick={handlePopupToggle}>
                            Фильтрация
                        </ButtonIcon>
                        <FiltersUsersPopupMenu
                            isOpen={isPopupOpen}
                            onClose={handleClose}
                            onApply={(filters) => {
                                setGrantId(filters.access);
                                setIsActive(filters.activity);
                            }}
                            onReset={() => {
                                setGrantId(undefined);
                                setIsActive(undefined);
                            }}
                        />
                    </div>
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
                                <p className="text-lg flex justify-center">Ничего не найдено</p>
                            ) : (
                                users.map((user) => (
                                    <UserCard key={user.id} user={user} />
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
