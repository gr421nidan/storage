import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFolderPresenter = (onClose: () => void) => {
    const {mutateAsync} = useMoveToTrashFileUseCase();

    const handleMoveToTrashFolder = async (folderId: string) => {
        await mutateAsync(folderId, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return {handleMoveToTrashFolder};
};

export default useMoveToTrashFolderPresenter;
