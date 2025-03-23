import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiErrorDto } from "@/shared/type/auth";
import {AxiosError} from "axios";
import {IUpdateUserDto, IUpdateUserPhotoPort} from "@/shared/type/user";
import QueryKey from "@/shared/common/enum/query-key";
import updateUserPhotoRepository from "@/entities/repo/user/update-user-photo";

const useUpdateUserPhotoUseCase = () => {
    const queryClient = useQueryClient();
    const execute = (data: IUpdateUserPhotoPort) => updateUserPhotoRepository(data);
    return useMutation<IUpdateUserDto, AxiosError<IApiErrorDto>, IUpdateUserPhotoPort>({
        mutationFn: execute,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKey.USER_PROFILE] });
        }
    });
};

export default useUpdateUserPhotoUseCase;
