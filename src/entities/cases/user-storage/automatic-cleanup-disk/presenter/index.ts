import {IAutomaticCleanupDiskPort} from "@/shared/interface/storage";
import useAutomaticCleanupDiskUseCase from "../use-case";

const useAutomaticCleanupDiskPresenter = () => {
    const {mutateAsync} = useAutomaticCleanupDiskUseCase();

    const handleAutomaticCleanupDisk = async (data:IAutomaticCleanupDiskPort) => {
        await mutateAsync(data);
    };

    return {
        handleAutomaticCleanupDisk,
    };
};

export default useAutomaticCleanupDiskPresenter;
