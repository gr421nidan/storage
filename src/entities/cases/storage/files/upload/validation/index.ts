import * as yup from "yup";
import {IUploadFilePort} from "@/shared/interface/files";

const validationSchema: yup.ObjectSchema<IUploadFilePort> = yup.object().shape({
    file: yup
        .array()
        .of(yup.mixed<File>().required("Файл обязателен"))
        .min(1, "Выберите хотя бы один файл")
        .default([])
});

export default validationSchema;
