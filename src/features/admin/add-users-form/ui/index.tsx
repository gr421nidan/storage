import React from "react";
import useAddUserPresenter from "@/features/admin/add-users-form/presenter";
import Input from "@/shared/components/inputs/base-input";
import {EGrantID} from "@/shared/type/admin";
import {cn} from "@/shared/utils/cn";
import Button from "@/shared/components/buttons/button";
import {inputsStyles} from "@/shared/components/inputs/style";
import {errorTextStyles} from "@/features/auth/style";
// import CustomSelect from "@/shared/components/select";
import {formStyles} from "@/features/admin/add-users-form/style";

const AddUserForm: React.FC = () => {
    const {
        register,
        onSubmit,
        errors,
    } = useAddUserPresenter();
    const grantOptions = [
        {value: EGrantID.VIEW, label: "Просмотр"},
        {value: EGrantID.FULL_ACCESS, label: "Полный доступ"},
    ];
    return (
        <form onSubmit={onSubmit}
              className={formStyles}>
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between gap-[12px]">
                <div>
                    <Input
                        type="email"
                        placeholder="Почта"
                        className={cn(inputsStyles({error: !!errors.email}), "h-[52px] w-[696px]")}
                        {...register("email")}/>
                    {errors.email && (
                        <p className={errorTextStyles()}>{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <select
                        {...register("grant_id", { required: "Выберите права" })}
                        className={cn("h-[52px] w-[248px] border-2", errors.grant_id ? "border-red-500" : "border-purple-light")}
                    >
                        <option value="" disabled selected>
                            Права
                        </option>
                        {grantOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {/*<CustomSelect options={grantOptions} className="h-[52px] w-[248px]" defaultLabel="Права"*/}
                    {/*              isError={!!errors.grant_id} {...register("grant_id")}/>*/}
                    {errors.grant_id && (
                        <p className={errorTextStyles()}>{errors.grant_id.message}</p>
                    )}
                </div>
                <Button type="submit" className="h-[52px] w-[273px] bg-purple text-white dark:text-black dark:bg-purple-light">Сохранить</Button>
            </div>
        </form>
    );
};

export default AddUserForm;
