
import useDeleteFileUseCase from "../use-case";

const useDeleteFilePresenter = (onClose: () => void) => {
    const { mutateAsync: deleteFile } = useDeleteFileUseCase();

    const handleDeleteFile = async (fileId: string) => {
        await deleteFile(fileId);
        onClose();
    };

    return { handleDeleteFile };
};

export default useDeleteFilePresenter;
