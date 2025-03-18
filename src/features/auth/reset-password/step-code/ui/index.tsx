import React from "react";
import useStepCodePresenter from "../../../../../entities/cases/user/reset-password/step-code/presenter";
import {cn} from "@/shared/utils/cn";
import {
    formAuthStyles,
    formContainerStyles,
    headerStyles,
    linkStyles,
    textFormStyles
} from "@/features/auth/style";
import Button from "@/shared/components/buttons/button";
import icon from "@/assets/icon.svg";
import OtpCodeInput from "@/shared/components/inputs/otp-input";

interface IStepCodeProps {
    onSuccess: (confirmation_code: string) => void;
    onBack: () => void;
    email: string;
}

const StepCode: React.FC<IStepCodeProps> = ({onSuccess, onBack, email}) => {
    const {
        otp,
        setOtp,
        errors,
        onSubmit,
        setValue,
        handleResendClick,
        resendNotification
    } = useStepCodePresenter({onSuccess, email});
    return (
        <form onSubmit={onSubmit} className={cn(formAuthStyles, "min-h-[710px]")}>
            <div className="text-center">
                <h2 className={headerStyles}>Восстановление</h2>
                <h2>доступа</h2>
            </div>

            <div className={cn(formContainerStyles, "gap-6")}>
                <img
                    src={icon}
                    width="100"
                    alt="Иконка облачного хранилища"
                    className="mx-auto"
                />
                <div className={cn(textFormStyles)}>
                    На почту отправлен код подтверждения
                </div>
                <OtpCodeInput
                    value={otp}
                    onChange={(value) => {
                        setOtp(value);
                        setValue("confirmation_code", value, { shouldValidate: true });
                    }}
                    numInputs={6}
                    isError={!!errors.confirmation_code}
                />
                <div className="text-center">
                    <div className={cn(linkStyles, "mt-4")}>
                        <button
                            onClick={handleResendClick}
                            type="button"
                            className="cursor-pointer">
                            Отправить код повторно
                        </button>
                    </div>
                    {resendNotification && (
                        <p className="mt-2 text-black">{resendNotification}</p>
                    )}
                </div>
            </div>

            <div className={cn(formContainerStyles, "gap-[8px]")}>
                <Button className="w-[309px] h-[52px]" type="submit">
                    Продолжить
                </Button>
                <div className={cn(linkStyles, "mt-4")}>
                    <button type="button" onClick={onBack} className="cursor-pointer">
                        Назад
                    </button>
                </div>
            </div>
        </form>
    );
};

export default StepCode;
