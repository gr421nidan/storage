import {ReactNode, useState} from 'react';
import Button from '@/shared/components/buttons/button';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import {BackupStatus} from '@/features/admin/storage-settings/backup-status/ui';
import BackupList from '@/features/admin/storage-settings/backup-table/ui';
import styles from './style';
import StorageSettingsForm from "@/features/admin/storage-settings/storege-form/ui";
import CleanupBackupsConfirm from "@/features/admin/storage-settings/cleanup-backups-confirm";
import useGetBackupsUseCase from "@/entities/cases/backup/get-backups/use-case";

const StorageSettingsPage = (): ReactNode => {
    const [isActive, setIsActive] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const {data: backups} = useGetBackupsUseCase();
    const isDisabled = !backups.length;
    const handleOpenDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };
    return (
        <>
            <StorageSettingsForm/>
            <div className={styles.sectionWrapper}>
                <div className={styles.sectionWrapp}>
                    <div className={styles.sectionTitle}>Состояние хранилища</div>
                    <div className={styles.stateWrapper}>
                        <div className={styles.stateText}>
                            {isActive ? 'Активно' : 'Неактивно'}
                        </div>
                        <ButtonIcon
                            icon={
                                isActive
                                    ? 'iconamoon:lock-light'
                                    : 'iconamoon:lock-off-light'
                            }
                            className={styles.iconStyles}
                            onClick={() => setIsActive(!isActive)}
                        />
                </div>
                </div>
                <div className={styles.divider}/>
            </div>
            <div>
                <div className={styles.verticalFlow}>
                    <BackupStatus/>

                    <div className={styles.row}>
            <span className={styles.label}>
              Следующее резервное копирование: 21.06.2025
            </span>
                        <Button className="h-[54px] w-[253px]">Создать копию</Button>
                    </div>

                    <div className={styles.divider}/>

                    <div className={styles.row}>
            <span className={styles.label}>
              Управление резервными копиями
            </span>
                        <Button className="h-[54px] w-[415px]" onClick={handleOpenDeleteModal} disabled={isDisabled}>
                            Очистить список резервных копий
                        </Button>
                    </div>

                    <span className={styles.label}>
            Созданные резервные копии:
          </span>
                    <BackupList/>
                </div>
            </div>
            <CleanupBackupsConfirm
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
            />
        </>
    );
};

export default StorageSettingsPage;
