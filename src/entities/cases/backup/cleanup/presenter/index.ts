import useCleanupBackupsUseCase from "../use-case";

const useCleanupBackupsPresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useCleanupBackupsUseCase();

    const handleCleanupBackups = async () => {
        await mutateAsync(undefined, { onSuccess });
    };
    return {handleCleanupBackups};

}

export default useCleanupBackupsPresenter;