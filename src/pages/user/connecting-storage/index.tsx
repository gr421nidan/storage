import { ReactNode } from 'react';
import Storage from "@/assets/storage-img/connect-storage-light.png";
import StorageDark from "@/assets/storage-img/connect-storage-dark.png";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import ConnectStorageSteps from "@/features/storage/connect-storage-s3";
import styles from './style';

const ConnectingStoragePage = (): ReactNode => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ImgThemeSwitcher
                    light={Storage}
                    dark={StorageDark}
                    alt="Подключение s3"
                />
                <ConnectStorageSteps />
            </div>
        </div>
    );
};

export default ConnectingStoragePage;
