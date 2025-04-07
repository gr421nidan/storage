import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getAvailableStoragesRepository from "@/entities/repo/storage/get-available-storages";
import { IGetStorageDto } from "@/shared/interface/storage";
import convertBytesToGB from "@/shared/utils/convertSizeStorage";

const useGetAvailableStoragesUseCase = () => {
    const execute = async () => {
        const { storages } = await getAvailableStoragesRepository();
        return storages.map((storage: IGetStorageDto) => ({
            ...storage,
            storage_size: convertBytesToGB(storage.storage_size !== null ? storage.storage_size : 0),
        }));
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.STORAGES],
        queryFn: execute,
    });

    return {
        storages: data || [],
        ...rest,
    };
};

export default useGetAvailableStoragesUseCase;
