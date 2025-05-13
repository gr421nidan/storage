import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import getStorageInfoRepository from "@/entities/repo/user-storage/get-info";
import {useCurrentStorage} from "@/shared/hooks/storage";

const useGetStorageInfoUseCase = () => {
    const storageId = useCurrentStorage();
    const execute = async () => getStorageInfoRepository(storageId);
    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.STORAGE, storageId],
        queryFn: execute,
        enabled: !!storageId,
    });
    return {
        data,
        ...rest
    };
};
export default useGetStorageInfoUseCase;