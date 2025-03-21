import React from "react";
import {formStyles} from "@/features/user/update-profile-form/style.ts";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import CustomDatePicker from "@/shared/components/datePicker";

const UserProfileForm: React.FC = () => {
const inputSize="h-[52px] w-[474px]"
    return (
        <form className={formStyles}>
            <Input
                type="text"
                placeholder="Имя"
                className={cn(inputsStyles(), inputSize)}
               />
            <Input
                type="text"
                placeholder="Фамилия"
                className={cn(inputsStyles(), inputSize)}
            />
            <Input
                type="text"
                placeholder="Отчество"
                className={cn(inputsStyles(), inputSize)}
            />
            <Input
                type="tel"
                placeholder="Телефон"
                className={cn(inputsStyles(), inputSize)}
            />
            <CustomDatePicker placeholder="Дата рождения" className={inputSize}/>
        </form>
    );
};

export default UserProfileForm;
