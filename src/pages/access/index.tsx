import {ReactNode} from "react";
import {useParams} from "react-router-dom";
import FileRowItem from "@/features/files/file-row/ui";
import useUserAccessGetFileUseCase from "@/entities/cases/storage/files/user-access-get-file/use-case";

const UserAccessViewPage = (): ReactNode => {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    const { file } = useUserAccessGetFileUseCase(id!);
    console.log(file)
    return (
        <div className="p-4">
            {file && <FileRowItem file={file} variant="access" />}
        </div>
    );
};

export default UserAccessViewPage;
