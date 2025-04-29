import {useState} from "react";
import {ELinkActivity} from "@/shared/enum/folder/link-activity";
import useCopyLinkUseCase from "../use-case";

interface ICopyLinkFolderPresenterParams {
    folderId: string;
}

const useCopyLinkFolderPresenter = ({folderId}: ICopyLinkFolderPresenterParams) => {
    const [selectedActivity, setSelectedActivity] = useState<ELinkActivity | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const {mutateAsync} = useCopyLinkUseCase(folderId);

    const onSelectActivity = (activity: ELinkActivity) => {
        setSelectedActivity(activity);
    };

    const onCopyLink = async () => {
        if (!selectedActivity) return;

        await mutateAsync(selectedActivity);
    };

    return {
        selectedActivity,
        onSelectActivity,
        onCopyLink,
        isCopyButtonDisabled: !selectedActivity,
        isPopupOpen,
        openPopup,
        closePopup,
    };
};

export default useCopyLinkFolderPresenter;
