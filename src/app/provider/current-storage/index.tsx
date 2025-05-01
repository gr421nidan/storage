import { FC, PropsWithChildren, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {CurrentStorageContext} from "@/shared/hooks/storage";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const CurrentStorageProvider: FC<PropsWithChildren> = ({ children }) => {
    const { id_storage } = useParams<{ id_storage?: string }>();
    const { data: userProfile } = useGetUserProfileUseCase();
    const [storageId, setStorageId] = useState<string>();

    useEffect(() => {
        setStorageId(id_storage ?? userProfile?.storage_id);
    }, [id_storage, userProfile?.storage_id]);
    if (storageId === undefined) return null;
    return (
        <CurrentStorageContext.Provider value={storageId}>
            {children}
        </CurrentStorageContext.Provider>
    );
};
export {CurrentStorageProvider}