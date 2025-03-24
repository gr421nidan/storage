import {ReactNode} from 'react';
import PageHeader from "@/shared/components/page-header";
import UserProfileForm from "@/features/user/update-profile-form/ui";
import GetUserPhotoProfile from "@/features/user/get-user-photo/ui";
import {contentWrapperStyle, pageContainerStyle, profileStyle} from "@/pages/user/profile/style.ts";

const UserProfilePage = (): ReactNode => {
    return (
        <div className={pageContainerStyle}>
            <PageHeader title="Личные данные"/>
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
