import {ReactNode} from "react";
import {useParams} from "react-router-dom";
import FileRowItem from "@/features/files/file-row/ui";
import useGetAvailableFileUseCase from "@/entities/cases/storage/files/get-available-file/use-case";

const UserFileViewPage = (): ReactNode => {
    const {file_id} = useParams<{ file_id: string }>();
    const { file } = useGetAvailableFileUseCase(file_id!);

        return (
            <div className="space-y-4">
                {file && <FileRowItem file={file} variant="access" />}
            </div>
        );
};

export default UserFileViewPage;
