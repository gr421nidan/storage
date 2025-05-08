import useDownloadFolderUseCase from "../use-case";
import download from "@/shared/utils/download";

const useDownloadFolderPresenter = () => {
    const { mutateAsync } = useDownloadFolderUseCase();

    const handleDownloadFolder = async (folderId: string) => {
        const data = await mutateAsync(folderId);
        if (data) {
            const { folder_name } = data;
            const title = folder_name.split("/").pop();
            if (title) {
                await download(folder_name, title);
            }
        }
    };

    return { handleDownloadFolder };
};

export default useDownloadFolderPresenter;
