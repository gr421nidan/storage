import { IGetAvailableStoragesDto } from "@/shared/interface/storage";
import {EGrantID} from "@/shared/enum/admin";

const generateUUID = (): string => {
    return crypto.randomUUID();
};

const mockStorages: IGetAvailableStoragesDto = {
    storage: [
        {
            id: generateUUID(),
            name: "Облако для всех",
            size: 2 * 1024 * 1024 * 1024, // 2 GB
            grant_id: EGrantID.FULL_ACCESS,
        },
        {
            id: generateUUID(),
            name: "Облако только для чтения",
            size: 1 * 1024 * 1024 * 1024, // 1 GB
            grant_id: EGrantID.VIEW,
        },
        {
            id: generateUUID(),
            name: "Личное облако",
            size: 0.5 * 1024 * 1024 * 1024, // 0.5 GB
            grant_id: EGrantID.FULL_ACCESS,
        },
    ]
};

const getAvailableStoragesRepository = async (): Promise<IGetAvailableStoragesDto> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockStorages);
        }, 1000);
    });
};

export default getAvailableStoragesRepository;
