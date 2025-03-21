import * as yup from "yup";
import {IFormAddUserData} from "@/shared/type/admin";

const validationSchema: yup.ObjectSchema<IFormAddUserData> = yup.object().shape({
    user_id: yup
        .string()
        .required("Поле обязательно к заполнению"),
    grant_id: yup
        .number()
        .required("Поле обязательно к заполнению")

});

export default validationSchema;