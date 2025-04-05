import React from "react";
import FileGridItem from "@/shared/components/files/file-card";
import FileListItem from "@/shared/components/files/file-row";
import { IGetStorageFileDto } from "@/shared/interface/files";

interface IFileViewProps {
    files: IGetStorageFileDto[];
    viewMode: "grid" | "list";
}

const FilesViewWidget: React.FC<IFileViewProps> = ({ files, viewMode }) => {
    return (
        <div className={viewMode === "grid" ? "grid grid-cols-4 gap-8 w-[1227px]" : "flex flex-col gap-6"}>
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

export default FilesViewWidget;
