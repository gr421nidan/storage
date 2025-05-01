import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import { IGetStorageFileDto } from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";
import getStorageFilesAndFoldersRepository from "@/entities/repo/storage/get-folders-and-files";
import { IGetStorageFilesAndFoldersPort } from "@/shared/interface/storage";
import {useCurrentStorage} from "@/shared/hooks/storage";

const useGetStorageFilesAndFoldersUseCase = ({
                                                 search,
                                                 sortBy,
                                                 sortOrder,
                                                 type,
                                                 created_at,
                                             }: IGetStorageFilesAndFoldersPort) => {
    const storageId = useCurrentStorage();
    const execute = async () => {
        if (!storageId) return { files: [], folders: [] };
        const params = {
            search, sort_by: sortBy, sort_order: sortOrder, type, created_at,
        };
        const { files, folders } = await getStorageFilesAndFoldersRepository(storageId, params);

        const formattedFiles = files.map((file: IGetStorageFileDto) => ({
            ...file,
            created_at: formatedDate(file.created_at),
        }));

        return { files: formattedFiles, folders };
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.FILES_AND_FOLDERS, storageId, search, sortBy, sortOrder, type, created_at],
        queryFn: execute,
        select: (result) => ({
            allFiles: result.files,
            recentFiles: result.files.slice(0, 6),
            folders: result.folders,
        }),
    });

    return {
        allFiles: data?.allFiles || [],
        recentFiles: data?.recentFiles || [],
        folders: data?.folders || [],
        ...rest,
    };
};

export default useGetStorageFilesAndFoldersUseCase;
