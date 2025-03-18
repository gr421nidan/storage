import {useForm} from "react-hook-form";
import useStepEmailUseCase from "../use-case";
import {IFormSendEmailData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {AxiosError} from "axios";

interface IUseStepEmailPresenterParams {
    onSuccess: (email: string) => void;
}

const useStepEmailPresenter = ({onSuccess}: IUseStepEmailPresenterParams) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm<IFormSendEmailData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useStepEmailUseCase();
    const onSubmit = handleSubmit(async (data) => {
        try {
            await mutateAsync({email: data.email});
            onSuccess(data.email);
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
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
            }
        }
    });

    return {
        register,
        onSubmit,
        errors,
    };
};

export default useStepEmailPresenter;
