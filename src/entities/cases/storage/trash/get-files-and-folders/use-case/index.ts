import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import {IGetTrashFileDto} from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";
import {IGetStorageFilesAndFoldersPort} from "@/shared/interface/storage";
import getTrashFilesAndFoldersRepository from "@/entities/repo/storage/trash/get-files-and-folders";
import useCurrentStorage from "@/shared/hooks/storage";

const useGetTrashFilesAndFoldersUseCase = ({search}: IGetStorageFilesAndFoldersPort) => {
    const storageId = useCurrentStorage() as string;
    const execute = async () => {
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
        enabled : !!storageId,
    });

    return {
        files: data?.files || [],
        folders: data?.folders || [],
        ...rest,
    };
};

export default useGetTrashFilesAndFoldersUseCase;
