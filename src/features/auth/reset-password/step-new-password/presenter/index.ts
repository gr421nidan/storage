import {useForm} from "react-hook-form";
import {useResetPasswordUseCase} from "@/entities/auth/reset-password/use-case";
import {IFormNewPasswordData, IResetPasswordPort} from "@/shared/type/auth/reset-password";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/features/auth/validation-auth-form/reset-password/step-new-password";

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
    } = useForm<IFormNewPasswordData>({mode: "onSubmit",
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useResetPasswordUseCase(setError);
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormNewPasswordData) => {
        const request: IResetPasswordPort = {
            email,
            confirmation_code,
            password: data.password,
        };
        await mutateAsync(request, {
            onSuccess: () => {
                onSuccess();
                navigate(ERouterPath.SIGN_IN_PAGE, {replace: true});
            }
        });
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