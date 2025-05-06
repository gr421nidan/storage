import useCreateBackupUseCase from "../use-case";

const useCreateBackupPresenter = () => {
    const { mutateAsync} = useCreateBackupUseCase();

    const handleBackup = async () => {
        await mutateAsync();
    };

    return { handleBackup };
};

export default useCreateBackupPresenter;
