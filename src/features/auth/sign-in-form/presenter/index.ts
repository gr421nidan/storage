import useSignInUseCase from "@/entities/auth/sign-in/use-case";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {IFormSignInData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/entities/auth/validation-auth-form/sign-in";
import {AxiosError} from "axios";

const useSignInPresenter = () => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm<IFormSignInData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useSignInUseCase();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data: IFormSignInData) => {
        try {
            await mutateAsync(data);
            navigate(ERouterPath.MAIN_PAGE, {replace: true});
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 404 && error.response.data.type === "not_found" &&
                    (error.response.data.property === "email" || error.response.data.property === "password")) {
                    setError("email", {
                        type: "manual",
                        message: error.response.data.message
                    });
                    setError("password", {
                        type: "manual",
                        message: error.response.data.message
                    });
                }
                if (error.response.status === 429) {
                    setError("password", {
                        type: "manual",
                        message: error.response.data.message
                    });
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