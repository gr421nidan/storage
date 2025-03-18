import useSignInUseCase from "../use-case";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {IFormSignInData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {AxiosError} from "axios";
import {enqueueSnackbar} from "notistack";

const useSignInPresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormSignInData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useSignInUseCase();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data: IFormSignInData) => {
        try {
            await mutateAsync(data, {
                onSuccess: () => {
                    navigate(ERouterPath.MAIN_PAGE, {replace: true});
                }
            });
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 404) {
                    enqueueSnackbar("Неверный е-mail или пароль", {variant: 'errorSnackbar'});
                }
                if (error.response.status === 429) {
                    enqueueSnackbar("Превышение лимита ввода пароля", {variant: 'errorSnackbar'});
                }
            }
        }
    });

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useSignInPresenter;