import React from "react";
import {IGetStorageDto} from "@/shared/interface/storage";
import AvailableStorageCard from "@/features/storage/available-storage-card/ui";
import useGetAvailableStoragesUseCase from "@/entities/cases/storage/get-available-storages/use-case";

const StoragesViewWidget: React.FC = () => {
    const {storage} = useGetAvailableStoragesUseCase();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {storage.map((item: IGetStorageDto) => (
                <AvailableStorageCard key={item.id} storage={item}/>
            ))}
        </div>
    );
};

export default StoragesViewWidget;