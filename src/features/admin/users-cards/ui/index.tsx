import React, { useState } from 'react';
import { IGetUserDto } from "@/shared/interface/admin";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import styles from "../style";
import useBlockUserPresenter from "@/entities/cases/user-storage/block-user/presenter";
import useUnblockUserPresenter from "@/entities/cases/user-storage/unblock-user/presenter";
import ERouterPath from "@/shared/common/enum/router";
import { useNavigate } from "react-router-dom";
import DeleteUserConfirm from "@/features/admin/delete-user-confirm/ui";
import UpdateUserGrants from "@/features/admin/update-grant-user/ui";
import { EGrantID } from "@/shared/enum/admin";

interface IUserCardProps {
    user: IGetUserDto;
}

const UserCard: React.FC<IUserCardProps> = ({ user }) => {
    const navigate = useNavigate();
    const fullName = `${user.surname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic[0] + '.' : ''}`;
    const userStatus = user.is_active ? 'Активный' : 'Неактивный';
    const userAccess = user.grant_id === EGrantID.FULL_ACCESS ? 'Полный доступ' : 'Просмотр';
    const { handleBlockUser } = useBlockUserPresenter();
    const { handleUnblockUser } = useUnblockUserPresenter();

    const [isDeleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
    const [isUpdateUserGrantModalOpen, setUpdateUserGrantModalOpen] = useState(false);

    const handleUserClick = () => {
        navigate(ERouterPath.USER_LOGS.replace(':id_user', String(user.id)));
    };

    return (
        <div className={styles.card}>
            <div className={styles.nameAndStatus}>
        <span className={styles.name} onClick={handleUserClick}>
          {fullName}
        </span>
                <span className={styles.status}>{userStatus}</span>
            </div>

            <span className={styles.access}>{userAccess}</span>

            <div className={styles.iconContainer}>
                <ButtonIcon
                    icon="ci:edit-pencil-line-02"
                    className={styles.icon}
                    onClick={() => setUpdateUserGrantModalOpen(true)}
                />
                {user.is_active ? (
                    <ButtonIcon
                        icon="iconamoon:lock-off-light"
                        className={styles.icon}
                        onClick={() => handleBlockUser(user.id)}
                    />
                ) : (
                    <ButtonIcon
                        icon="iconamoon:lock-light"
                        className={styles.icon}
                        onClick={() => handleUnblockUser(user.id)}
                    />
                )}
                <ButtonIcon
                    icon="lucide:trash"
                    className={styles.icon}
                    onClick={() => setDeleteConfirmModalOpen(true)}
                />
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
