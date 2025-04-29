import useCleaningTrashUseCase from "../use-case";

const useCleaningTrashPresenter = (storageId: string, onSuccess: () => void) => {
    const { mutateAsync } = useCleaningTrashUseCase({ storageId });

    const handleCleaningTrash = async () => {
        await mutateAsync(undefined, {
            onSuccess,
        });
    };

    return { handleCleaningTrash };
};

export default useCleaningTrashPresenter;
