import React from "react";
import {
    headerRecentFilesStyles,
    recentFilesContainerStyles,
    recentFilesListStyles, recentFilesNameStyles
} from "@/shared/components/recent-files/style";
import {IGetStorageFileDto} from "@/shared/interface/files";
import FileIcon from "@/shared/components/file-icon";

interface IRecentFilesProps {
    files: IGetStorageFileDto[];
}

const RecentFiles: React.FC<IRecentFilesProps> = ({ files }) => {
    return (
        <div className={recentFilesContainerStyles}>
            <h4 className={headerRecentFilesStyles}>Недавние</h4>
            {files.map((file, index) => (
                <li
                    key={index}
                    className={recentFilesListStyles}>
                    <span className={recentFilesNameStyles} title={file.title}>
                        <FileIcon fileType={file.type}  />
                         <span className="truncate">{file.title}</span>
                    </span>
                    <span >{file.created_at}</span>
                </li>
            ))}
        </div>
    );
};

export default RecentFiles;
