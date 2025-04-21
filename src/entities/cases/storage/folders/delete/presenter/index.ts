import useDeleteFolderUseCase from "../use-case";

const useDeleteFolderPresenter = (onClose: () => void) => {
    const {mutateAsync} = useDeleteFolderUseCase();

    const handleDeleteFolder = async (folderId: string) => {
        await mutateAsync(folderId, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return {handleDeleteFolder};
};

export default useDeleteFolderPresenter;
