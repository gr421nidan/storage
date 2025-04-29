import {useMutation, useQueryClient} from "@tanstack/react-query";
import copyLinkToFolderRepository from "@/entities/repo/storage/folders/copy-link";
import {ELinkActivity} from "@/shared/enum/folder/link-activity";
import QueryKey from "@/shared/common/enum/query-key";
import {enqueueSnackbar} from "notistack";

const useCopyLinkUseCase = (folderId: string) => {
    const queryClient = useQueryClient();
    const execute = (expirationType: ELinkActivity) => {
        return copyLinkToFolderRepository(folderId, {date_of_expiration: expirationType});
    };

    return useMutation({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.ACCESS_USERS, folderId] });
            enqueueSnackbar("Ссылка скопирована", {variant: "successSnackbar"});
        },
    });
};

export default useCopyLinkUseCase;
