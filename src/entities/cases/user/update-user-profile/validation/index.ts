import * as yup from "yup";
import {IFormUpdateUserData} from "@/shared/type/user";

const validationSchema: yup.ObjectSchema<IFormUpdateUserData> = yup.object().shape({
    surname: yup
        .string()
        .matches(/^$|^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно")
        .notRequired(),
    firstname: yup
        .string()
        .matches(/^$|^[А-Яа-яЁё -]{1,255}$/, "Поле введено некорректно")
        .notRequired(),
    patronymic: yup
        .string()
        .matches(/^$|^[А-Яа-яЁё -]{1,255}$/, 'Поле введено неккоретно')
        .notRequired(),
    phone: yup
        .string()
        .matches(/^$|^(\+7|7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/, "Поле введено неккоретно")
        .notRequired()
});

export default validationSchema;