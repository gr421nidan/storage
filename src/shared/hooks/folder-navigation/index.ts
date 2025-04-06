import { useState } from "react";

const useFolderNavigation = () => {
    const [currentFolder, setCurrentFolder] = useState<string | undefined>(undefined);

    const openFolder = (folderId: string) => setCurrentFolder(folderId);
    const resetFolder = () => setCurrentFolder(undefined);

    return {
        currentFolder,
        openFolder,
        resetFolder,
    };
};
export default useFolderNavigation;