import React, {useState} from "react";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import defaultAvatar from "@/assets/default-avatar.png";
import Button from "@/shared/components/buttons/button";
import UserPhotoUploadForm from "@/features/user/upload-user-photo-form/ui";

const GetUserPhotoProfile: React.FC = () => {
    const {data: userProfile} = useGetUserProfileUseCase();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center gap-4">
            <img
                src={userProfile?.img || defaultAvatar}
                alt="Фото профиля"
                className="w-[315px] h-[315px] rounded-full border-2 border-purple-light dark:border-purple object-cover shadow-purple-custom"
            />
            <Button className="w-[270px] h-[52px]" onClick={() => setIsModalOpen(true)}>
                Изменить фото
            </Button>
            <UserPhotoUploadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default GetUserPhotoProfile;
