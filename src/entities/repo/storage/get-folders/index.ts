import {IGetStorageFoldersDto} from "@/shared/interface/storage";

function generateUUID(): string {
    return crypto.randomUUID();
}
const mockFolders: IGetStorageFoldersDto[] = [
    {
        id: generateUUID(),
        title: "Папка 1",
        size: 1048576,
    },
    {
        id: generateUUID(),
        title: "Папка 2",
        size: 1048575,
    },
    {
        id: generateUUID(),
        title: "Папка 3",
        size: 0,
    },
    {
        id: generateUUID(),
        title: "Папка 1",
        size: 1048576,
    },
    {
        id: generateUUID(),
        title: "Папка 2",
        size: 1048575,
    },
    {
        id: generateUUID(),
        title: "Папка 3",
        size: 0,
    },
    {
        id: generateUUID(),
        title: "Папка 1",
        size: 1048576,
    },
    {
        id: generateUUID(),
        title: "Папка 2",
        size: 1048575,
    },
    {
        id: generateUUID(),
        title: "Папка 3",
        size: 0,
    },
];

const getStorageFoldersRepository = async (): Promise<IGetStorageFoldersDto[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFolders);
        }, 1000)
    });
};

export default getStorageFoldersRepository;