import * as yup from "yup";
import {IFormData} from "@/shared/type/auth";

const validationSchema: yup.ObjectSchema<IFormData> = yup.object().shape({
    firstname: yup
        .string()
        .required("Поле обязательно к заполнению")
        .matches(/^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно"),
    surname: yup
        .string()
        .required("Поле обязательно к заполнению")
        .matches(/^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно"),
    email: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(5, "Поле должно содержать от 5 до 255 символов")
        .max(255, "Поле должно содержать от 5 до 255 символов")
        .email("Поле введено некорректно")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Поле введено некорректно"),
    password: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(8, "Пароль должен содержать от 8 до 65 символов")
        .max(65, "Пароль должен содержать от 8 до 65 символов")
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]+$/, "Поле введено некорректно"),
    role_id: yup
        .number()
        .required("Выберите форму использования"),
});

export default validationSchema;