import {useMutation, useQueryClient} from "@tanstack/react-query";
import chooseAccessForFolderRepository from "@/entities/repo/storage/folders/choose-access";
import {IChooseAccessForFolderPort} from "@/shared/interface/folders";
import {AxiosError} from "axios";
import {IApiErrorDto} from "@/shared/interface/auth";
import QueryKey from "@/shared/common/enum/query-key";

const useChooseAccessTypeUseCase = (folderId: string) => {
    const queryClient = useQueryClient();
    const execute = (data: IChooseAccessForFolderPort) => {
        return chooseAccessForFolderRepository(folderId, data);
    };
    return useMutation<void, AxiosError<IApiErrorDto>, IChooseAccessForFolderPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
        },
    });
};

export default useChooseAccessTypeUseCase;
