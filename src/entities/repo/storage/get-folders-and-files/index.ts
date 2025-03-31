import { IGetStorageFileDto, IGetStorageFolderDto, IGetFilesAndFoldersDto } from "@/shared/interface/storage";

const generateUUID=(): string=>{
    return crypto.randomUUID();
}

const mockFiles: IGetStorageFileDto[] = [
    { id: generateUUID(), title: "file1амвамвамвамвамвамвамва.gif", type: "image/gif", size: 1048576, created_at: "2025-03-20T12:34:56Z", tag: "Учёба", path: "sdffdf" },
    { id: generateUUID(), title: "file2.jpeg", type: "image/jpeg", size: 2042456, created_at: "2025-03-21T12:34:56Z", tag: "Учёба", path: "sdffdf" },
    { id: generateUUID(), title: "file3.jpg", type: "image/jpg", size: 1048576, created_at: "2025-03-23T12:34:56Z", tag: "Учёба", path: "sdffdf" },
    { id: generateUUID(), title: "file4.mp3", type: "audio/mp3", size: 1048575, created_at: "2025-03-22T12:34:56Z", tag: "Учёба", path: "sdffdf" },
    { id: generateUUID(), title: "file5.pdf", type: "application/pdf", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file4.pdf", type: "application/pdf", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file5.pdf", type: "application/pdf", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
    { id: generateUUID(), title: "file6.jpg", type: "image/jpg", size: 1048575, created_at: "2025-03-25T12:34:56Z", tag: "Работа", path: "sdffdf" },
];

const mockFolders: IGetStorageFolderDto[] = [
    { id: generateUUID(), title: "Учёба", size: 5000000 },
    { id: generateUUID(), title: "Работа", size: 3000000 },
    { id: generateUUID(), title: "Работа", size: 3000000 },
    { id: generateUUID(), title: "Работа", size: 3000000 },
    { id: generateUUID(), title: "Работа", size: 3000000 },
    { id: generateUUID(), title: "Работа", size: 3000000 },
];

const getStorageFilesAndFoldersRepository = async (search?: string): Promise<IGetFilesAndFoldersDto> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredFiles = search
                ? mockFiles.filter((file) => file.title.toLowerCase().includes(search.toLowerCase()))
                : mockFiles;

            const filteredFolders = search
                ? mockFolders.filter((folder) => folder.title.toLowerCase().includes(search.toLowerCase()))
                : mockFolders;

            resolve({ files: filteredFiles, folders: filteredFolders });
        }, 1000);
    });
};

export default getStorageFilesAndFoldersRepository;