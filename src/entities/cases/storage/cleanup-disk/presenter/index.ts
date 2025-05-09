import useCleanupDiskUseCase from "../use-case";

const useCleanupDiskPresenter = (onSuccess?: () => void) => {
    const { mutateAsync} = useCleanupDiskUseCase();

    const handleCleanupDisk = async () => {
        await mutateAsync(undefined, {
            onSuccess,
        });
    };

    return { handleCleanupDisk };
};

export default useCleanupDiskPresenter;
