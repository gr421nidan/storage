import useSignInUseCase from "@/entities/auth/sign-in/use-case";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {IFormSignInData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/features/auth/validation-auth-form/sign-in";

const useSignInPresenter = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormSignInData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useSignInUseCase(setError);
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormSignInData) => {
        await mutateAsync(data, {onSuccess: ()=>{
                navigate(ERouterPath.MAIN_PAGE, {replace: true});
            }})
    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useSignInPresenter;