import useUnblockUserUseCase from "../use-case";

const useDeleteUserPresenter = () => {
    const {mutateAsync: deleteUser} = useUnblockUserUseCase();
    const handleDeleteUser = async (userId: string) => {
        await deleteUser(userId);
    };
    return {
        handleDeleteUser,
    };
};

export default useDeleteUserPresenter;
