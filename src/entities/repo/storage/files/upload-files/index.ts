import { api } from "@/shared/api";
import { IUploadFilePort, IUploadStorageFileDto } from "@/shared/interface/files";
import { CONTENT_TYPE_FORM } from "@/shared/config";

const uploadFileRepository = async (data: IUploadFilePort, storageId: string): Promise<IUploadStorageFileDto[]> => {
    const formData = new FormData();
    data.file.forEach(file => {
        formData.append("file", file);
    });

    const response = await api.post<IUploadStorageFileDto[]>(`/file/upload/${storageId}`, formData, {
        headers: {
            "Content-Type": CONTENT_TYPE_FORM,
        },
    });

    return response.data;
};

export default uploadFileRepository;
