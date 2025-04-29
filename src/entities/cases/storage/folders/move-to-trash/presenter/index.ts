import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFolderPresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useMoveToTrashFileUseCase();

    const handleMoveToTrashFolder = async (folderId: string) => {
        await mutateAsync(folderId, {
            onSuccess
        });
    };

    return {handleMoveToTrashFolder};
};

export default useMoveToTrashFolderPresenter;
