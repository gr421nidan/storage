import * as yup from "yup";
import {IAddAccessForUserPort} from "@/shared/interface/folders";

const validationSchema: yup.ObjectSchema<IAddAccessForUserPort> = yup.object().shape({
    user_id: yup
        .string()
        .required("Поле обязательно к заполнению"),
});

export default validationSchema;