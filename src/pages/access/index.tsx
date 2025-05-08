import {ReactNode} from "react";
import {useParams} from "react-router-dom";
import FileRowItem from "@/features/files/file-row/ui";
import FolderCardItem from "@/features/folders/folder-card/ui";
import useUserAvailableFolderOrFilePresenter from "@/entities/cases/storage/folders/get-available-folder/presenter";

const UserAccessViewPage = (): ReactNode => {
    const { id } = useParams<{ id: string }>();
    const { type, file, folder } = useUserAvailableFolderOrFilePresenter(id!);

    return (
        <>
            {type === "file" && file && <FileRowItem file={file} variant="access" />}
            {type === "folder" && folder && <FolderCardItem folder={folder} variant="access" />}
        </>
    );
};
export default UserAccessViewPage;
