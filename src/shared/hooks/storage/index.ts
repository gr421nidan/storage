import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const CurrentStorage = (): string | undefined => {
    const { id_storage } = useParams<{ id_storage?: string }>();
    const [storageId, setStorageId] = useState<string | undefined>(undefined);
    const { data: userProfile } = useGetUserProfileUseCase();

    useEffect(() => {
        if (id_storage) {
            setStorageId(id_storage);
        } else if (userProfile?.storage_id) {
            setStorageId(userProfile.storage_id);
        }
    }, [id_storage, userProfile?.storage_id]);

    return storageId;
};

export default CurrentStorage;
