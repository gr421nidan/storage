import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError, AxiosResponse} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import deleteFolderRepository from "@/entities/repo/storage/folders/delete";
import {IActionFolderDto} from "@/shared/interface/folders";

const useDeleteFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (folderId: string) => deleteFolderRepository(folderId);
    return useMutation<AxiosResponse<IActionFolderDto>, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useDeleteFolderUseCase;