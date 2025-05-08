import React from "react";
import {IGetStorageDto} from "@/shared/interface/storage";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import AvailableStorage from "@/assets/storage-img/available_storage.png";
import AvailableStorageDark from "@/assets/storage-img/available_storage_dark.png";
import {EGrantID} from "@/shared/enum/admin";
import styles from "../style";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {enqueueSnackbar} from "notistack";

interface IAvailableStorageCardProps {
    storage: IGetStorageDto;
}

const GRANT_NAMES: Record<EGrantID, string> = {
    [EGrantID.VIEW]: "просмотр",
    [EGrantID.FULL_ACCESS]: "полный доступ",
};

const TOTAL_STORAGE_GB = 15;
const AvailableStorageCard: React.FC<IAvailableStorageCardProps> = ({storage}) => {
    const navigate = useNavigate();

    const handleStorageClick = () => {
        if (!storage.is_active) {
            enqueueSnackbar("Хранилище недоступно", { variant: "warning" });
            return;
        }
        navigate(ERouterPath.STORAGE.replace(":id_storage", storage.id));
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
                <h3 className={`${styles.title} truncate`}>{storage.title}</h3>
                <span className={styles.accessType}>
                    Тип доступа: {GRANT_NAMES[storage.grant_id]}
                </span>
                <span className="text-bold">Занято {storage.storage_size} гб из {TOTAL_STORAGE_GB} гб</span>
            </div>
        </div>
    );
};

export default AvailableStorageCard;
