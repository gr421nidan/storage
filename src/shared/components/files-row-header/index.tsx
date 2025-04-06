import React from "react";

interface IFilesRowHeadersProps {
    viewMode: "list" | "grid";
    variant: "trash" | "default";
}

const FilesRowHeaders: React.FC<IFilesRowHeadersProps> = ({ viewMode, variant }) => {
    if (viewMode === "list" && variant === "trash") {
        return (
            <div className="grid grid-cols-[1.45fr_1.4fr_1fr_1fr_1fr] justify-between pl-[36px] pr-6 py-[10px] text-center">
                <span className="text-left">Наименование</span>
                <span>Дата создания</span>
                <span>Дата удаления</span>
                <span>Размер файла</span>
                <span>Действия</span>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[1.55fr_1fr_1fr_1fr_1.45fr] gap-6 px-[36px] py-[10px] text-center">
            <span className="text-left">Наименование</span>
            <span>Дата создания</span>
            <span>Пометки (Тэги)</span>
            <span>Размер файла</span>
            <span>Действия</span>
        </div>
    );
};

export default FilesRowHeaders;