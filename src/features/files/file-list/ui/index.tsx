import React, {useState} from "react";
import {IGetStorageFileDto} from "@/shared/interface/files";
import {formatFileSize} from "@/shared/utils/convertSizeFiles";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IFileListItemProps {
    file: IGetStorageFileDto;
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
    const handleSave = () => {
        if (newTitle.trim() === "") {
            setNewTitle(file.title);
        } else {
            console.log(`Файл переименован: ${newTitle}`);
        }
        setIsEditing(false);
    };
    return (
        <div
            className="cursor-pointer text-lg flex bg-gr-blocks items-center p-4 border-3 border-purple-light w-[1227px] h-[64px] px-[36px] rounded-[15px] ">
            <div className="w-[373px] flex" onDoubleClick={handleEdit}>
                {isEditing ? (
                    <input
                        className="w-fit p-1 border rounded "
                        value={newTitle}
                        onChange={handleChange}
                        onBlur={handleSave}
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
            <span className="w-[224px]">{file.tag_title ? `#${file.tag_title}` : "-"}</span>
            <span className="w-[209px]">{formatFileSize(file.size)}</span>
            <div className="flex gap-3">
                <ButtonIcon icon="fluent:arrow-download-32-filled" className="w-5 h-5"/>
                <ButtonIcon icon="ci:edit-pencil-line-02" className="w-5 h-5"/>
                <ButtonIcon icon="akar-icons:arrow-down-left" className="w-5 h-5"/>
                <ButtonIcon icon="mingcute:link-2-line" className="w-5 h-5"/>
                <ButtonIcon icon="lucide:trash" className="w-5 h-5"/>
            </div>
        </div>
    );
};

export default FileListItem;