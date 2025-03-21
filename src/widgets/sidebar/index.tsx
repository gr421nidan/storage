import React, {useEffect, useState} from "react";
import {
    circleProfileStyle,
    profileButtonStyle,
    sidebarContainerStyles,
} from "./style";
import {cn} from "@/shared/utils/cn";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import StorageChart from "@/shared/components/diagrams/storage-memory";
import RecentFiles from "@/shared/components/recent-files";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import {ERoleID} from "@/shared/type/auth";
import ERouterPath from "@/shared/common/enum/router";

interface ISidebarWidgetProps {
    className?: string;
}

const mockStorageData = {
    total: 15,
    used: 3,
};

const mockFiles = [
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "02.02.2025" },
    { name: "Название файла", date: "01.02.2025" },
];


const SidebarWidget: React.FC<ISidebarWidgetProps> = ({className}) => {
    const [storage, setStorage] = useState(mockStorageData);
    const [recentFiles, setRecentFiles] = useState(mockFiles.slice(0, 6));

    useEffect(() => {
        setStorage(mockStorageData);
        setRecentFiles(mockFiles.slice(0, 6));
    }, []);

    const { data } = useGetUserProfileUseCase();
    const userRole = data?.role_id;
    return (
        <div className={cn(sidebarContainerStyles, className)}>
            <div>
                <div className={profileButtonStyle}>
                    <Link to={ERouterPath.USER_PROFILE} className={circleProfileStyle}>
                        <Icon icon="lets-icons:user-light" width="30" height="30"/>
                    </Link>
                    <Link to={ERouterPath.USER_PROFILE} className="font-manrope font-light text-lg">Перейти в профиль</Link>
                </div>
                <div className="flex flex-col text-center dark:text-white">
                    <h3>Данные памяти</h3>
                    {userRole === ERoleID.USER ? (
                        <ButtonIcon
                            icon="charm:menu-kebab"
                            className="h-[30px] w-[25px] ml-auto text-black dark:text-white"
                        />
                    ) : (
                        <div className="mt-4" />
                    )}
                    <StorageChart used={storage.used} total={storage.total} />
                    <p className="mt-2 flex justify-end font-light">
                        Занято {storage.used}ГБ из {storage.total}ГБ
                    </p>
                </div>
            </div>
            <div className="ml-auto">
                <RecentFiles files={recentFiles} />
            </div>
        </div>
    );
};
export default SidebarWidget;