import {ReactNode, useState} from 'react';
import Button from '@/shared/components/buttons/button';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import {BackupStatus} from '@/features/admin/storage-settings/backup-status/ui';
import BackupList from '@/features/admin/storage-settings/backup-table/ui';
import StorageSettingsForm from '@/features/admin/storage-settings/starage-form/ui';
import CleanupBackupsConfirm from '@/features/admin/storage-settings/cleanup-backups-confirm/ui';
import BlockUnblockConfirm from '@/features/admin/storage-settings/block-unblock-confirm/ui';
import useGetBackupsUseCase from '@/entities/cases/backup/get-backups/use-case';
import useGetStorageInfoUseCase from '@/entities/cases/storage/get-info/use-case';
import useCreateBackupPresenter from '@/entities/cases/backup/create/presenter';
import styles from './style';
import useGetDateNextBackupUseCase from "@/entities/cases/backup/get-next-backup/use-case";

const StorageSettingsPage = (): ReactNode => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
    const {data: backups} = useGetBackupsUseCase();
    const {data: storageData} = useGetStorageInfoUseCase();
    const {handleBackup} = useCreateBackupPresenter();
    const { formattedDate } = useGetDateNextBackupUseCase();
    const isDisabled = !backups.length;
    const isActive = storageData?.is_active;
    return (
        <>
            <StorageSettingsForm/>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionTitle}>Состояние хранилища</div>
                <div className={styles.stateWrapper}>
                    <div className={styles.stateText}>
                        {isActive ? 'Активно' : 'Неактивно'}
                    </div>
                    <ButtonIcon
                        icon={isActive ? 'iconamoon:lock-off-light' : 'iconamoon:lock-light'}
                        className={styles.iconStyles}
                        onClick={() => setIsBlockModalOpen(true)}
                    />
                </div>
            </div>

            <div className={styles.verticalFlow}>
                <BackupStatus/>
                <div className={styles.row}>
                    <span className={styles.label}>Следующее резервное копирование: {formattedDate}</span>
                    <Button onClick={handleBackup} className="h-[54px] w-[253px]">
                        Создать копию
                    </Button>
                </div>
                <div className={styles.divider}/>
                <div className={styles.row}>
                    <span className={styles.label}>Управление резервными копиями</span>
                    <Button
                        onClick={() => setIsDeleteModalOpen(true)}
                        disabled={isDisabled}
                        className="h-[54px] w-[415px]"
                    >
                        Очистить список резервных копий
                    </Button>
                </div>
                <span className={styles.label}>Созданные резервные копии:</span>
                <BackupList/>
            </div>

            <CleanupBackupsConfirm isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}/>
            <BlockUnblockConfirm isOpen={isBlockModalOpen} onClose={() => setIsBlockModalOpen(false)}
                                 isActive={isActive}/>
        </>
    );
};

export default StorageSettingsPage;
