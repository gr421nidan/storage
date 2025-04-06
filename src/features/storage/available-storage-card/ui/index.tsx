import React from "react";
import {IGetStorageDto} from "@/shared/interface/storage";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import AvailableStorage from "@/assets/storage-img/available_storage.png";
import AvailableStorageDark from "@/assets/storage-img/available_storage_dark.png";
import {EGrantID} from "@/shared/enum/admin";

interface IAvailableStorageCardProps {
    storage: IGetStorageDto;
}

const GRANT_NAMES: Record<EGrantID, string> = {
    [EGrantID.VIEW]: "просмотр",
    [EGrantID.FULL_ACCESS]: "полный доступ",
};
const AvailableStorageCard: React.FC<IAvailableStorageCardProps> = ({storage}) => {
    const grantName = GRANT_NAMES[storage.grant_id];
    const totalGB = 15;
    return (
        <div className="bg-gr-blocks flex justify-between rounded-2xl p-4 dark:text-white border-2 border-purple-light">
            <ImgThemeSwitcher
                light={AvailableStorage}
                dark={AvailableStorageDark}
                alt="Доступное облако"
                className="w-[138px] h-[136px]"
            />
            <div className="flex flex-col justify-between ">
                <span className="max-w-[212px]">
                    <h3 className="truncate">{storage.name}</h3>
                </span>
                <span>Тип доступа: {grantName}</span>
                <div
                    className="w-[212px] h-[50px] flex items-center justify-center rounded-2xl border-2 border-purple-light bg-purple-lighter-opacity dark:bg-purple-dark-secondary text-center"
                >
                    Занято {storage.size} гб из {totalGB} гб
                </div>
            </div>
        </div>
    );
};

export default AvailableStorageCard;
