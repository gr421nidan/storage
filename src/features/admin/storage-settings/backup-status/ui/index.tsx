import {ReactNode, useEffect, useState} from 'react';
import CheckboxInput from '@/shared/components/inputs/checkbox-input';
import styles from '../style';
import useGetStorageInfoUseCase from "@/entities/cases/user-storage/get-info/use-case";
import useUpdateBackupStatusPresenter from "@/entities/cases/backup/update-backup-status/presenter";

export const BackupStatus = (): ReactNode => {
    const {handleUpdateBackupStatus} = useUpdateBackupStatusPresenter();
    const {data} = useGetStorageInfoUseCase();

    const [isActive, setIsActive] = useState<boolean | null>(null);
    useEffect(() => {
        if (data?.backup_is_active !== undefined) {
            setIsActive(data.backup_is_active);
        }
    }, [data?.backup_is_active]);
    const handleChange = async (value: boolean) => {
        setIsActive(value);
        if (data?.id) {
            await handleUpdateBackupStatus({
                is_active: value
            });
        }
    };
    if (isActive === null) return null;
    return (
        <div className={styles.statusWrapper}>
            <p className={styles.statusTitle}>Статус резервного копирования:</p>
            <div className={styles.statusOptions}>
                <label className={styles.radioOption}>
                    <CheckboxInput
                        type="radio"
                        name="backupStatus"
                        value="active"
                        checked={isActive}
                        onChange={() => handleChange(true)}
                        className={styles.radioInput}
                    />
                    Активно
                </label>
                <label className={styles.radioOption}>
                    <CheckboxInput
                        type="radio"
                        name="backupStatus"
                        value="inactive"
                        checked={!isActive}
                        onChange={() => handleChange(false)}
                        className={styles.radioInput}
                    />
                    Неактивно
                </label>
            </div>
        </div>
    );
};
