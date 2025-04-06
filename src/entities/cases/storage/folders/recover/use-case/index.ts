import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import {IActionFolderDto} from "@/shared/interface/folders";
import recoverFolderRepository from "@/entities/repo/storage/folders/recover";

const useRecoverFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (folderId: string) => recoverFolderRepository(folderId);
    return useMutation<AxiosResponse<IActionFolderDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.FILES_AND_FOLDERS] });
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useRecoverFolderUseCase;