import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import { IGetStorageFileDto } from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";
import CurrentStorage from "@/shared/hooks/storage";
import getFolderRepository from "@/entities/repo/storage/folders/get-folder";

const useGetFolderUseCase = (folderId:string) => {
    const storageId = CurrentStorage();
    const execute = async () => {
        if (!storageId) return { files: [], folders: [] };
        const { files, folders } = await getFolderRepository(storageId, folderId);

        const formattedFiles = files.map((file: IGetStorageFileDto) => ({
            ...file,
            created_at: formatedDate(file.created_at),
        }));

        return { files: formattedFiles, folders };
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.FOLDER, storageId, folderId],
        queryFn: execute
    });

    return {
        files: data?.files || [],
        folders: data?.folders || [],
        ...rest,
    };
};

export default useGetFolderUseCase;
