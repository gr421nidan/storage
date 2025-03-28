import {ReactNode} from 'react';
import UserProfileForm from "@/features/user/update-profile-form/ui";
import GetUserPhotoProfile from "@/features/user/get-user-photo/ui";
import {contentWrapperStyle, pageContainerStyle, profileStyle} from "@/pages/user/profile/style.ts";

const UserProfilePage = (): ReactNode => {
    return (
        <div className={pageContainerStyle}>
            <div className={contentWrapperStyle}>
                <div className={profileStyle}>
                    <GetUserPhotoProfile/>
                    <UserProfileForm/>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
