import React, {useState} from 'react';
import {IGetUserDto} from "@/shared/interface/admin";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import {cardStyles, iconContainerStyles, iconStyles} from "@/features/admin/users-cards/style.ts";
import useBlockUserPresenter from "@/entities/cases/user-storage/block-user/presenter";
import useUnblockUserPresenter from "@/entities/cases/user-storage/unblock-user/presenter";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";
import DeleteUserConfirm from "@/features/admin/delete-user-confirm/ui";
import UpdateUserGrants from "@/features/admin/update-grant-user/ui";
import {EGrantID} from "@/shared/emum/admin";

interface IUserCardProps {
    user: IGetUserDto;
}

const UserCard: React.FC<IUserCardProps> = ({user}) => {
    const navigate = useNavigate();
    const fullName = `${user.surname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic[0] + '.' : ''}`;
    const userStatus = user.is_active ? 'Активный' : 'Неактивный';
    const userAccess = user.grant_id === EGrantID.FULL_ACCESS ? 'Полный доступ' : 'Просмотр';
    const {handleBlockUser} = useBlockUserPresenter();
    const {handleUnblockUser} = useUnblockUserPresenter();
    const [isDeleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
    const [isUpdateUserGrantModalOpen, setUpdateUserGrantModalOpen] = useState(false);

    const handleUserClick = () => {
        navigate(ERouterPath.USER_LOGS.replace(':id_user', String(user.id)));
    };
    return (
        <div className={cardStyles}>
            <div className="flex">
                <span className="w-[275px] cursor-pointer hover:text-purple" onClick={handleUserClick}>
                    {fullName}
                </span>
                <span className={`w-[220px] ${user.is_active ? "Активный" : "Неактивный"}`}>
        {userStatus}</span>
            </div>
            <span className="user-access">{userAccess}
            </span>
            <div className={iconContainerStyles}>
                <ButtonIcon icon="ci:edit-pencil-line-02" className={iconStyles}  onClick={() => setUpdateUserGrantModalOpen(true)} />
                {user.is_active ? <ButtonIcon icon="iconamoon:lock-off-light" className={iconStyles}
                                              onClick={() => handleBlockUser(user.id)}/> :
                    <ButtonIcon icon="iconamoon:lock-light" className={iconStyles}
                                onClick={() => handleUnblockUser(user.id)}/>}
                <ButtonIcon icon="lucide:trash" className={iconStyles} onClick={() => setDeleteConfirmModalOpen(true)}/>
            </div>
            <DeleteUserConfirm
                isOpen={isDeleteConfirmModalOpen}
                onClose={() => setDeleteConfirmModalOpen(false)}
                userId={user.id}
            />
            <UpdateUserGrants
                isOpen={isUpdateUserGrantModalOpen}
                onClose={() => setUpdateUserGrantModalOpen(false)}
                userId={user.id}
            />
        </div>
    );
};

export default UserCard;
