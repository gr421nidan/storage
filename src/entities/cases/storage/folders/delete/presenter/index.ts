import useDeleteFolderUseCase from "../use-case";

const useDeleteFolderPresenter = (onSuccess?: () => void) => {
    const {mutateAsync} = useDeleteFolderUseCase();

    const handleDeleteFolder = async (folderId: string) => {
        await mutateAsync(folderId, {
            onSuccess,
        });
    };

    return {handleDeleteFolder};
};

export default useDeleteFolderPresenter;
