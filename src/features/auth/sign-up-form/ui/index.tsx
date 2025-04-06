import useSignUpPresenter from "@/entities/cases/user/sign-up/presenter";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import icon from '@/assets/icon.svg';
import {inputsStyles} from "@/shared/components/inputs/style";
import {cn} from "@/shared/utils/cn";

import {
    formContainerStyles,
    formAuthStyles,
    inputContainerStyles,
    errorTextStyles,
    headerStyles,
    flexCol,
    linkStyles, radioContainerStyles
} from "@/features/auth/style";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import React from "react";
import {IFormData} from "@/shared/type/auth";
import {ERoleID} from "@/shared/enum/user";

const SignUpForm: React.FC = () => {
    const sizeInputs = "w-[474px] h-[54px]";
    const {register, onSubmit, errors} = useSignUpPresenter();
    const isError = (field: keyof IFormData): boolean => !!errors[field];

    return (
        <form onSubmit={onSubmit}
              className={cn(formAuthStyles, "min-h-[842px]")}>
            <div className={formContainerStyles}>
                <div className={headerStyles}>
                    <h2>Регистрация</h2>
                </div>
                <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                <div className={inputContainerStyles}>
                    <div>
                        <Input
                            placeholder="Имя*"
                            className={cn(inputsStyles({error: isError("firstname")}), sizeInputs)}
                            {...register("firstname")}/>
                        {isError("firstname") && <p className={errorTextStyles()}>{errors.firstname?.message}</p>}
                    </div>
                    <div>
                        <Input
                            placeholder="Фамилия*"
                            className={cn(inputsStyles({error: isError("surname")}), sizeInputs)}
                            {...register("surname")}/>
                        {isError("surname") && <p className={errorTextStyles()}>{errors.surname?.message}</p>}
                    </div>
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

                    <div className={`${flexCol} gap-[23px] justify-start`}>
                        {([ERoleID.USER, ERoleID.ADMIN] as number[]).map((role) => (
                            <label key={role} className={radioContainerStyles}>
                                <CheckboxInput
                                    value={role}
                                    type="radio"
                                    className={cn(
                                        inputsStyles({variant: "check", error: isError("role_id")}),
                                        "w-[20px] h-[20px]")}
                                    {...register("role_id")}
                                    name="role_id"/>
                                <span className={isError("role_id") ? errorTextStyles({error: true}) : ""}>
                                    {role === ERoleID.USER ? "Для личного использования" : "Для совместного использования"}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className={formContainerStyles}>
                <Button
                    className="w-[328px] h-[52px]"
                    type="submit"
                >Зарегистрироваться</Button>
                <div className={linkStyles}>
                    <p>Уже есть аккаунт?</p>
                    <Link to={ERouterPath.SIGN_IN_PAGE} className="text-dark-gray">Войти</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
