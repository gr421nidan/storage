import { useForm } from "react-hook-form";
import {useStepEmailUseCase} from "@/entities/auth/reset-password/use-case";
import {IFormSendEmailData} from "@/shared/type/auth";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/features/auth/validation-auth-form/reset-password/step-email";

interface IUseStepEmailPresenterParams {
    onSuccess: (email: string) => void;
}

const useStepEmailPresenter = ({ onSuccess }: IUseStepEmailPresenterParams) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IFormSendEmailData>({
        resolver: yupResolver(validationSchema),
    });
    const { mutateAsync } = useStepEmailUseCase(setError);
    const onSubmit = handleSubmit(async (data) => {
        await mutateAsync({ email: data.email });
        onSuccess(data.email);
    });

    return {
        register,
        onSubmit,
        errors,
    };
};

export default useStepEmailPresenter;
