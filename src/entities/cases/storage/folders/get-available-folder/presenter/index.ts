import { useEffect, useState } from "react";
import useGetAvailableFileUseCase from "@/entities/cases/storage/files/get-available-file/use-case";
import useGetAvailableFolderUseCase from "@/entities/cases/storage/folders/get-available-folder/use-case";

const useUserAvailableFolderOrFilePresenter = (id: string) => {
    const fileResult = useGetAvailableFileUseCase(id);
    const folderResult = useGetAvailableFolderUseCase(id);

    const [type, setType] = useState<"file" | "folder" | null>(null);

    useEffect(() => {
        if (fileResult.file) {
            setType("file");
        } else if (folderResult.folder) {
            setType("folder");
        }
    }, [fileResult.file, folderResult.folder]);

    return {
        type,
        file: fileResult.file,
        folder: folderResult.folder,
    };
};

export default useUserAvailableFolderOrFilePresenter;
