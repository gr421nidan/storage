import useChooseAccessTypeUseCase from "../use-case/";
import { IChooseAccessForFolderPort } from "@/shared/interface/folders";
import {useState} from "react";

interface IUseChooseAccessTypePresenterParams {
    folderId: string;
}

const useChooseAccessTypePresenter = ({ folderId }: IUseChooseAccessTypePresenterParams) => {
    const { mutateAsync} = useChooseAccessTypeUseCase(folderId);

    const [isRestricted, setIsRestricted] = useState<boolean>(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const setAccess = async (isActive: boolean) => {
        setIsRestricted(isActive);
        const data: IChooseAccessForFolderPort = { is_restricted: isActive };
        await mutateAsync(data);
    };
    const setRestrictedAccess = () => setAccess(false);
    const setLinkAccess = () => setAccess(true);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    return {
        isRestricted,
        setRestrictedAccess,
        setLinkAccess,
        isPopupOpen,
        openPopup,
        closePopup,
    };
};

export default useChooseAccessTypePresenter;
