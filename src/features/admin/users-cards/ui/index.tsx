import React, {useState} from 'react';
import {EGrantID, IGetUserDto} from "@/shared/type/admin";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {cardStyles, iconContainerStyles, iconStyles} from "@/features/admin/users-cards/style.ts";
import useBlockUserPresenter from "@/entities/cases/user-storage/block-user/presenter";
import useUnblockUserPresenter from "@/entities/cases/user-storage/unblock-user/presenter";
import ConfirmModal from "@/shared/components/modals/modals-confirm";
import useDeleteUserPresenter from "@/entities/cases/user-storage/delete-user/presenter";

interface IUserCardProps {
    user: IGetUserDto;
}

const UserCard: React.FC<IUserCardProps> = ({user}) => {
    const fullName = `${user.surname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic[0] + '.' : ''}`;
    const userStatus = user.is_active ? 'Активный' : 'Неактивный';
    const userAccess = user.grant_id === EGrantID.FULL_ACCESS ? 'Полный доступ' : 'Просмотр';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleBlockUser } = useBlockUserPresenter();
    const { handleUnblockUser } = useUnblockUserPresenter();
    const { handleDeleteUser } = useDeleteUserPresenter();


    const openModal = () => {
        setIsModalOpen(true); // Открыть модальное окно
    };

    const closeModal = () => {
        setIsModalOpen(false); // Закрыть модальное окно
    };
    const confirmDeleteUser = async () => {
        try {
            await handleDeleteUser(user.id);
            console.log(`Пользователь с ID ${user.id} удалён`);
            closeModal(); // Закрыть модальное окно после успешного удаления
        } catch (error) {
            console.error("Ошибка при удалении пользователя:", error);
        }
    };
    return (
        <div className={cardStyles}>
            <div className="flex">
                <span className="w-[275px]">{fullName}</span>
                <span className={`w-[220px] ${user.is_active ? "Активный" : "Неактивный"}`}>
        {userStatus}</span>
            </div>
            <span className="user-access">{userAccess}
            </span>
            <div className={iconContainerStyles}>
                <ButtonIcon icon="ci:edit-pencil-line-02" className={iconStyles}/>
                {user.is_active ? <ButtonIcon icon="iconamoon:lock-off-thin" className={iconStyles}  onClick={() => handleBlockUser(user.id)} /> :
                    <ButtonIcon icon="iconamoon:lock-thin" className={iconStyles} onClick={() => handleUnblockUser(user.id)}/>}
                <ButtonIcon icon="lucide:trash" className={iconStyles} onClick={openModal} />
            </div>
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmDeleteUser}
                title="Подтвердить удаление"
                message={`Вы уверены, что хотите удалить пользователя ${fullName}?`}
            />
        </div>
    );
};

export default UserCard;
