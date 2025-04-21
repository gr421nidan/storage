import useDeleteFileUseCase from "../use-case";

const useDeleteFilePresenter = (onClose: () => void) => {
    const {mutateAsync} = useDeleteFileUseCase();

    const handleDeleteFile = async (fileId: string) => {
        await mutateAsync(fileId, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return {handleDeleteFile};
};

export default useDeleteFilePresenter;
