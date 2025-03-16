import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto, ISignInDto, ISignInPort} from "@/shared/type/auth";
import {AxiosError} from "axios";
import signInUser from "@/entities/auth/sign-in/api";
import {setUserData} from "@/app/store";

const useSignInUseCase = (setError: any) => {
    return useMutation<ISignInDto, AxiosError<IApiErrorDto>, ISignInPort>({
        mutationFn: signInUser,
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.accessToken);
            setUserData(data.id, data.role_id, data.storage_id);
        },
        onError: (error: AxiosError<IApiErrorDto>) => {
            if (error.response?.status === 404 && error.response?.data?.type === "not_found" && (error.response?.data?.property === "email" || error.response?.data?.property === "password")) {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
                setError("password", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
            if (error.response?.status === 429) {
                setError("password", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};

export default useSignInUseCase;
