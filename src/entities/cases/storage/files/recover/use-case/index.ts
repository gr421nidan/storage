import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import QueryKey from "@/shared/common/enum/query-key";
import recoverFileRepository from "@/entities/repo/storage/files/recover";
import useInvalidateManyQueries from "@/shared/hooks/invalidate-many-queries";

const useRecoverFileUseCase = () => {
    const invalidateManyQueries = useInvalidateManyQueries();
    const execute = (fileId: string) => recoverFileRepository(fileId);
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

export default useRecoverFileUseCase;