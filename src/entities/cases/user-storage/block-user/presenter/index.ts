import useBlockUserUseCase from "../use-case";

const useBlockUserPresenter = () => {
    const {mutateAsync: blockUser} = useBlockUserUseCase();

    const handleBlockUser = async (userId: string) => {
        await blockUser(userId);
    };

    return {
        handleBlockUser,
    };
};

export default useBlockUserPresenter;
