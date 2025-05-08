import { ReactNode } from 'react';
import UserProfileForm from "@/features/user/update-profile-form/ui";
import GetUserPhotoProfile from "@/features/user/get-user-photo/ui";
import styles from "@/pages/user/profile/style.ts";

const UserProfilePage = (): ReactNode => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.profile}>
                    <GetUserPhotoProfile />
                    <UserProfileForm />
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
