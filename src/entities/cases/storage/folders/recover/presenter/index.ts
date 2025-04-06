import useRecoverFolderUseCase from "../use-case";

const useRecoverFolderPresenter = () => {
    const {mutateAsync: recoverFolder} = useRecoverFolderUseCase();
    const handleRecoverFolder = async (folderId: string) => {
        await recoverFolder(folderId);
    };

    return {
        handleRecoverFolder,
    };
};

export default useRecoverFolderPresenter;
