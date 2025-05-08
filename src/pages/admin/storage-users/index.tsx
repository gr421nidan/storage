import { ReactNode, useState } from "react";
import AddUserForm from "@/features/admin/add-users-form/ui";
import useGetUsersUseCase from "@/entities/cases/user-storage/get-users/use-case";
import UserCard from "@/features/admin/users-cards/ui";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import SearchInput from "@/shared/components/search";
import FiltersUsersPopupMenu from "@/features/admin/filters-users/ui";
import { EGrantID } from "@/shared/enum/admin";
import styles from "./style";

const StorageUsersPage = (): ReactNode => {
    const [search, setSearch] = useState<string | undefined>(undefined);
    const [grantId, setGrantId] = useState<EGrantID | undefined>(undefined);
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { data: users = [] } = useGetUsersUseCase({
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
        <div className={styles.page}>
            <div className={styles.contentBlock}>
                <AddUserForm />

                <div className={styles.topControls}>
                    <SearchInput
                        placeholder="Поиск по фамилии"
                        className="w-[1036px] h-[54px]"
                        onSearch={setSearch}
                    />
                    <div className={styles.filtersWrapper}>
                        <ButtonIcon
                            icon="simple-line-icons:arrow-down"
                            className="h-[54px] w-[248px]"
                            onClick={handlePopupToggle}
                        >
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

            <div className={styles.tableWrapper}>
                <div className={styles.tableHeader}>
                    <div className={styles.headerColumns}>
                        <p>ФИО</p>
                        <p>Статус</p>
                    </div>
                    <p>Права</p>
                </div>

                <div className={styles.tableScrollArea}>
                    <div className={styles.usersList}>
                        {users.length === 0 ? (
                            <p className={styles.noResults}>Ничего не найдено</p>
                        ) : (
                            users.map((user) => <UserCard key={user.id} user={user} />)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorageUsersPage;
