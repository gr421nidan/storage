import {IGetStorageSizeDto} from "@/shared/interface/storage";

const getStorageSizeRepository = async (): Promise<IGetStorageSizeDto> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                size: 4294967296,
            });
        }, 1000);
    });
};

export default getStorageSizeRepository;