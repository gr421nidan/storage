import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getAvailableStoragesRepository from "@/entities/repo/storage/get-available-storages";
import { IGetStorageDto } from "@/shared/interface/storage";
import convertBytesToGB from "@/shared/utils/convertSizeStorage";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const useGetAvailableStoragesUseCase = () => {
    const { data: userProfile } = useGetUserProfileUseCase();
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
        enabled: userProfile ? !userProfile.isAdmin : false,
    });

    return {
        storages: data || [],
        ...rest,
    };
};

export default useGetAvailableStoragesUseCase;
