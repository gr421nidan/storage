import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
    IApiErrorDto,
    IResetCodePort,
    IResetCodeDto,
} from "@/shared/interface/auth";
import { sendResetCodeUser} from "@/entities/repo/user/resset-password";

const execute = (data: IResetCodePort) => sendResetCodeUser(data);

const useStepEmailUseCase  = () => {
    return useMutation<IResetCodeDto, AxiosError<IApiErrorDto>, IResetCodePort>({
        mutationFn: execute,
    });
};

export default useStepEmailUseCase;