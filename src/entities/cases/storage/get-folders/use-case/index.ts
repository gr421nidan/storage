import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageFoldersRepository from "@/entities/repo/storage/get-folders";

const useGetStorageFoldersUseCase = () => {
    const execute = getStorageFoldersRepository;
    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.FOLDERS],
        queryFn: execute,
    });
    return {
        data: data || [],
        ...rest
    };
};

export default useGetStorageFoldersUseCase;
