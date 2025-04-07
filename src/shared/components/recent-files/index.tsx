import React from "react";
import {
    headerRecentFilesStyles,
    notFoundRecentFilesStyles,
    recentFilesContainerStyles,
    recentFilesListStyles,
    recentFilesNameStyles,
} from "@/shared/components/recent-files/style";
import { IGetStorageFileDto } from "@/shared/interface/files";
import FileIcon from "@/shared/components/file-icon";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";
import notFound from "@/assets/img-empty/not_found.png";

interface IRecentFilesProps {
    files: IGetStorageFileDto[];
}

const RecentFiles: React.FC<IRecentFilesProps> = ({ files }) => {
    return (
        <div className={recentFilesContainerStyles}>
            <h4 className={headerRecentFilesStyles}>Недавние файлы</h4>

            {files.length > 0 ? (
                files.map((file) => (
                    <li key={file.id || file.title} className={recentFilesListStyles}>
                        <span className={recentFilesNameStyles} title={file.title}>
                            <FileIcon fileType={file.type} />
                            <span className="truncate">{file.title}</span>
                        </span>
                        <span>{file.created_at}</span>
                    </li>
                ))
            ) : (
                <div className={notFoundRecentFilesStyles}>
                    <ImgThemeSwitcher
                        light={notFound}
                        dark={notFoundDark}
                        alt="нет файлов"
                        className="w-[165px] h-[75px]"
                    />
                    <span>Ничего не найдено</span>
                </div>
            )}
        </div>
    );
};

export default RecentFiles;
