import useCleanupDiskUseCase from "../use-case";

const useCleanupDiskPresenter = (onClose: () => void) => {
    const { mutateAsync} = useCleanupDiskUseCase();

    const handleCleanupDisk = async () => {
        await mutateAsync(undefined, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return { handleCleanupDisk };
};

export default useCleanupDiskPresenter;
