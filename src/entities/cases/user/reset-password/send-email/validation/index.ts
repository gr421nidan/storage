import * as yup from "yup";
import {IFormSendEmailData} from "@/shared/type/auth";

const validationSchema: yup.ObjectSchema<IFormSendEmailData> = yup.object().shape({
    email: yup
        .string()
        .required("Поле обязательно к заполнению")
        .min(5, "Поле должно содержать от 5 до 255 символов")
        .max(255, "Поле должно содержать от 5 до 255 символов")
        .email("Поле введено некорректно")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Поле введено некорректно"),
});

export default validationSchema;
