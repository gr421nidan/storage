import useDeleteUserLogsUseCase from "../use-case";

const useDeleteUserLogsPresenter = (onSuccess: () => void) => {
    const { mutateAsync } = useDeleteUserLogsUseCase();

    const handleDeleteUserLogs = async (userId: string) => {
        await mutateAsync(userId, {
            onSuccess
        });
    };

    return { handleDeleteUserLogs };
};

export default useDeleteUserLogsPresenter;
