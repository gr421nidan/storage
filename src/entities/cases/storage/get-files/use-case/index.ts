import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageFilesRepository from "@/entities/repo/storage/get-files";
import {IGetStorageFilesDto} from "@/shared/interface/storage";
import formatedDate from "@/shared/utils/formatedDate";

const useGetStorageFilesUseCase = () => {
    const {data} = useQuery({
        queryKey: [QueryKey.FILES],
        queryFn: async () => {
            const files = await getStorageFilesRepository();
            return files.map((file: IGetStorageFilesDto) => ({
                ...file,
                created_at: formatedDate(file.created_at),
            }));
        },
        select: (files) => ({
            allFiles: files,
            recentFiles: files.slice(0, 6),
        }),
    });
    return {
        allFiles: data?.allFiles || [],
        recentFiles: data?.recentFiles || [],
    };
};

export default useGetStorageFilesUseCase;
