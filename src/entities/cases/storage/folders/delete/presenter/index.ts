import useDeleteFolderUseCase from "../use-case";

const useDeleteFolderPresenter = (onClose: () => void) => {
    const { mutateAsync: deleteFolder } = useDeleteFolderUseCase();

    const handleDeleteFolder = async (folderId: string) => {
        await deleteFolder(folderId);
        onClose();
    };

    return { handleDeleteFolder };
};

export default useDeleteFolderPresenter;
