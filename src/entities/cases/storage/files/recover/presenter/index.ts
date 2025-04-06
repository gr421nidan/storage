import useRecoverFileUseCase from "../use-case";

const useRecoverFilePresenter = () => {
    const {mutateAsync: recoverFile} = useRecoverFileUseCase();

    const handleRecoverFile = async (fileId: string) => {
        await recoverFile(fileId);
    };

    return {
        handleRecoverFile,
    };
};

export default useRecoverFilePresenter;
