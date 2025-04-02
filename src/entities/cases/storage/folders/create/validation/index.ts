import * as yup from "yup";
import {ICreateStorageFolderPort} from "@/shared/interface/folders";

const validationSchema: yup.ObjectSchema<ICreateStorageFolderPort> = yup.object().shape({
    title: yup
        .string()
        .required("Поле обязательно к заполнению"),
    parent_folder_id: yup
        .string()
        .nullable()
});

export default validationSchema;