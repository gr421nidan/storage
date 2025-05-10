import {ReactNode} from 'react';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import useGetBackupsUseCase from '@/entities/cases/backup/get-backups/use-case';
import useDeleteBackupPresenter from '@/entities/cases/backup/delete/presenter';
import download from '@/shared/utils/download';
import styles from '../style';

const BackupList = (): ReactNode => {
    const {data: backups} = useGetBackupsUseCase();
    const {handleDeleteBackup} = useDeleteBackupPresenter();
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
                    {!backups.length ? (
                        <p className="text-center text-xl py-4 text-black dark:text-white">
                            Пока резервные копии отсутствуют
                        </p>
                    ) : (
                        backups.map((item) => (
                            <div key={item.id} className={styles.dataRow}>
                                <div className={styles.cell}>{item.title}</div>
                                <div className={styles.cell}>{item.backup_time}</div>
                                <div className={styles.cell}>{item.size}</div>
                                <div className={styles.actionButtons}>
                                    <ButtonIcon
                                        icon="lucide:trash" className="w-5 h-5"
                                        onClick={() => handleDeleteBackup(item.id)}
                                    />
                                    <ButtonIcon
                                        icon="fluent:arrow-download-32-filled" className="w-5 h-5"
                                        onClick={() => download(item.path, item.title)}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default BackupList;
