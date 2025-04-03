import * as yup from "yup";
import {IUploadFilePort} from "@/shared/interface/files";

const validationSchema: yup.ObjectSchema<IUploadFilePort> = yup.object().shape({
    file: yup
        .array()
        .of(yup.mixed<File>().required("Выберите хотя бы один файл"))
        .min(1, "Выберите хотя бы один файл")
        .default([]),
    folderId: yup.string().optional()
});

export default validationSchema;
