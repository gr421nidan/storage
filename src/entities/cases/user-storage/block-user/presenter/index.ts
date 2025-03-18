import useBlockUserUseCase from "../use-case";

const useBlockUserPresenter = () => {
    const { mutateAsync: blockUser } = useBlockUserUseCase();

    const handleBlockUser = async (userId: string) => {
        try {
            await blockUser(userId);
        } catch (error) {
            throw error
        }
    };

    return {
        handleBlockUser,
    };
};

export default useBlockUserPresenter;
