import React from "react";
import {
    buttonIconStyle, dataSidebarContainerStyles, infoDiagramStyles,
    sidebarContainerStyles,
} from "./style";
import {cn} from "@/shared/utils/cn";
import StorageChart from "@/shared/components/diagrams/storage-memory";
import RecentFiles from "@/shared/components/recent-files";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import ProfileLink from "@/shared/components/profile-link";
import useGetStorageSizeUseCase from "@/entities/cases/storage/get-storage-size/use-case";
import useGetStorageFilesUseCase from "@/entities/cases/storage/get-files/use-case";

const SidebarWidget: React.FC = () => {
    const { data: storageData } = useGetStorageSizeUseCase();
    const { recentFiles } = useGetStorageFilesUseCase();
    const {isAdmin} = useGetUserProfileUseCase();
    return (
        <div className={cn(sidebarContainerStyles)}>
            <div>
                <ProfileLink activeColorClass="text-purple"/>
                <div className={dataSidebarContainerStyles}>
                    <h3>Данные памяти</h3>
                    {isAdmin ? (
                            <ButtonIcon
                                icon="charm:menu-kebab"
                                className={buttonIconStyle}
                            />) :
                        (<div className="mt-4"/>)}
                    <StorageChart used_size={storageData?.storageSizeInGB ?? 0} total_size={15} />
                    <p className={infoDiagramStyles}>
                        Занято {storageData?.storageSizeInGB} ГБ из 15 ГБ
                    </p>
                </div>
            </div>
            <div className="ml-auto">
                <RecentFiles files={recentFiles}/>
            </div>
        </div>
    );
};
export default SidebarWidget;