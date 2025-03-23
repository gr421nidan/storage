import React from "react";
import { Icon } from "@iconify/react";

interface IFile {
    name: string;
    date: string;
}

interface IRecentFilesProps {
    files: IFile[];
}

const RecentFiles: React.FC<IRecentFilesProps> = ({ files }) => {
    return (
        <div className="space-y-2 w-[350px] py-[27px] px-[23px] dark:text-white border-t-3 border-l-3 border-b-3 rounded-l-[50px] border-purple ">
            <h4 className="text-center mb-6">Недавние</h4>
            {files.map((file, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center rounded p-2">
                    <span className="flex items-center gap-2">
                        <Icon icon="mdi:file-outline" width="20" />
                        {file.name}
                    </span>
                    <span >{file.date}</span>
                </li>
            ))}
        </div>
    );
};

export default RecentFiles;
