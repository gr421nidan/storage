import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignUpPort, ISignUpDto} from "@/shared/type/auth";
import {AxiosError} from "axios";
import signUpUser from "@/entities/auth/sign-up/api";

const useSignUpUseCase = (setError: any) => {

    return useMutation<ISignUpDto, AxiosError<IApiErrorDto>, ISignUpPort>({
        mutationFn: signUpUser,
        onError: (error: AxiosError<IApiErrorDto>) => {
            if (error.response?.status === 409 && error.response?.data?.type === "not_unique" && error.response?.data?.property === "email") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};
export default useSignUpUseCase;