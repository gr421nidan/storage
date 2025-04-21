import useCleaningTrashUseCase from "../use-case";

const useCleaningTrashPresenter = (onClose: () => void) => {
    const {mutateAsync} = useCleaningTrashUseCase();

    const handleCleaningTrash = async () => {
        await mutateAsync(undefined, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return {handleCleaningTrash};
};

export default useCleaningTrashPresenter;
