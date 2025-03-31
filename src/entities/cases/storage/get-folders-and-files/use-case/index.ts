import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageData from "@/entities/repo/storage/get-folders-and-files";
import { IGetStorageFileDto } from "@/shared/interface/storage";
import formatedDate from "@/shared/utils/formatedDate";

const useGetStorageFilesAndFoldersUseCase = (search?: string) => {
    const execute = async () => {
        const { files, folders } = await getStorageData(search);

        const formattedFiles = files.map((file: IGetStorageFileDto) => ({
            ...file,
            created_at: formatedDate(file.created_at),
        }));

        return { files: formattedFiles, folders };
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.FILES_AND_FOLDERS, search],
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
