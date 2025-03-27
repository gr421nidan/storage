import React, {useState} from "react";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import defaultAvatar from "@/assets/default-avatar.png";
import Button from "@/shared/components/buttons/button";
import UserPhotoUploadForm from "@/features/user/upload-user-photo-form/ui";
import {BUCKET_BASE_URL} from "@/shared/config";
import {containerPhotoStyle, profileImageStyle} from "@/features/user/get-user-photo/style.ts";

const GetUserPhotoProfile: React.FC = () => {
    const {data: userProfile} = useGetUserProfileUseCase();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const profileImage = userProfile?.img
        ? `${BUCKET_BASE_URL}${userProfile.img}`
        : defaultAvatar;
    return (
        <div className={containerPhotoStyle}>
            <img
                src={profileImage}
                alt="Фото профиля"
                className={profileImageStyle}
            />
            <Button className="w-[270px] h-13" onClick={() => setIsModalOpen(true)}>
                Изменить фото
            </Button>
            <UserPhotoUploadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default GetUserPhotoProfile;
