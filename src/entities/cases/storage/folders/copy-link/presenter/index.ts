
import useCopyLinkUseCase from "../use-case";

interface ICopyLinkFolderPresenterParams {
    folderId: string;
}

const useCopyLinkFolderPresenter = ({folderId}: ICopyLinkFolderPresenterParams) => {
    const {mutateAsync} = useCopyLinkUseCase(folderId);

    const onCopyLink = async () => {
        await mutateAsync();
    };

    return {
        onCopyLink,
    };
};

export default useCopyLinkFolderPresenter;
