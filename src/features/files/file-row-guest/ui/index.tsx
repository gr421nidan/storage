import React from "react";
import {formatSize} from "@/shared/utils/convertSize";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import downloadFile from "@/shared/utils/download-file";
import styles from "@/features/files/file-row/style";
import {IGuestGetFileDto} from "@/shared/interface/files";

interface IFileRowItemGuestProps {
    file: IGuestGetFileDto;
}

const FileRowItemGuest: React.FC<IFileRowItemGuestProps> = ({
                                                      file,
                                                  }) => {
    const handleDownloadClick = () => downloadFile(file.path, file.title);
    const actionButtons = () => {
        return (
            <>
                <ButtonIcon
                    icon="fluent:arrow-download-32-filled"
                    className={styles.icon}
                    onClick={handleDownloadClick}
                />
            </>
        );
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.title} title={file.title}>
                {file.title}
            </div>
            <span>{file.created_at}</span>
            <span>{formatSize(file.size)}</span>

            <div className={styles.actions}>{actionButtons()}</div>
        </div>
    );
};

export default FileRowItemGuest;
