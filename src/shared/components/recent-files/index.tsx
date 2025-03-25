import React from "react";
import {
    headerRecentFilesStyles,
    recentFilesContainerStyles,
    recentFilesListStyles, recentFilesNameStyles
} from "@/shared/components/recent-files/style";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import FileIcon from "@/shared/components/file-icon";

interface IRecentFilesProps {
    files: IGetStorageFilesDto[];
}

const RecentFiles: React.FC<IRecentFilesProps> = ({ files }) => {
    return (
        <div className={recentFilesContainerStyles}>
            <h4 className={headerRecentFilesStyles}>Недавние</h4>
            {files.map((file, index) => (
                <li
                    key={index}
                    className={recentFilesListStyles}>
                    <span className={recentFilesNameStyles}>
                        <FileIcon fileType={file.type}  />
                        {file.title}
                    </span>
                    <span >{file.created_at}</span>
                </li>
            ))}
        </div>
    );
};

export default RecentFiles;
