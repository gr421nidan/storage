import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getAvailableStoragesRepository from "@/entities/repo/storage/get-available-storages";
import convertBytesToGB from "@/shared/utils/convertSizeStorage";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const useGetAvailableStoragesUseCase = () => {
    const { data: userProfile, isLoading } = useGetUserProfileUseCase();

    const isEnabled = !isLoading && !!userProfile && !userProfile.isAdmin;
    const execute = async () => {
        const { storages } = await getAvailableStoragesRepository();
        return storages.map((storage) => ({
            ...storage,
            storage_size: convertBytesToGB(storage.storage_size ?? 0),
        }));
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.STORAGES],
        queryFn: execute,
        enabled: isEnabled,
    });

    return {
        storages: data || [],
        ...rest,
    };
};

export default useGetAvailableStoragesUseCase;
