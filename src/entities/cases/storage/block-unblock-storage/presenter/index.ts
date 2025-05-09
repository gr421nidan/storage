import {IBlockUnblockStoragePort} from "@/shared/interface/storage";
import useBlockUnblockStorageUseCase from "../use-case";

const useBlockUnblockStoragePresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useBlockUnblockStorageUseCase();
    const handleBlockUnblockStorage = async (data:IBlockUnblockStoragePort) => {
        await mutateAsync(data, { onSuccess });
    };
    return {
        handleBlockUnblockStorage,
    };
};

export default useBlockUnblockStoragePresenter;
