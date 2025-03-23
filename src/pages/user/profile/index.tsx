import {ReactNode} from 'react';
import PageHeader from "@/shared/components/page-header";
import UserProfileForm from "@/features/user/update-profile-form/ui";
import GetUserPhotoProfile from "@/features/user/get-user-photo/ui";

const UserProfilePage = (): ReactNode => {
    return (
        <div className="dark:text-white flex flex-col gap-[42px]">
            <PageHeader title="Личные данные"/>
            <div className="flex flex-col  items-center">
                <div className="w-[1158px] h-[710px] bg-purple-gr rounded-[15px] border-3 border-purple-light flex px-[66px] py-[42px] justify-between">
                    <GetUserPhotoProfile/>
                    <UserProfileForm/>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
