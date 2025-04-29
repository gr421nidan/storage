import * as yup from "yup";
import {IRenameFilePort} from "@/shared/interface/files";

const validationSchema: yup.ObjectSchema<IRenameFilePort> = yup.object().shape({
    title: yup
        .string()
        .trim()
        .required("Название файла обязательно для заполнения"),
});

export default validationSchema;