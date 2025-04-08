import { ReactNode } from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import styles from "./style";

interface IToggleSectionProps {
    type: "folders" | "files";
    visibility: { files: boolean; folders: boolean };
    toggleVisibility: (key: "files" | "folders") => void;
    content: ReactNode;
}

const ToggleSection: React.FC<IToggleSectionProps> = ({
                                                          type,
                                                          visibility,
                                                          toggleVisibility,
                                                          content,
                                                      }) => {
    const handleToggleVisibility = () => toggleVisibility(type);

    return (
        <div>
            <div
                className={styles.header}
                onClick={handleToggleVisibility}>
                <span>{type === "folders" ? "Все папки" : "Все файлы"}</span>
                <ButtonIcon
                    icon="simple-line-icons:arrow-up"
                    className={visibility[type] ? "rotate-90" : ""}
                />
            </div>
            {visibility[type] && content}
        </div>
    );
};

export default ToggleSection;
