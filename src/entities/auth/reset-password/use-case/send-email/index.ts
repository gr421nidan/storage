import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
    IApiErrorDto,
    IResetCodePort,
    IResetCodeDto,
} from "@/shared/type/auth";
import { sendResetCodeUser} from "@/entities/auth/reset-password/api";

const execute = (data: IResetCodePort) => sendResetCodeUser(data);

const useStepEmailUseCase  = () => {
    return useMutation<IResetCodeDto, AxiosError<IApiErrorDto>, IResetCodePort>({
        mutationFn: execute,
    });
};

export default useStepEmailUseCase;