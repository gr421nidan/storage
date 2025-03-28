import {IGetStorageFilesDto} from "@/shared/interface/storage";

function generateUUID(): string {
    return crypto.randomUUID();
}

const mockFiles: IGetStorageFilesDto[] = [
    {
        id: generateUUID(),
        title: "file1.gif",
        type: "image/gif",
        size: 1048576,
        created_at: "2025-03-20T12:34:56Z",
        tag: "Учёба"
    }
];

const uploadFileRepository = async (file: File): Promise<IGetStorageFilesDto> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newFile: IGetStorageFilesDto = {
                id: generateUUID(),
                title: file.name,
                type: file.type,
                size: file.size,
                created_at: new Date().toISOString(),
                tag: null,
            };
            mockFiles.push(newFile);
            resolve(newFile);
        }, 1000);
    });
};

export default uploadFileRepository;
