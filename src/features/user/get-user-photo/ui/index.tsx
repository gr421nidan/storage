import React, {useState} from "react";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import defaultAvatar from "@/assets/default-avatar.png";
import Button from "@/shared/components/buttons/button";
import UserPhotoUploadForm from "@/features/user/upload-user-photo-form/ui";
import {BUCKET_BASE_URL} from "@/shared/config";
import {containerPhotoStyle, profileImageStyle} from "@/features/user/get-user-photo/style.ts";
import {cn} from "@/shared/utils/cn";
import {buttonStyles} from "@/shared/components/buttons/style.ts";

const GetUserPhotoProfile: React.FC = () => {
    const {data: userProfile} = useGetUserProfileUseCase();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const profileImage = userProfile?.img
        ? `${BUCKET_BASE_URL}${userProfile.img}`
        : defaultAvatar;
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className={containerPhotoStyle}>
            <img
                src={profileImage}
                alt="Фото профиля"
                className={profileImageStyle}
            />
            <Button className={cn(buttonStyles({ variant: "baseSecondary" }), "w-[270px] h-13" )} onClick={handleOpenModal}>
                Изменить фото
            </Button>
            <UserPhotoUploadForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default GetUserPhotoProfile;
