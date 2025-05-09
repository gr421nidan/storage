import { useEffect, useState } from "react";
import useGetAvailableFolderUseCase from "@/entities/cases/storage/folders/get-available-folder/use-case";
import useGetFolderUseCase from "@/entities/cases/storage/folders/get-folder/use-case";
import { HttpStatusCode } from "axios";
import { IGetStorageFolderDto } from "@/shared/interface/folders";

type IAccessType = "error" | "folder" | null;
const useUserAvailableFolderPresenter = (folderId: string) => {
    const { folder, ...rest } = useGetAvailableFolderUseCase(folderId);

    const [currentFolder, setCurrentFolder] = useState<IGetStorageFolderDto | undefined>();
    const [currentFolderId, setCurrentFolderId] = useState<string>();
    const [folderHistory, setFolderHistory] = useState<{ id: string; title: string }[]>([]);
    const [type, setType] = useState<IAccessType>(null);
    const [shouldLoadFolderContent, setShouldLoadFolderContent] = useState(false);
    const folderContent = useGetFolderUseCase(
        shouldLoadFolderContent ? currentFolderId : undefined,
        {}
    );

    useEffect(() => {
        if (folder) {
            setCurrentFolder(folder);
            setCurrentFolderId(folder.id);
            setType("folder");
            setFolderHistory([{ id: folder.id, title: folder.title }]);
        } else if (rest.error?.response?.status === HttpStatusCode.Forbidden || rest.error) {
            setType("error");
        }
    }, [folder, rest.error]);

    const openInitialFolder = () => {
        setShouldLoadFolderContent(true);
    };

    const openSubfolder = (folder: IGetStorageFolderDto) => {
        setCurrentFolder(folder);
        setCurrentFolderId(folder.id);
        setFolderHistory((prev) => [...prev, { id: folder.id, title: folder.title }]);
        setShouldLoadFolderContent(true);
    };

    const goBack = (index: number) => {
        const newHistory = folderHistory.slice(0, index + 1);
        const last = newHistory[index];

        setCurrentFolderId(last.id);
        setFolderHistory(newHistory);
        setShouldLoadFolderContent(true);
    };

    const resetFolder = () => {
        setCurrentFolder(undefined);
        setCurrentFolderId(undefined);
        setFolderHistory([]);
        setType(null);
        setShouldLoadFolderContent(false);
    };

    return {
        type,
        folder: currentFolder,
        folderFiles: folderContent.files ?? [],
        folderFolders: folderContent.folders ?? [],
        openInitialFolder,
        openSubfolder,
        goBack,
        resetFolder,
        folderHistory,
        shouldLoadFolderContent,
    };
};

export default useUserAvailableFolderPresenter;
