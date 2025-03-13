import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import {
    IApiErrorDto,
    IResetCodePort,
    IResetCodeDto,
    IResetPasswordPort,
    IResetPasswordDto,
} from "@/shared/type/auth";

import { sendResetCodeUser, resetPasswordUser } from "@/entities/auth/reset-password/api";
import ERouterPath from "@/shared/common/enum/router";

export const useStepEmailUseCase  = (setError: any) => {
    return useMutation<IResetCodeDto, AxiosError<IApiErrorDto>, IResetCodePort>({
        mutationFn: sendResetCodeUser,
        onError: (error: AxiosError<IApiErrorDto>) => {
            if (
                error.response?.status === 404 &&
                error.response?.data?.type === "not_found" &&
                error.response?.data?.property === "email"
            ) {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};


export const useResetPasswordUseCase = (setError: any) => {
    const navigate = useNavigate();

    return useMutation<IResetPasswordDto, AxiosError<IApiErrorDto>, IResetPasswordPort>({
        mutationFn: resetPasswordUser,
        onSuccess: () => {
            navigate(ERouterPath.SIGN_IN_PAGE, { replace: true });
        },
        onError: (error: AxiosError<IApiErrorDto>) => {
            if (
                error.response?.status === 404 &&
                error.response?.data?.type === "not_found" &&
                error.response?.data?.property === "confirmation_code"
            ) {
                setError("confirmation_code", {
                    type: "manual",
                    message: error.response?.data?.message || "Неверный код подтверждения",
                });
            }
        },
    });
};
