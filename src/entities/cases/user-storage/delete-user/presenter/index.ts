import useDeleteUserUseCase from "../use-case";

const useDeleteUserPresenter = (onClose: () => void) => {
    const { mutateAsync: deleteUser } = useDeleteUserUseCase();

    const handleDeleteUser = async (userId: string) => {
        await deleteUser(userId);
        onClose();
    };

    return { handleDeleteUser };
};

export default useDeleteUserPresenter;
