import React from "react";
import {IGetStorageFolderDto} from "@/shared/interface/folders";
import FolderGridItem from "@/features/folders/folder-grid/ui";

interface IFileViewProps {
    folders: IGetStorageFolderDto[];
    onFolderClick: (folderId: string) => void;
}

const FoldersView: React.FC<IFileViewProps> = ({folders, onFolderClick }) => {
    const handleFolderClick = (folderId: string) => () => {
        onFolderClick(folderId);
    };
    return (
        <div className="grid grid-cols-4 gap-[32px] w-[1227px]">
            {folders.map((folder) => (
                <div key={folder.id} onClick={handleFolderClick(folder.id)}> {/* Обработчик клика на папку */}
                    <FolderGridItem folder={folder} />
                </div>
            ))}
        </div>
    );
};

export default FoldersView;
