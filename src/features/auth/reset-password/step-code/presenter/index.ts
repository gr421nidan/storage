import {useEffect, useState} from "react";
import { sendResetCodeUser } from "@/entities/auth/reset-password/api";
import {IFormSendCodeData, IResetCodePort} from "@/shared/type/auth/reset-password";
import validationSchema from "@/features/auth/validation-auth-form/reset-password/step-code";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

interface IUseStepCodeFormParams {
    onSuccess: (confirmation_code: string) => void;
    email: string;
}

const useStepCodePresenter = ({ onSuccess, email }: IUseStepCodeFormParams) => {
    const [resendNotification, setResendNotification] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IFormSendCodeData>({
        resolver: yupResolver(validationSchema),
    });
    const [otp, setOtp] = useState("");
    useEffect(() => {
        register("confirmation_code", { required: true });
    }, [register]);

    const onSubmit = handleSubmit(async (data) => {
        onSuccess(data.confirmation_code);
    });


    const handleResendClick = async () => {
        try {
            await sendResetCodeUser({ email } as IResetCodePort);
            setResendNotification("Код отправлен повторно");
            setTimeout(() => setResendNotification(""), 3000);
        } catch (error) {
            setResendNotification("Ошибка при отправке кода");
            setTimeout(() => setResendNotification(""), 3000);
        }
    };

    return {
        register,
        onSubmit,
        errors,
        setValue,
        handleResendClick,
        resendNotification,
        otp,
        setOtp
    };
};
export default useStepCodePresenter;