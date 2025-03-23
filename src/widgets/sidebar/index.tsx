import React, {useEffect, useState} from "react";
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

const mockStorageData = {
    total: 15,
    used: 3,
};

const mockFiles = [
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "02.02.2025"},
    {name: "Название файла", date: "01.02.2025"},
];

const SidebarWidget: React.FC = () => {
    const [storage, setStorage] = useState(mockStorageData);
    const [recentFiles, setRecentFiles] = useState(mockFiles.slice(0, 6));

    useEffect(() => {
        setStorage(mockStorageData);
        setRecentFiles(mockFiles.slice(0, 6));
    }, []);
    const {isAdmin} = useGetUserProfileUseCase();
    return (
        <div className={cn(sidebarContainerStyles)}>
            <div>
                <ProfileLink activeColorClass="text-purple"/>
                <div className={dataSidebarContainerStyles}>
                    <h3>Данные памяти</h3>
                    {!isAdmin ? (
                        <ButtonIcon
                            icon="charm:menu-kebab"
                            className={buttonIconStyle}
                        />) :
                        (<div className="mt-4"/>)}
                    <StorageChart used={storage.used} total={storage.total}/>
                    <p className={infoDiagramStyles}>
                        Занято {storage.used}ГБ из {storage.total}ГБ
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