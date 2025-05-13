import * as yup from "yup";
import {IUpdateStorageForm} from "@/shared/interface/storage";

const validationSchema: yup.ObjectSchema<IUpdateStorageForm> = yup.object().shape({
    title: yup
        .string()
        .required("Поле обязательно к заполнению"),
    description: yup
        .string()
        .required("Поле обязательно к заполнению"),
});

export default validationSchema;