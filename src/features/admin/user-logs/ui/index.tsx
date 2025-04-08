import React from "react";
import { ILogs } from "@/shared/interface/admin";
import { ETypeLog } from "@/shared/enum/admin";
import { cardStyles } from "../style";
import { format } from "date-fns";

interface ILogsCardProps {
    log: ILogs;
}

const LOG_TYPE_LABELS: Record<ETypeLog, string> = {
    [ETypeLog.CREATE_FOLDER]: "Создание папки",
    [ETypeLog.DELETE_FOLDER]: "Удаление папки",
    [ETypeLog.DOWNLOAD_FOLDER]: "Скачивание папки",
    [ETypeLog.DELETE_FILE]: "Удаление файла",
    [ETypeLog.DOWNLOAD_FILE]: "Скачивание файла",
    [ETypeLog.UPLOAD_FILE]: "Загрузка файла",
};

const LogsCard: React.FC<ILogsCardProps> = ({ log }) => {
    const logInfo = LOG_TYPE_LABELS[log.type_logs_id] || "Неизвестное действие";
    const dateObj = new Date(log.date_time);
    const timeStr = format(dateObj, "HH:mm");
    const dateStr = format(dateObj, "dd.MM.yyyy");
    console.log(logInfo)

    return (
        <div className={cardStyles}>
            <div className="flex w-full items-center justify-between px-4">
                <span className="text-xl">{logInfo}</span>
                <div className="flex gap-12 text-xl">
                    <span>{timeStr}</span>
                    <span>{dateStr}</span>
                </div>
            </div>
        </div>
    );
};

export default LogsCard;
