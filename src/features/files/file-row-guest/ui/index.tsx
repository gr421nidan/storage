import React, {useState} from "react";
import {formatSize} from "@/shared/utils/convertSize";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import downloadFile from "@/shared/utils/download-file";
import styles from "@/features/files/file-row/style";
import {IGuestGetFileDto} from "@/shared/interface/files";
import FileViewer from "@/shared/components/players";
import {BUCKET_BASE_URL} from "@/shared/config";

interface IFileRowItemGuestProps {
    file: IGuestGetFileDto;
}

const FileRowItemGuest: React.FC<IFileRowItemGuestProps> = ({
                                                      file,
                                                  }) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const handleDoubleClick = () => {
        setIsViewerOpen(true);
    };
    const handleCloseViewer = () => {
        setIsViewerOpen(false);
    };
    const handleDownloadClick = () => downloadFile(file.path, file.title);
    const fullFilePath = `${BUCKET_BASE_URL}${file.path}`;
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
        <>
            <div className={styles.wrapper} onDoubleClick={handleDoubleClick}>
                <div className={styles.title} title={file.title}>
                    {file.title}
                </div>
                <span>{file.created_at}</span>
                <span>{formatSize(file.size)}</span>

                <div className={styles.actions}>{actionButtons()}</div>
            </div>
            {isViewerOpen && (
                <FileViewer
                    fileType={file.type}
                    fileUrl={fullFilePath}
                    fileTitle={file.title}
                    onClose={handleCloseViewer}
                />
            )}
        </>
    );
};

export default FileRowItemGuest;
