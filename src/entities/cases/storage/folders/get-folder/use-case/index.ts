import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import {IGetStorageFileDto} from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";
import CurrentStorage from "@/shared/hooks/storage";
import getFolderRepository from "@/entities/repo/storage/folders/get-folder";
import {IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";

const useGetFolderUseCase = (folderId: string | undefined, filters: IGetStorageFilesAndFoldersPort) => {
    const storageId = CurrentStorage() as string;

    const execute = async () => {
        const {search, sortBy, sortOrder, type, created_at} = filters;
        const params = {
            search,
            sort_by: sortBy,
            sort_order: sortOrder,
            type,
            created_at,
        };
        const {files, folders} = await getFolderRepository(storageId, folderId, params);
        const formattedFiles = files.map((file: IGetStorageFileDto) => ({
            ...file,
            created_at: formatedDate(file.created_at),
        }));

        return {files: formattedFiles, folders};
    };
    const queryKeyParams = {
        storageId,
        folderId,
        filters,
    };
    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.FOLDER, queryKeyParams],
        queryFn: execute,
        enabled: !!folderId
    });

    return {
        files: data?.files || [],
        folders: data?.folders || [],
        ...rest,
    };
};

export default useGetFolderUseCase;
