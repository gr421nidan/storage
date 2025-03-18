import useSignInPresenter from "@/entities/cases/user/sign-in/presenter";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import icon from '@/assets/icon.svg';
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style";
import {
    formContainerStyles, formAuthStyles, errorTextStyles, headerStyles, linkStyles
} from "@/features/auth/style";
import React from "react";
import {IFormSignInData} from "@/shared/type/auth";

const SignInForm: React.FC = () => {
    const {
        register,
        onSubmit,
        errors,
    } = useSignInPresenter();
    const sizeInputs = "w-[474px] h-[54px]";
    const isError = (field: keyof IFormSignInData): boolean => !!errors[field];
    return (
        <form onSubmit={onSubmit}
              className={cn(formAuthStyles, "py-[40px] min-h-[697px]")}>
            <div className={cn(formContainerStyles, "gap-[30px]")}>
                <div className={headerStyles}>
                    <h2>Авторизация</h2>
                </div>
                <div className={cn(formContainerStyles, "gap-[48px]")}>
                    <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                    <div className={formContainerStyles}>
                        <div>
                            <Input
                                type="email"
                                placeholder="E-mail*"
                                className={cn(inputsStyles({error: isError("email")}), sizeInputs)}
                                {...register("email")}/>
                            {isError("email") && <p className={errorTextStyles()}>{errors.email?.message}</p>}
                        </div>
                        <div>
                            <Input
                                placeholder="Пароль*"
                                type="password"
                                className={cn(inputsStyles({error: isError("password")}), sizeInputs)}
                                {...register("password")}/>
                            {isError("password") && <p className={errorTextStyles()}>{errors.password?.message}</p>}
                        </div>
                        <div className={linkStyles}>
                            <p>Забыли пароль?</p>
                            <Link to={ERouterPath.RESET_PAGE} className="text-dark-gray">Восстановить</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className={formContainerStyles}>
                <Button
                    className="w-[165px] h-[52px]"
                    type="submit">Войти</Button>
                <div className={linkStyles}>
                    <p>Нет аккаунта?</p>
                    <Link to={ERouterPath.SIGN_UP_PAGE} className="text-dark-gray">Зарегистрироваться</Link>
                </div>
            </div>
        </form>
    );
};

export default SignInForm;
