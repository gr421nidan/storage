import {useQuery} from "@tanstack/react-query";
import getStorageDataRepository from "@/entities/repo/storage/get-storage-size";
import convertBytesToGB from "../../../../../shared/utils/convertSizeStorage";
import QueryKey from "@/shared/common/enum/query-key";

const useGetStorageSizeUseCase = () => {
    const execute = getStorageDataRepository;
    const {data, ...rest} = useQuery({
        queryKey: [QueryKey.STORAGE_SIZE],
        queryFn: execute,
        select: (data) => {
            const storageSizeInGB = data ? convertBytesToGB(data.size) : null;
            return {
                ...data,
                storageSizeInGB
            };
        },
    });
    return {
        data,
        ...rest
    };
};

export default useGetStorageSizeUseCase;
