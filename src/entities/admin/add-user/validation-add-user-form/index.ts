import * as yup from "yup";
import {IFormAddUserData} from "@/shared/type/admin";

const validationSchema: yup.ObjectSchema<IFormAddUserData> = yup.object().shape({
    email: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(5, "Поле должно содержать от 5 до 255 символов")
        .max(255, "Поле должно содержать от 5 до 255 символов")
        .email("Поле введено некорректно")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Поле введено некорректно"),
    grant_id: yup
        .number()
        .required("Поле обязательно к заполнению")

});

export default validationSchema;