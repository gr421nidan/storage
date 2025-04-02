import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetUserProfileUseCase from "@/entities/cases/user/get-user-profile/use-case";

const CurrentStorage = (): string | undefined => {
    const [storageId, setStorageId] = useState<string | undefined>(undefined);
    const location = useLocation();
    const { data: userProfile } = useGetUserProfileUseCase();

    useEffect(() => {
        const match = location.pathname.match(/\/storage\/([^/]+)/);
        if (match) {
            setStorageId(match[1]);
        } else if (userProfile?.storage_id) {
            setStorageId(userProfile.storage_id);
        }
    }, [location.pathname, userProfile?.storage_id]);

    return storageId;
};

export default CurrentStorage;
