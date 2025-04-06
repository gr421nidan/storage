import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFolderPresenter = (onClose: () => void) => {
    const { mutateAsync: moveToTrashFolder } = useMoveToTrashFileUseCase();

    const handleMoveToTrashFolder = async (folderId: string) => {
        await moveToTrashFolder(folderId);
        onClose();
    };

    return { handleMoveToTrashFolder };
};

export default useMoveToTrashFolderPresenter;
