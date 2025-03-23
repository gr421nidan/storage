import * as yup from "yup";
import { IFormUpdatePhotoData } from "@/shared/type/user";

const validationSchema: yup.ObjectSchema<IFormUpdatePhotoData> = yup.object().shape({
    img: yup
        .string()
        .required("Поле обязательно к заполнению"),
});

export default validationSchema;
