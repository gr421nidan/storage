import React, {useState} from 'react';
import {EGrantID, IGetUserDto} from "@/shared/type/admin";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {cardStyles, iconContainerStyles, iconStyles} from "@/features/admin/users-cards/style.ts";
import useBlockUserPresenter from "@/entities/cases/user-storage/block-user/presenter";
import useUnblockUserPresenter from "@/entities/cases/user-storage/unblock-user/presenter";
import useDeleteUserPresenter from "@/entities/cases/user-storage/delete-user/presenter";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";
import Modal from "@/shared/components/modals";
import Button from "@/shared/components/buttons/button";

interface IUserCardProps {
    user: IGetUserDto;
}

const UserCard: React.FC<IUserCardProps> = ({user}) => {
    const navigate = useNavigate();
    const fullName = `${user.surname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic[0] + '.' : ''}`;
    const userStatus = user.is_active ? 'Активный' : 'Неактивный';
    const userAccess = user.grant_id === EGrantID.FULL_ACCESS ? 'Полный доступ' : 'Просмотр';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {handleBlockUser} = useBlockUserPresenter();
    const {handleUnblockUser} = useUnblockUserPresenter();
    const {handleDeleteUser} = useDeleteUserPresenter();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const confirmDeleteUser = async () => {
        await handleDeleteUser(user.id);
        closeModal();

    };
    const handleUserClick = () => {
        console.log(user.id)
        navigate(ERouterPath.USER_LOGS.replace(':id_user', String(user.id)));
    };
    return (
        <div className={cardStyles}>
            <div className="flex">
                <span className="w-[275px] cursor-pointer text-blue-500 hover:underline" onClick={handleUserClick}>
                    {fullName}
                </span>
                <span className={`w-[220px] ${user.is_active ? "Активный" : "Неактивный"}`}>
        {userStatus}</span>
            </div>
            <span className="user-access">{userAccess}
            </span>
            <div className={iconContainerStyles}>
                <ButtonIcon icon="ci:edit-pencil-line-02" className={iconStyles}/>
                {user.is_active ? <ButtonIcon icon="iconamoon:lock-off-thin" className={iconStyles}
                                              onClick={() => handleBlockUser(user.id)}/> :
                    <ButtonIcon icon="iconamoon:lock-thin" className={iconStyles}
                                onClick={() => handleUnblockUser(user.id)}/>}
                <ButtonIcon icon="lucide:trash" className={iconStyles} onClick={openModal}/>
            </div>
            {isModalOpen && (
                <Modal  title="Удалить" className=" w-[655px]" onClose={closeModal}>
                    <div>
                        <p className='text-xl'>Вы уверены, что хотите удалить пользователя?</p>
                        <div className="text-center mt-[40px]">
                            <Button onClick={confirmDeleteUser} className="w-[190px] h-[52px]">Удалить</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default UserCard;
