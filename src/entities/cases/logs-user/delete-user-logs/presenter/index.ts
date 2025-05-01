import useDeleteUserLogsUseCase from "../use-case";

const useDeleteUserLogsPresenter = () => {
    const { mutateAsync } = useDeleteUserLogsUseCase();

    const handleDeleteUserLogs = async (userId: string) => {
        await mutateAsync(userId);
    };

    return { handleDeleteUserLogs };
};

export default useDeleteUserLogsPresenter;
