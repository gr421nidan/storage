import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import recoverFolderRepository from "@/entities/repo/storage/folders/recover";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useRecoverFolderUseCase = () => {
    const invalidateManyQueries = useInvalidateManyQueries();
    const execute = (folderId: string) => recoverFolderRepository(folderId);
    return useMutation<void, AxiosError<IApiErrorDto>, string>({
        mutationFn: execute,
        onSuccess: async () => {
            await invalidateManyQueries([
                [QueryKey.FILES_AND_FOLDERS],
                [QueryKey.TRASH],
            ]);
        },
    });
};

export default useRecoverFolderUseCase;