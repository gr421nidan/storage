import useCleaningTrashUseCase from "../use-case";

const useCleaningTrashPresenter = (onSuccess: () => void) => {
    const { mutateAsync } = useCleaningTrashUseCase();

    const handleCleaningTrash = async () => {
        await mutateAsync(undefined, {
            onSuccess,
        });
    };

    return { handleCleaningTrash };
};

export default useCleaningTrashPresenter;
