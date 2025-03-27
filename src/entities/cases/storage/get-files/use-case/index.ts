import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageFilesRepository from "@/entities/repo/storage/get-files";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import formatedDate from "@/shared/utils/formatedDate";

const useGetStorageFilesUseCase = (search?: string) => {
    const execute = async () => {
        const files = await getStorageFilesRepository();
        const filteredFiles = search
            ? files.filter((file) =>
                file.title.toLowerCase().includes(search.toLowerCase())
            )
            : files;

        return filteredFiles.map((file: IGetStorageFilesDto) => ({
            ...file,
            created_at: formatedDate(file.created_at),
        }));
    }
    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.FILES, search],
        queryFn: execute,
        select: (files) => ({
            allFiles: files,
            recentFiles: files.slice(0, 6),
        }),
    });
    return {
        allFiles: data?.allFiles || [],
        recentFiles: data?.recentFiles || [],
        ...rest
    };
};

export default useGetStorageFilesUseCase;
