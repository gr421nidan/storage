import React from 'react';
import {EGrantID, IGetUserDto} from "@/shared/type/admin";

interface UserCardProps {
    user: IGetUserDto;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const fullName = `${user.surname} ${user.firstname[0]}. ${user.patronymic ? user.patronymic[0] + '.' : ''}`;
    const userStatus = user.is_active ? 'Активный' : 'Неактивный';
    const userAccess = user.grant_id === EGrantID.FULL_ACCESS ? 'Полный доступ' : 'Просмотр';

    return (
        <div className="user-card">
            <div className="user-card-header">
                <div className="user-info">
                    <h4>{fullName}</h4>
                    <p> {userStatus}</p>
                    <p>{userAccess}</p>
                </div>
                {/* Иконка замка */}
                {/*<div className="user-status-icon">*/}
                {/*    <FontAwesomeIcon icon={user.is_active ? faLockOpen : faLock} />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default UserCard;
