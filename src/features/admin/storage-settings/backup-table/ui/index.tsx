import React from 'react';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import useGetBackupsUseCase from '@/entities/cases/backup/get-backups/use-case';
import useDeleteBackupPresenter from '@/entities/cases/backup/delete/presenter';
import download from '@/shared/utils/download';
import styles from '../style';

const BackupList: React.FC = () => {
    const { data: backups } = useGetBackupsUseCase();
    const { handleDeleteBackup } = useDeleteBackupPresenter();

    if (!backups.length) {
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
                            <div className={styles.cell}>{item.backup_time}</div>
                            <div className={styles.cell}>{item.size}</div>
                            <div className={styles.actionButtons}>
                                <ButtonIcon
                                    icon="fluent:arrow-download-32-filled"
                                    onClick={() => download(item.path, item.title)}
                                />
                                <ButtonIcon
                                    icon="lucide:trash"
                                    onClick={() => handleDeleteBackup(item.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BackupList;
