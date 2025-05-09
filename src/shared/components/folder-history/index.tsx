import { FC } from "react";
import { Icon } from "@iconify/react";
import styles from "./style";

interface IFolderHistoryProps {
    folderHistory: { id: string; title: string }[];
    resetFolder: () => void;
    goBack: (index: number) => void;
    showRootLabel?: boolean;
}

const FolderHistory: FC<IFolderHistoryProps> = ({ folderHistory, resetFolder, goBack, showRootLabel = true, }) => {
    const handleGoBack = (index: number) => () => goBack(index);

    return (
        <div className={styles.historyContainer}>
            <span className={styles.historyButton}>
                 {showRootLabel && (
                     <>
                         <button onClick={resetFolder} className={styles.historyButton}>
                             Моё хранилище
                         </button>
                         <Icon icon="simple-line-icons:arrow-right" className={styles.arrowIcon} />
                     </>
                 )}
                {!showRootLabel && (
                    <>
                        <button onClick={resetFolder} className={styles.historyButton}>
                            В начало
                        </button>
                        <Icon icon="simple-line-icons:arrow-right" className={styles.arrowIcon} />
                    </>
                )}
                {folderHistory.map((folder, index) => (
                    <span key={folder.id} className={styles.historyButton}>
                        <button
                            onClick={handleGoBack(index)}
                            className={styles.folderButton}>
                            {folder.title}
                        </button>
                        {index < folderHistory.length - 1 && (
                            <Icon icon="simple-line-icons:arrow-right" className={styles.arrowIcon} />
                        )}
                    </span>
                ))}
            </span>
        </div>
    );
};

export default FolderHistory;
