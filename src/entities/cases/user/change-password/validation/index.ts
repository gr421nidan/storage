import * as yup from "yup";
import { IFormPasswordChangeData } from "@/shared/interface/user";

const passwordRules = yup
    .string()
    .required("Поле обязательно к заполнению")
    .min(8, "Пароль должен содержать от 8 до 65 символов")
    .max(65, "Пароль должен содержать от 8 до 65 символов")
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]+$/, "Поле введено некорректно");

const validationSchema: yup.ObjectSchema<IFormPasswordChangeData> = yup.object().shape({
    oldPassword: passwordRules,
    newPassword: passwordRules,
    passwordRepeater: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Пароли не совпадают")
        .required("Поле обязательно к заполнению"),
});

export default validationSchema;
