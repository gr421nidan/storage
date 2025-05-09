import useChooseAccessTypeUseCase from "../use-case";
import { IChooseAccessForFolderPort } from "@/shared/interface/folders";
import {useState} from "react";

interface IUseChooseAccessTypePresenterProps {
    folderId: string;
    initialRestricted?: boolean;
}

const useChooseAccessTypePresenter = ({folderId, initialRestricted = false}: IUseChooseAccessTypePresenterProps) => {
    const { mutateAsync } = useChooseAccessTypeUseCase(folderId);
    const [isRestricted, setIsRestricted] = useState(initialRestricted);
    const setAccess = async (isActive: boolean) => {
        setIsRestricted(isActive);
        const data: IChooseAccessForFolderPort = { is_restricted: isActive };
        await mutateAsync(data);
    };
    const setRestrictedAccess = () => setAccess(false);
    const setLinkAccess = () => setAccess(true);
    return {
        isRestricted,
        setRestrictedAccess,
        setLinkAccess,
    };
};

export default useChooseAccessTypePresenter;
