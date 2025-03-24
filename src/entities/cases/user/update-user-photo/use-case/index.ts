import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError, HttpStatusCode} from "axios";
import { IUpdateUserDto, IUpdateUserPhotoPort } from "@/shared/type/user";
import QueryKey from "@/shared/common/enum/query-key";
import updateUserPhotoRepository from "@/entities/repo/user/update-user-photo";
import { enqueueSnackbar } from "notistack";

const useUpdateUserPhotoUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IUpdateUserPhotoPort) => updateUserPhotoRepository(data);

    return useMutation<IUpdateUserDto, AxiosError<IApiErrorDto>, IUpdateUserPhotoPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USER_PROFILE] });
            enqueueSnackbar("Фото успешно загружено!", { variant: "successSnackbar" });
        },
        onError: (error) => {
            if (error.status === HttpStatusCode.BadRequest) {
                enqueueSnackbar("Недопустимый тип файла. Разрешенные расширения JPG, PNG, GIF", {variant: 'errorSnackbar'});
            }
            if (error.status === HttpStatusCode.RequestHeaderFieldsTooLarge) {
                enqueueSnackbar("Недопустимый размер файла.", {variant: 'errorSnackbar'});
            }
        },
    });
};

export default useUpdateUserPhotoUseCase;
