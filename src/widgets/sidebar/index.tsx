import {ReactNode, useState} from "react";
import {
    dataSidebarContainerStyles, infoDiagramStyles,
    sidebarContainerStyles,
} from "./style";
import StorageChart from "@/shared/components/diagrams/storage-memory";
import RecentFiles from "@/shared/components/recent-files";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";
import useGetStorageSizeUseCase from "@/entities/cases/storage/get-storage-size/use-case";
import ContextMenu from "@/shared/components/context-menu";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";
import DiskCleanupConfirm from "@/features/storage/confirm_disk_cleanup/ui";
import useCreateBackupPresenter from "@/entities/cases/backup/create/presenter";

const SidebarWidget = (): ReactNode => {
    const {data: storageData} = useGetStorageSizeUseCase();
    const {recentFiles} = useGetStorageFilesAndFoldersUseCase({});
    const {data} = useGetUserProfileUseCase();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {handleBackup} = useCreateBackupPresenter();
    const handleCleanupDiskClick = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const menuItems = [
        {label: "Резервное копирование", icon: "garden:reload-stroke-12", onClick: handleBackup},
        {label: "Очистка диска", icon: "lucide:trash", onClick: handleCleanupDiskClick},
    ];
    return (
        <div className={sidebarContainerStyles}>
            <div>
                <div className={dataSidebarContainerStyles}>
                    <h3>Данные памяти</h3>
                    {data?.isAdmin ? (<div className="mt-4"/>) : (<div className="flex flex-col items-end">
                            <ContextMenu withSeparator iconSize="h-[40px] w-[30px]" menuClassName="w-[364px] р-[163px]"
                                         items={menuItems}/></div>
                    )}
                    <StorageChart
                        used_size={storageData?.storageUsedSizeInGB ?? 0}
                        total_size={storageData?.storageSizeInGB ?? 0}
                    />
                    <p className={infoDiagramStyles}>
                        Занято {storageData?.storageUsedSizeInGB} ГБ из {storageData?.storageSizeInGB} ГБ
                    </p>
                </div>
            </div>
            {isModalOpen && (
                <DiskCleanupConfirm
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
            <div className="ml-auto">
                <RecentFiles files={recentFiles}/>
            </div>
        </div>
    );
};
export default SidebarWidget;
