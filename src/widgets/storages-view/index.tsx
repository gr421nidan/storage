import React from "react";
import { IGetStorageDto } from "@/shared/interface/storage";
import AvailableStorageCard from "@/features/storage/available-storage-card/ui";
import useGetAvailableStoragesUseCase from "@/entities/cases/storage/get-available-storages/use-case";
import EmptyState from "@/shared/components/empty-state";
import styles from "./sryle";
import noStorages from "@/assets/img-empty/no_available_storage.png";
import noStoragesDark from "@/assets/img-empty/no_available_storage_dark.png";

const StoragesViewWidget: React.FC = () => {
    const { storages } = useGetAvailableStoragesUseCase();
    const isEmpty = storages.length === 0;

    return (
        <EmptyState
            isEmpty={isEmpty}
            emptyImage={{ light: noStorages, dark: noStoragesDark }}
            emptyText="Ничего не найдено"
            content={
                <div className={styles.gridContainer}>
                    {storages.map((storage: IGetStorageDto) => (
                        <AvailableStorageCard key={storage.id} storage={storage} />
                    ))}
                </div>
            }
        />
    );
};

export default StoragesViewWidget;
