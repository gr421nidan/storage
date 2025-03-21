import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignInDto, ISignInPort} from "@/shared/type/auth";
import {AxiosError} from "axios";
import loginUserRepository from "@/entities/repo/user/sign-in";

const execute = (data: ISignInPort) => loginUserRepository(data);

const useSignInUseCase = () => {
    return useMutation<ISignInDto, AxiosError<IApiErrorDto>, ISignInPort>({
        mutationFn: execute,
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.accessToken);
        },
    });
};

export default useSignInUseCase;
