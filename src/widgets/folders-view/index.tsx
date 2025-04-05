import React from "react";
import {IGetStorageFolderDto} from "@/shared/interface/folders";
import FolderGridItem from "@/shared/components/folders/folder-card";

interface IFileViewProps {
    folders: IGetStorageFolderDto[];
    onFolderDoubleClick: (folderId: string) => void;
}

const FoldersViewWidget: React.FC<IFileViewProps> = ({folders, onFolderDoubleClick }) => {
    const handleFolderClick = (folderId: string) => () => {
        onFolderDoubleClick(folderId);
    };
    return (
        <div className="grid grid-cols-4 gap-[32px] w-[1227px]">
            {folders.map((folder) => (
                <div key={folder.id} onDoubleClick={handleFolderClick(folder.id)}>
                    <FolderGridItem folder={folder} />
                </div>
            ))}
        </div>
    );
};

export default FoldersViewWidget;
