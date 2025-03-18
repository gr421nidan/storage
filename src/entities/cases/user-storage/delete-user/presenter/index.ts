import useUnblockUserUseCase from "../use-case";

const useDeleteUserPresenter = () => {
    const { mutateAsync: deleteUser } = useUnblockUserUseCase();
    const handleDeleteUser = async (userId: string) => {
        try {
            await deleteUser(userId);
        } catch (error) {
            throw error;
        }
    };
    return {
        handleDeleteUser,
    };
};

export default useDeleteUserPresenter;
