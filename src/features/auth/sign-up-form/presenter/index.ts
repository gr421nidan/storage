import useSignUpUseCase from "@/entities/auth/sign-up/use-case";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {IFormData} from "@/shared/type/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "@/features/auth/validation-auth-form/sign-up";

const useSignUpPresenter = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormData>({
        resolver: yupResolver(validationSchema),
    });
    const { mutateAsync } = useSignUpUseCase(setError);
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormData) => {
        const formattedData = {
            ...data,
            role_id: Number(data.role_id),
        };
        await mutateAsync(formattedData, {onSuccess: ()=>{
                navigate(ERouterPath.SIGN_IN_PAGE, {replace: true});
            }})
    })
    return {
        register,
        onSubmit,
        errors,
    };
};
export default useSignUpPresenter;