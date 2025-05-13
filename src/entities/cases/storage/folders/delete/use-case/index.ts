import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import deleteFolderRepository from "@/entities/repo/storage/folders/delete";

const useDeleteFolderUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (folderId: string) => deleteFolderRepository(folderId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.TRASH] });
        },
    });
};

export default useDeleteFolderUseCase;