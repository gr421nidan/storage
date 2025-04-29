import { useMutation } from "@tanstack/react-query";
import chooseAccessForFolderRepository from "@/entities/repo/storage/folders/choose-access";
import {IChooseAccessForFolderPort} from "@/shared/interface/folders";

const useChooseAccessTypeUseCase = (folderId: string) => {
    const execute = (data: IChooseAccessForFolderPort) => {
        return chooseAccessForFolderRepository(folderId, data);
    };

    return useMutation({
        mutationFn: execute,
    });
};

export default useChooseAccessTypeUseCase;
