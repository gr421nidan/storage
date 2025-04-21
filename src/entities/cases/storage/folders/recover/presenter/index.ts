import useRecoverFolderUseCase from "../use-case";

const useRecoverFolderPresenter = () => {
    const {mutateAsync} = useRecoverFolderUseCase();
    const handleRecoverFolder = async (folderId: string) => {
        await mutateAsync(folderId);
    };

    return {
        handleRecoverFolder,
    };
};

export default useRecoverFolderPresenter;
