import * as yup from "yup";
import {IRenameFolderForm} from "@/shared/interface/folders";

const validationSchema: yup.ObjectSchema<IRenameFolderForm> = yup.object().shape({
    title: yup
        .string()
        .trim()
        .required("Название папки обязательно для заполнения"),
});

export default validationSchema;