import * as yup from "yup";
import {IRenameFilePort} from "@/shared/interface/files";

const validationSchema: yup.ObjectSchema<IRenameFilePort> = yup.object().shape({
    title: yup
        .string()
        .required(),
});

export default validationSchema;