import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignInDto, ISignInPort} from "@/shared/type/auth";
import {AxiosError} from "axios";
import loginUserRepository from "@/entities/repo/user/sign-in";
import {setUserData} from "@/app/store";

const execute = (data: ISignInPort) => loginUserRepository(data);

const useSignInUseCase = () => {
    return useMutation<ISignInDto, AxiosError<IApiErrorDto>, ISignInPort>({
        mutationFn: execute,
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.accessToken);
            setUserData(data.id, data.role_id, data.storage_id);
        },
    });
};

export default useSignInUseCase;
