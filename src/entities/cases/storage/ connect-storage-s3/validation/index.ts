import * as yup from "yup";
import { IConnectStorageS3Form } from "@/shared/interface/storage";

const validationSchema: yup.ObjectSchema<IConnectStorageS3Form> = yup.object().shape({
    endpoint: yup
        .string()
        .required("Поле обязательно к заполнению"),
    bucket_name: yup
        .string()
        .required("Поле обязательно к заполнению"),
    access_key: yup
        .string()
        .required("Поле обязательно к заполнению"),
    secret_key: yup
        .string()
        .required("Поле обязательно к заполнению")
});

export default validationSchema;