import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import {IGetTrashFileDto} from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";
import CurrentStorage from "@/shared/hooks/storage";
import {IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";
import getTrashFilesAndFoldersRepository from "@/entities/repo/storage/trash/get-files-and-folders";

const useGetTrashFilesAndFoldersUseCase = ({search}: IGetStorageFilesAndFoldersPort) => {
    const storageId = CurrentStorage();
    const execute = async () => {
        if (!storageId) return {files: [], folders: []};
        const params = {search};
        const {files, folders} = await getTrashFilesAndFoldersRepository(storageId, params);

        const formattedFiles = files.map((file: IGetTrashFileDto) => ({
            ...file,
            deleted_at: formatedDate(file.deleted_at),
            created_at: formatedDate(file.created_at),
        }));

        return {files: formattedFiles, folders};
    };

    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.TRASH, storageId, search],
        queryFn: execute,
    });

    return {
        files: data?.files || [],
        folders: data?.folders || [],
        ...rest,
    };
};

export default useGetTrashFilesAndFoldersUseCase;
