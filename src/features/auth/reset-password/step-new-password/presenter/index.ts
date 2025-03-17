import {useForm} from "react-hook-form";
import useResetPasswordUseCase from "@/entities/auth/reset-password/use-case/reset-password";
import {IFormNewPasswordData, IResetPasswordPort} from "@/shared/type/auth/reset-password";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/entities/auth/validation-auth-form/reset-password/step-new-password";
import {AxiosError} from "axios";

interface IUseStepNewPasswordFormParams {
    email: string;
    confirmation_code: string;
    onSuccess: () => void;
}

const useStepNewPasswordPresenter = ({email, confirmation_code, onSuccess}: IUseStepNewPasswordFormParams) => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors},
        setError,
    } = useForm<IFormNewPasswordData>({
        mode: "onSubmit",
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useResetPasswordUseCase();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormNewPasswordData) => {
        const request: IResetPasswordPort = {
            email,
            confirmation_code,
            password: data.password,
        };
        try {
            await mutateAsync(request, {
                onSuccess: () => {
                    onSuccess();
                    navigate(ERouterPath.SIGN_IN_PAGE, {replace: true});
                }
            });
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (
                    error.response.status === 404 &&
                    error.response.data.type === "not_found" &&
                    error.response.data.property === "confirmation_code"
                ) {
                    setError("confirmation_code", {
                        type: "manual",
                        message: error.response.data.message || "Неверный код подтверждения",
                    });
                }
            }
        }
    });

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        getValues,
    };
};
export default useStepNewPasswordPresenter;