import { useState } from "react";
import useGetFolderUseCase from "@/entities/cases/storage/folders/get-folder/use-case";
import useGetStorageFilesAndFoldersUseCase from "@/entities/cases/storage/get-folders-and-files/use-case";
import { IFiltersPort, ISortingPort } from "@/shared/interface/files";
import { format } from "date-fns";

const useGetStorageFilesAndFoldersPresenter = () => {
    const [currentFolder, setCurrentFolder] = useState<string | undefined>(undefined);
    const [folderHistory, setFolderHistory] = useState<{ id: string, title: string }[]>([]);
    const [params, setParams] = useState<{
        search?: string;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
        type?: string[];
        created_at?: string;
    }>({});

    const storageData = useGetStorageFilesAndFoldersUseCase(params);
    const folderData = useGetFolderUseCase(currentFolder, params);
    const isRoot = !currentFolder;
    const files = isRoot ? storageData.allFiles : folderData.files;
    const folders = isRoot ? storageData.folders : folderData.folders;
    const backups = isRoot ? storageData.backups : [];

    const openFolder = (folderId: string, folderName: string) => {
        setFolderHistory(prevHistory => [...prevHistory, { id: folderId, title: folderName }]);
        setCurrentFolder(folderId);
    };

    const goBack = (index: number) => {
        const newHistory = folderHistory.slice(0, index + 1);
        setFolderHistory(newHistory);
        setCurrentFolder(newHistory[index]?.id);
    };

    const resetFolder = () => {
        setCurrentFolder(undefined);
        setFolderHistory([]);
    };

    const handleApplyFilters = ({ type, date, ...rest }: IFiltersPort) => {
        setParams((prev) => ({
            ...prev,
            ...rest,
            type: type?.length ? type : undefined,
            created_at: date ? format(date, "yyyy-MM-dd") : undefined,
        }));
    };

    const handleApplySorting = ({ sort_by, sort_order, ...rest }: ISortingPort) => {
        setParams((prev) => ({
            ...prev,
            ...rest,
            sortBy: sort_by,
            sortOrder: sort_order,
        }));
    };
    const resetFilters = () => setParams((prev) => ({ ...prev, type: undefined, created_at: undefined }));
    const resetSorting = () => setParams((prev) => ({ ...prev, sortBy: undefined, sortOrder: undefined }));
    return {
        currentFolder,
        openFolder,
        resetFolder,
        goBack,
        files,
        folders,
        backups,
        folderHistory,
        params,
        setParams,
        handleApplyFilters,
        handleApplySorting,
        resetFilters,
        resetSorting,
    };
};

export default useGetStorageFilesAndFoldersPresenter;
