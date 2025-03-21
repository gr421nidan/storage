import useUnblockUserUseCase from "../use-case";

const useUnblockUserPresenter = () => {
    const {mutateAsync: unblockUser} = useUnblockUserUseCase();
    const handleUnblockUser = async (userId: string) => {
        await unblockUser(userId);
    };
    return {
        handleUnblockUser,
    };
};

export default useUnblockUserPresenter;
