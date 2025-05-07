import React from 'react';
import ButtonIcon from '@/shared/components/buttons/button-icon';
import styles from '../style.ts';

interface IBackupItem {
    id: string;
    name: string;
    date: string;
    size: string;
}

const mockData: IBackupItem[] = [
    { id: '1', name: 'Первая копия', date: '20.03.2025', size: '15 Гб' },
    { id: '2', name: 'Первая копия', date: '20.03.2025', size: '15 Гб' },
    { id: '3', name: 'Первая копия', date: '20.03.2025', size: '15 Гб' },
    { id: '4', name: 'Первая копия', date: '20.03.2025', size: '15 Гб' },

];

const BackupList: React.FC = () => (
    <div className={styles.container}>
        <div className={styles.tableWrapper}>
            <div className={styles.headerRow}>
                <div className={styles.cellHeader}>Наименование</div>
                <div className={styles.cellHeader}>Дата создания</div>
                <div className={styles.cellHeader}>Объём</div>
                <div className={styles.cellHeader}>Действие</div>
            </div>

            {mockData.length === 0 ? (
                <div className="text-center py-6 text-black dark:text-white">
                    Пока резервные копии отсутствуют
                </div>
            ) : (
                <div className={styles.tableContent}>
                    {mockData.map((item) => (
                        <div key={item.id} className={styles.dataRow}>
                            <div className={styles.cell}>{item.name}</div>
                            <div className={styles.cell}>{item.date}</div>
                            <div className={styles.cell}>{item.size}</div>
                            <div className={styles.cellActions}>
                                <ButtonIcon icon="lucide:trash" />
                                <ButtonIcon icon="fluent:arrow-download-32-filled" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default BackupList;
