import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFilePresenter = (onClose: () => void) => {
    const { mutateAsync: moveToTrashFile } = useMoveToTrashFileUseCase();

    const handleMoveToTrashFile = async (fileId: string) => {
        await moveToTrashFile(fileId);
        onClose();
    };

    return { handleMoveToTrashFile };
};

export default useMoveToTrashFilePresenter;
