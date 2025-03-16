import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/type/auth";
import {AxiosError} from "axios";
import addUser from "@/entities/admin/add-user/api";
import {IAddUserDto, IAddUserPort} from "@/shared/type/admin";

const useAddUserUseCase = (setError: any) => {
    return useMutation<IAddUserDto, AxiosError<IApiErrorDto>, IAddUserPort>({
        mutationFn: addUser,
        onError: (error: AxiosError<IApiErrorDto>) => {
            if (error.response?.status === 404 && error.response?.data?.type === "not_found" && error.response?.data?.property === "email") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
            if (error.response?.status === 403 && error.response?.data?.type === "not_allowed" && error.response?.data?.property === "user_id") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
            if (error.response?.status === 403 && error.response?.data?.type === "not_allowed" && error.response?.data?.property === "role_id") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};

export default useAddUserUseCase;