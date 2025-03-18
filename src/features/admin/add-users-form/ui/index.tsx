import React from "react";
import useAddUserPresenter from "@/entities/cases/user-storage/add-user/presenter";
import Input from "@/shared/components/inputs/base-input";
import {EGrantID} from "@/shared/type/admin";
import {cn} from "@/shared/utils/cn";
import Button from "@/shared/components/buttons/button";
import {inputsStyles} from "@/shared/components/inputs/style";
import {errorTextStyles} from "@/features/auth/style";
import {formStyles} from "@/features/admin/add-users-form/style";
import CustomSelect from "@/shared/components/select";

const AddUserForm: React.FC = () => {
    const {
        register,
        onSubmit,
        errors,
        watch,
        setValue,
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
                    <CustomSelect
                        options={grantOptions}
                        value={watch("grant_id")}
                        onChange={(val) => setValue("grant_id", val as EGrantID)}
                        className="h-[52px] w-[248px]"
                        isError={!!errors.grant_id}
                        defaultLabel="Права"
                    />
                    {/*<CustomSelect options={grantOptions} className="h-[52px] w-[248px]" defaultLabel="Права"*/}
                    {/*              isError={!!errors.grant_id} {...register("grant_id")}/>*/}
                    {errors.grant_id && (
                        <p className={errorTextStyles()}>{errors.grant_id.message}</p>
                    )}
                </div>
                <Button type="submit" className="h-[52px] w-[273px] bg-purple text-white dark:text-black dark:bg-purple-light ">Сохранить</Button>
            </div>
        </form>
    );
};

export default AddUserForm;
