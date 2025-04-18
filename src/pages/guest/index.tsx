import {ReactNode} from "react";
import {useParams} from "react-router-dom";
import useGuestGetFileUseCase from "@/entities/cases/storage/files/guest-get-file/use-case";
import FileRowItemGuest from "@/features/files/file-row-guest/ui";

const GuestPublicViewPage = (): ReactNode => {
    const {id} = useParams<{ id: string }>();
    console.log(id);
    const { file } = useGuestGetFileUseCase(id!);

    return (
        <div>
            {file ? (
                <FileRowItemGuest file={file}/>
            ) : (
                <div>File not found</div>
            )}
        </div>
    );
};

export default GuestPublicViewPage;
