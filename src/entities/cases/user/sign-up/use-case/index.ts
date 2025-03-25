import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignUpPort, ISignUpDto} from "@/shared/interface/auth";
import {AxiosError} from "axios";
import signUpUserRepository from "@/entities/repo/user/sign-up";

const execute = (data: ISignUpPort) => signUpUserRepository(data);

const useSignUpUseCase = () => {
    return useMutation<ISignUpDto, AxiosError<IApiErrorDto>, ISignUpPort>({
        mutationFn: execute,

    });
};
export default useSignUpUseCase;