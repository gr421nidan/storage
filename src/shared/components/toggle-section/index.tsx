import {ReactNode} from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IToggleSectionProps {
    type: "folders" | "files";
    visibility: { files: boolean; folders: boolean };
    toggleVisibility: (key: "files" | "folders") => void;
    content: ReactNode;
}

const ToggleSection: React.FC<IToggleSectionProps> = ({type, visibility, toggleVisibility, content}) => {
    return (
        <div>
            <div
                className="flex items-center cursor-pointer gap-2 text-xl mb-[15px]"
                onClick={() => toggleVisibility(type)}>
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