import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFilePresenter = (onClose: () => void) => {
    const { mutateAsync} = useMoveToTrashFileUseCase();

    const handleMoveToTrashFile = async (fileId: string) => {
        await mutateAsync(fileId, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return { handleMoveToTrashFile };
};

export default useMoveToTrashFilePresenter;
