import useCleanupBackupsUseCase from "../use-case";

const useDeleteBackupPresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useCleanupBackupsUseCase();

    const handleCleanupBackups = async (storageId: string) => {
        await mutateAsync(storageId, {
            onSuccess
        });
    };
    return {handleCleanupBackups};

}

export default useDeleteBackupPresenter;