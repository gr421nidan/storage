import React from "react";
import FileGridItem from "@/features/files/file-grid/ui";
import FileListItem from "@/features/files/file-list/ui";
import { IGetStorageFilesDto } from "@/shared/interface/storage";

interface IFileViewProps {
    files: IGetStorageFilesDto[];
    viewMode: "grid" | "list";
}

const FilesView: React.FC<IFileViewProps> = ({ files, viewMode }) => {
    return (
        <div className={viewMode === "grid" ? "grid grid-cols-4 gap-[32px]" : "flex flex-col gap-6"}>
            {files.map((file) =>
                viewMode === "grid" ? (
                    <FileGridItem key={file.id} file={file} />
                ) : (
                    <FileListItem key={file.id} file={file} />
                )
            )}
        </div>
    );
};

export default FilesView;
