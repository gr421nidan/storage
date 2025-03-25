import {useQuery} from "@tanstack/react-query";
import getStorageDataRepository from "@/entities/repo/storage/get-storage-size";
import convertBytesToGB from "../../../../../shared/utils/convertSizeStorage";
import QueryKey from "@/shared/common/enum/query-key";

const useGetStorageSizeUseCase = () => {
    const {data} = useQuery({
        queryKey: [QueryKey.STORAGE_SIZE],
        queryFn: getStorageDataRepository,
        select: (data) => {
            const storageSizeInGB = data ? convertBytesToGB(data.size) : null;
            return {
                ...data,
                storageSizeInGB
            };
        },
    });
    return {
        data
    };
};

export default useGetStorageSizeUseCase;
