import * as yup from "yup";
import {IUploadFilePort} from "@/shared/interface/files";

const validationSchema: yup.ObjectSchema<IUploadFilePort> = yup.object().shape({
    file: yup
        .array()
        .of(yup.mixed<File>().required())
        .default([]),
    folderId: yup.string().optional()
});

export default validationSchema;
