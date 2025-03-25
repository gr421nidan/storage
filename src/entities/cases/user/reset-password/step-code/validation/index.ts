import * as yup from "yup";
import {IFormSendCodeData} from "@/shared/interface/auth";

const validationSchema: yup.ObjectSchema<IFormSendCodeData> = yup.object().shape({
    confirmation_code: yup
        .string()
        .required("Поле обязательно к заполнению")
});

export default validationSchema;
