import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignUpPort, ISignUpDto} from "@/shared/type/auth";
import {AxiosError} from "axios";
import signUpUser from "@/entities/auth/sign-up/api";

const execute = (data: ISignUpPort) => signUpUser(data);

const useSignUpUseCase = () => {
    return useMutation<ISignUpDto, AxiosError<IApiErrorDto>, ISignUpPort>({
        mutationFn: execute,

    });
};
export default useSignUpUseCase;