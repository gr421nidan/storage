import * as yup from "yup";
import {IFormPasswordChangeData} from "@/shared/type/user";

const validationSchema: yup.ObjectSchema<IFormPasswordChangeData> = yup.object().shape({
    oldPassword: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(8, "Пароль должен содержать от 8 до 65 символов")
        .max(65, "Пароль должен содержать от 8 до 65 символов")
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]+$/, "Поле введено некорректно"),
    newPassword: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(8, "Пароль должен содержать от 8 до 65 символов")
        .max(65, "Пароль должен содержать от 8 до 65 символов")
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]+$/, "Поле введено некорректно"),
    passwordRepeater: yup.string()
        .oneOf([yup.ref("newPassword")], "Пароли не совпадают")
        .required("Поле обязательно к заполнению"),
});

export default validationSchema;