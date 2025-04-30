import React from "react";
import {ILogs} from "@/shared/interface/admin";
import {ETypeLog} from "@/shared/enum/admin";
import {format} from "date-fns";

interface ILogsCardProps {
    log: ILogs;
}

const LOG_TYPE_LABELS: Record<ETypeLog, string> = {
    [ETypeLog.CREATE_FOLDER]: "Создание папки",
    [ETypeLog.DELETE_FOLDER]: "Удаление папки",
    [ETypeLog.RENAME_FOLDER]: "Переименование папки",
    [ETypeLog.DELETE_FILE]: "Удаление файла",
    [ETypeLog.RENAME_FILE]: "Переименование файла",
    [ETypeLog.UPLOAD_FILE]: "Загрузка файла",
};

const LogsCard: React.FC<ILogsCardProps> = ({log}) => {
    const logInfo = LOG_TYPE_LABELS[log.type_logs_id] || "Неизвестное действие";
    const titleFolderOrFile = log.file_title ?? log.folder_title ?? "";
    const dateObj = new Date(log.date_time);
    const timeStr = format(dateObj, "HH:mm");
    const dateStr = format(dateObj, "dd.MM.yyyy");
    return (
        <div
            className="justify-between px-4 text-xl w-[1198px] min-h-[73px] rounded-[15px] border-2 border-purple-light flex items-center dark:text-white bg-gr-blocks">
            <span className="text-xl">{logInfo} "{titleFolderOrFile}"</span>
            <div className="flex gap-12 text-xl">
                <span>{timeStr}</span>
                <span>{dateStr}</span>
            </div>
        </div>
    );
};

export default LogsCard;
