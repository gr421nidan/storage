import useCleaningTrashUseCase from "../use-case";

const useCleaningTrashPresenter = (onClose: () => void) => {
    const { mutateAsync: cleaningTrash } = useCleaningTrashUseCase();

    const handleCleaningTrash = async () => {
        await cleaningTrash();
        onClose();
    };

    return { handleCleaningTrash };
};

export default useCleaningTrashPresenter;
