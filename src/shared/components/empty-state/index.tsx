import { ReactNode } from "react";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import styles from "./style";

interface IEmptyStateProps {
    isEmpty: boolean;
    emptyImage: { light: string; dark: string };
    emptyText: string;
    content: ReactNode;
}

const EmptyState: React.FC<IEmptyStateProps> = ({isEmpty, emptyImage, emptyText, content}) => {
    return (
        <div className={styles.wrapper}>
            {isEmpty ? (
                <div className={styles.emptyContainer}>
                    <ImgThemeSwitcher
                        light={emptyImage.light}
                        dark={emptyImage.dark}
                        alt={emptyText}
                        className={styles.image}
                    />
                    <span className={styles.text}>{emptyText}</span>
                </div>
            ) : (
                <>{content}</>
            )}
        </div>
    );
};

export default EmptyState;
