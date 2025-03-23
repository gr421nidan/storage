import * as yup from "yup";
import {IFormUpdateUserData} from "@/shared/type/user";

const validationSchema: yup.ObjectSchema<IFormUpdateUserData> = yup.object().shape({
    surname: yup
        .string()
        .notRequired()
        .matches(/^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно"),
    firstname: yup
        .string()
        .notRequired()
        .matches(/^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно"),
    patronymic: yup
        .string()
        .notRequired()
        .matches(/^[А-Яа-яЁё -]{1,255}$/, 'Поле введено неккоретно'),
    phone: yup
        .string()
        .matches(/^(\+7|7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/, "Поле введено неккоретно")
        .notRequired()
        .min(11, 'Минимум 11 символов')
});

export default validationSchema;