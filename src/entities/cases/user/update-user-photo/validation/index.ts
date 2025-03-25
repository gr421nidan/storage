import * as yup from "yup";
import { IUpdateUserPhotoPort } from "@/shared/interface/user";

const validationSchema: yup.ObjectSchema<IUpdateUserPhotoPort> = yup.object().shape({
    file: yup
        .mixed<File>()
        .required("Выберите изображение")
});

export default validationSchema;
