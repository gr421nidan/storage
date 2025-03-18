import useUnblockUserUseCase from "../use-case";

const useUnblockUserPresenter = () => {
    const { mutateAsync: unblockUser } = useUnblockUserUseCase();
    const handleUnblockUser = async (userId: string) => {
        try {
            await unblockUser(userId);
        } catch (error) {
            throw error;
        }
    };
    return {
        handleUnblockUser,
    };
};

export default useUnblockUserPresenter;
