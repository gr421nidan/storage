import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {IApiErrorDto, IResetPasswordPort,} from "@/shared/interface/auth";

import {resetPasswordUser } from "@/entities/repo/user/resset-password";
import ERouterPath from "@/shared/common/enum/router";

const execute = (data: IResetPasswordPort) => resetPasswordUser(data);

const useResetPasswordUseCase = () => {
    const navigate = useNavigate();

    return useMutation<void, AxiosError<IApiErrorDto>, IResetPasswordPort>({
        mutationFn: execute,
        onSuccess: () => {
            navigate(ERouterPath.SIGN_IN_PAGE, { replace: true });
        }
    });
};
export default useResetPasswordUseCase;