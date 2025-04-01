import React from "react";
import {IGetStorageFolderDto} from "@/shared/interface/storage";
import FolderGridItem from "@/features/folders/folder-grid/ui";

interface IFileViewProps {
    folders: IGetStorageFolderDto[];
}

const FoldersView: React.FC<IFileViewProps> = ({folders}) => {
    return (
        <div className="grid grid-cols-4 gap-[32px] w-[1227px]">
            {folders.map((folder) => (
                <FolderGridItem key={folder.id} folder={folder}/>
            ))}
        </div>
    );
};

export default FoldersView;
