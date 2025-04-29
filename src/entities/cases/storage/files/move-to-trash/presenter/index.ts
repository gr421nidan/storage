import useMoveToTrashFileUseCase from "../use-case";

const useMoveToTrashFilePresenter = (onSuccess: () => void) => {
    const {mutateAsync} = useMoveToTrashFileUseCase();

    const handleMoveToTrashFile = async (fileId: string) => {
        await mutateAsync(fileId, {
            onSuccess
        });
    };

    return {handleMoveToTrashFile};
};

export default useMoveToTrashFilePresenter;
