import useDeleteFileUseCase from "../use-case";

const useDeleteFilePresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useDeleteFileUseCase();

    const handleDeleteFile = async (fileId: string) => {
        await mutateAsync(fileId, {
            onSuccess,
        });
    };

    return {handleDeleteFile};
};

export default useDeleteFilePresenter;
