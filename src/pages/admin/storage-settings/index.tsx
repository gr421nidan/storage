import {ReactNode, useState} from 'react';
import Button from '@/shared/components/buttons/button';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import {BackupStatus} from '@/features/admin/storage-settings/backup-status/ui';
import BackupList from '@/features/admin/storage-settings/backup-table/ui';
import styles from './style';
import StorageSettingsForm from "@/features/admin/storage-settings/storege-form/ui";

const StorageSettingsPage = (): ReactNode => {
    const [isActive, setIsActive] = useState(true);

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
            <div className={styles.pageContainer}>
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
                        <Button className="h-[54px] w-[415px]">
                            Очистить список резервных копий
                        </Button>
                    </div>

                    <span className={styles.label}>
            Созданные резервные копии:
          </span>
                    <BackupList/>
                </div>
            </div>
        </>
    );
};

export default StorageSettingsPage;
