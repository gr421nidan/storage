import * as yup from "yup";
import {IFormNewPasswordData} from "@/shared/type/auth";

const validationSchema: yup.ObjectSchema<IFormNewPasswordData> = yup.object().shape({
    password: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(8, "Пароль должен содержать от 8 до 65 символов")
        .max(65, "Пароль должен содержать от 8 до 65 символов")
        .matches(
            /^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]+$/,
            "Поле введено некорректно"
        ),
    confirm_password: yup
        .string()
        .required("Поле обязательно к заполнению")
        .oneOf([yup.ref("password")], "Пароли не совпадают"),

    confirmation_code: yup
        .string()
});

export default validationSchema;
