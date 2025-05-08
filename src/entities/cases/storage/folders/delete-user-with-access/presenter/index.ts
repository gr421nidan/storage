import useDeleteUserWithAccessUseCase from "../use-case";

const useDeleteUserPresenter = () => {
    const {mutateAsync} = useDeleteUserWithAccessUseCase();

    const handleDeleteUser = async (userId: string, folderId: string) => {
        await mutateAsync({ userId, folderId });
    };

    return {
        handleDeleteUser,
    };
};

export default useDeleteUserPresenter;
