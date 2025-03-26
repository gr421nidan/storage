import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageFoldersRepository from "@/entities/repo/storage/get-folders";

const useGetStorageFoldersUseCase = () => {
    const {data} = useQuery({
        queryKey: [QueryKey.FOLDERS],
        queryFn: getStorageFoldersRepository,
    });
    return {
        data: data || [],
    };
};

export default useGetStorageFoldersUseCase;
