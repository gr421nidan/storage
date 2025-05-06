import useDeleteBackupUseCase from "../use-case";

const useDeleteBackupPresenter = () => {
    const {mutateAsync} = useDeleteBackupUseCase();

    const handleDeleteBackup = async (backupId: string) => {
        await mutateAsync(backupId);
    };

    return {handleDeleteBackup};
};

export default useDeleteBackupPresenter;
