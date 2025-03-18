import useSignUpUseCase from "../use-case";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {IFormData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {enqueueSnackbar} from "notistack";
import {AxiosError} from "axios";

const useSignUpPresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useSignUpUseCase();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormData) => {
        const formattedData = {
            ...data,
            role_id: Number(data.role_id),
        };
        try {
            await mutateAsync(formattedData, {
                onSuccess: () => {
                    navigate(ERouterPath.SIGN_IN_PAGE, {replace: true});
                }
            });
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 409) {
                    enqueueSnackbar("Пользователь с такой почтой уже зарегистрирован", {variant: "errorSnackbar"});
                }
            }
        }
    })
    return {
        register,
        onSubmit,
        errors,
    };
};
export default useSignUpPresenter;