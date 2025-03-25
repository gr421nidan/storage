import React from "react";
import useStepNewPasswordPresenter from "../../../../../entities/cases/user/reset-password/step-new-password/presenter";
import { cn } from "@/shared/utils/cn";
import {
    formAuthStyles,
    formContainerStyles,
    errorTextStyles,
    headerStyles,
    linkStyles,
} from "@/features/auth/style";
import Input from "@/shared/components/inputs/base-input";
import { inputsStyles } from "@/shared/components/inputs/style";
import Button from "@/shared/components/buttons/button";
import icon from "@/assets/icon.svg";

interface IStepNewPasswordProps {
    email: string;
    confirmation_code: string;
    onSuccess: () => void;
    onBack: () => void;
}

const StepNewPassword: React.FC<IStepNewPasswordProps> = ({
                                                              email,
                                                              confirmation_code,
                                                              onSuccess,
                                                              onBack,
                                                          }) => {
    const { register, errors, onSubmit} = useStepNewPasswordPresenter({
        email,
        confirmation_code,
        onSuccess,
    });

    return (
        <form
            onSubmit={onSubmit}
            className={cn(
                formAuthStyles,
                "min-h-[593px] flex flex-col items-center justify-center"
            )}
        >
            <div className="text-center leading-none">
                <h2 className={headerStyles}>Изменение</h2>
                <h2>пароля</h2>
            </div>

            <div className={cn(formContainerStyles, "gap-[24px] mt-4")}>
                <img
                    src={icon}
                    width="100"
                    alt="Иконка облачного хранилища"
                    className="mx-auto"
                />
                <div>
                    <Input
                        {...register("password")}
                        type="password"
                        placeholder="Новый пароль*"
                        className={cn(
                            inputsStyles({ error: !!errors.password }),
                            "w-[474px] h-[54px]"
                        )}
                    />
                    {errors.password && (
                        <p className={errorTextStyles()}>{errors.password.message}</p>
                    )}
                </div>
                <div>
                    <Input
                        {...register(
                            "confirm_password"
                        )}
                        type="password"
                        placeholder="Повтор пароля*"
                        className={cn(
                            inputsStyles({ error: !!errors.confirm_password }),
                            "w-[474px] h-[54px]"
                        )}
                    />
                    {errors.confirm_password && (
                        <p className={errorTextStyles()}>{errors.confirm_password.message}</p>
                    )}
                </div>
            </div>

            {errors.confirmation_code && (
                <p className={cn(errorTextStyles(), "text-center")}>
                    {errors.confirmation_code.message}
                </p>
            )}
            <div className={cn(formContainerStyles, "gap-[8px]")}>
                <Button className="w-[309px] h-[52px]" type="submit">
                    Сохранить
                </Button>
                <div className={cn(linkStyles, "mt-4")}>
                    <button type="button" onClick={onBack} >
                        Вернуться назад
                    </button>
                </div>
            </div>
        </form>
    );
};

export default StepNewPassword;
