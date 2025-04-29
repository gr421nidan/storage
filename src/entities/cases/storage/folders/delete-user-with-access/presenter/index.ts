import useDeleteUserWithAccessUseCase from "../use-case";

const useDeleteUserPresenter = () => {
    const { mutateAsync } = useDeleteUserWithAccessUseCase();

    const handleDeleteUser = async (userId: string) => {
        await mutateAsync(userId);
    };

    return {
        handleDeleteUser,
    };
};

export default useDeleteUserPresenter;
