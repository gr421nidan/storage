import React, {useState} from "react";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFileListItemProps {
    file: IGetStorageFilesDto;
}

const FileListItem: React.FC<IFileListItemProps> = ({file}) => {
    const [isEditing, setIsEditing] = useState(false); // Флаг редактирования
    const [newTitle, setNewTitle] = useState(file.title); // Текущее название файла

    // Начало редактирования
    const handleEdit = () => setIsEditing(true);

    // Обновление названия
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    // Сохранение нового имени (Enter или потеря фокуса)
    const handleSave = () => {
        if (newTitle.trim() === "") {
            setNewTitle(file.title); // Если пусто — вернуть старое имя
        } else {
            console.log(`Файл переименован: ${newTitle}`); // Тут будет API-запрос
        }
        setIsEditing(false);
    };
    return (
        <div
            className="text-xl flex bg-gr-blocks items-center p-4 border-3 border-purple-light w-[1227px] h-[64px] px-[36px] rounded-[15px] ">
            <div className="w-[373px] flex" onDoubleClick={handleEdit}>
                {isEditing ? (
                    <input
                        className="w-fit p-1 border rounded "
                        value={newTitle}
                        onChange={handleChange}
                        onBlur={handleSave} // Сохранить при потере фокуса
                        onKeyDown={(e) => e.key === "Enter" && handleSave()} // Сохранить по Enter
                        autoFocus
                    />
                ) : (
                    <span
                        className="max-w-[250px] truncate"
                        title={file.title}>{file.title}</span>
                )}
            </div>
            <span className="w-[236px]">{file.created_at}</span>
            <span className="w-[224px]">{file.tag ? `#${file.tag}` : "-"}</span>
            <span className="w-[209px]">{formatFileSize(file.size)}</span>
            <div className="flex gap-[12px]">
                <ButtonIcon icon="akar-icons:arrow-down-left" className="w-6 h-6"/>
                <ButtonIcon icon="fluent:arrow-download-32-filled" className="w-6 h-6"/>
                <ButtonIcon icon="mingcute:link-2-line" className="w-6 h-6"/>
                <ButtonIcon icon="lucide:trash" className="w-6 h-6"/>
            </div>
        </div>
    );
};

export default FileListItem;