import {ReactNode} from 'react';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import styles from '../style.ts';
import useGetBackupsUseCase from "@/entities/cases/backup/get-backups/use-case";

const BackupList  = (): ReactNode => {
    const { data: backups } = useGetBackupsUseCase();
    if (!backups || backups.length === 0) {
        return (
            <div className="text-center py-6 text-black dark:text-white">
                Пока резервные копии отсутствуют
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.tableWrapper}>
                <div className={styles.headerRow}>
                    <div className={styles.cellHeader}>Наименование</div>
                    <div className={styles.cellHeader}>Дата создания</div>
                    <div className={styles.cellHeader}>Объём</div>
                    <div className={styles.cellHeader}>Действие</div>
                </div>

                <div className={styles.tableContent}>
                    {backups.map((item) => (
                        <div key={item.id} className={styles.dataRow}>
                            <div className={styles.cell}>{item.title}</div>
                            <div className={styles.cell}>
                                {item.backup_time}
                            </div>
                            <div className={styles.cell}>{item.size}</div>
                            <div className="flex gap-3">
                                 <ButtonIcon icon="lucide:trash" className="w-fit"/>
                                <ButtonIcon icon="fluent:arrow-download-32-filled" className="w-fit"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BackupList;
