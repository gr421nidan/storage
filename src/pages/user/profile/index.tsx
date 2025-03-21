import {ReactNode} from 'react';
import PageHeader from "@/shared/components/page-header";
import UserProfileForm from "@/features/user/update-profile-form/ui";


const UserProfilePage = (): ReactNode => {


    return (
        <div className="dark:text-white flex flex-col justify-center gap-[40px]">
            <PageHeader title="Личные данные"/>
            <div className="w-[1158px] h-[710px] bg-purple-gr rounded-[15px] border-3 border-purple-light">
                <UserProfileForm/>
            </div>
        </div>
    );
};

export default UserProfilePage;
