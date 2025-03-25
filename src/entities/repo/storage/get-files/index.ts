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
    },
    {
        id: generateUUID(),
        title: "file2.jpeg",
        type: "image/jpeg",
        size: 1048575,
        created_at: "2025-03-21T12:34:56Z",
        tag: "Учёба"
    },
    {
        id: generateUUID(),
        title: "file3.jpg",
        type: "image/jpg",
        size: 1048576,
        created_at: "2025-03-23T12:34:56Z",
        tag: "Учёба"
    },
    {
        id: generateUUID(),
        title: "file4.mp3",
        type: "audio/mp3",
        size: 1048575,
        created_at: "2025-03-22T12:34:56Z",
        tag: "Учёба"
    },
    {
        id: generateUUID(),
        title: "file5.pdf",
        type: "application/pdf",
        size: 1048575,
        created_at: "2025-03-25T12:34:56Z",
        tag: "Работа"
    },
    {
        id: generateUUID(),
        title: "file6.docs",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 1048575,
        created_at: "2025-03-25T12:34:56Z",
        tag: "Учёба"
    },
    {
        id: generateUUID(),
        title: "file7.mp4",
        type: "video/mp4",
        size: 1048575,
        created_at: "2025-03-24T12:34:56Z",
        tag: null
    },
    {
        id: generateUUID(),
        title: "file7.mp4",
        type: "video/mp4",
        size: 1048575,
        created_at: "2025-03-24T12:34:56Z",
        tag: null
    },
    {
        id: generateUUID(),
        title: "file6.docs",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 1048575,
        created_at: "2025-03-25T12:34:56Z",
        tag: "Учёба"
    },
    {
        id: generateUUID(),
        title: "file6.docs",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 1048575,
        created_at: "2025-03-25T12:34:56Z",
        tag: "Учёба"
    },
];

const getStorageFilesRepository = async (): Promise<IGetStorageFilesDto[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFiles);
        }, 1000)
    });
};

export default getStorageFilesRepository;