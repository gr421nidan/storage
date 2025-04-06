import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getAvailableStoragesRepository from "@/entities/repo/storage/get-available-storages";
import { IGetStorageDto } from "@/shared/interface/storage";
import convertBytesToGB from "@/shared/utils/convertSizeStorage";

const useGetAvailableStoragesUseCase = () => {
    const execute = async () => {
        const { storage } = await getAvailableStoragesRepository();

        return storage.map((item: IGetStorageDto) => ({
            ...item,
            size: convertBytesToGB(item.size),
        }));
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.STORAGES],
        queryFn: execute,
    });

    return {
        storage: data || [],
        ...rest,
    };
};

export default useGetAvailableStoragesUseCase;
