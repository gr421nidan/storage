import React from "react";
import {IGetStorageDto} from "@/shared/interface/storage";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import AvailableStorage from "@/assets/storage-img/available_storage.png";
import AvailableStorageDark from "@/assets/storage-img/available_storage_dark.png";
import {EGrantID} from "@/shared/enum/admin";
import styles from "../style";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

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
    const navigate = useNavigate();
    const handleStorageClick = () => {
        navigate(ERouterPath.STORAGE.replace(':id_storage', String(storage.id)));
    };
    return (
        <div className={styles.container} onDoubleClick={handleStorageClick}>
            <ImgThemeSwitcher
                light={AvailableStorage}
                dark={AvailableStorageDark}
                alt="Доступное облако"
                className={styles.image}
            />
            <div className={styles.content}>
                <span className={styles.title}>
                    <h3 className="truncate ">{storage.title}</h3>
                </span>
                <span className={styles.accessType}>Тип доступа: {grantName}</span>
                <span className="text-bold">Занято {storage.storage_size} гб из {totalGB} гб</span>
            </div>
        </div>
    );
};

export default AvailableStorageCard;
