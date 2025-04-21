import useRecoverFileUseCase from "../use-case";

const useRecoverFilePresenter = () => {
    const {mutateAsync} = useRecoverFileUseCase();

    const handleRecoverFile = async (fileId: string) => {
        await mutateAsync(fileId);
    };

    return {
        handleRecoverFile,
    };
};

export default useRecoverFilePresenter;
