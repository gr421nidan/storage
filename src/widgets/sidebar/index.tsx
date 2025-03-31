import React from "react";
import {
    dataSidebarContainerStyles, infoDiagramStyles,
    sidebarContainerStyles,
} from "./style";
import {cn} from "@/shared/utils/cn";
import StorageChart from "@/shared/components/diagrams/storage-memory";
import RecentFiles from "@/shared/components/recent-files";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import ProfileLink from "@/shared/components/profile-link";
import useGetStorageSizeUseCase from "@/entities/cases/storage/get-storage-size/use-case";
import ContextMenu from "@/shared/components/context-menu";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";

const SidebarWidget: React.FC = () => {
    const {data: storageData} = useGetStorageSizeUseCase();
    const {recentFiles} = useGetStorageFilesAndFoldersUseCase();
    const {data} = useGetUserProfileUseCase();
    const menuItems = [
        {label: "Резервное копирование", icon: "garden:reload-stroke-12"},
        {label: "Очистка диска", icon: "lucide:trash"},
        {label: "Подключение к S3", icon: "iconamoon:cloud-add"},
    ];
    return (
        <div className={cn(sidebarContainerStyles)}>
            <div>
                <ProfileLink activeColorClass="text-purple"/>
                <div className={dataSidebarContainerStyles}>
                    <h3>Данные памяти</h3>
                    {data?.isAdmin ? (<div className="flex flex-col items-end">
                                <ContextMenu withSeparator iconSize="h-[40px] w-[30px]" items={menuItems}/></div>
                        ) :
                        (<div className="mt-4"/>)}
                    <StorageChart used_size={storageData?.storageSizeInGB ?? 0} total_size={15}/>
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
