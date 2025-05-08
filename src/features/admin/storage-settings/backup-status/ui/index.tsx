import { ReactNode, useState } from 'react';
import CheckboxInput from '@/shared/components/inputs/checkbox-input';
import styles from '../style';

export const BackupStatus = (): ReactNode => {
    const [isActive, setIsActive] = useState(true);

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
                        onChange={() => setIsActive(true)}
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
                        onChange={() => setIsActive(false)}
                        className={styles.radioInput}
                    />
                    Неактивно
                </label>
            </div>
        </div>
    );
};
