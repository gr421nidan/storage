import * as yup from "yup";
import {IRenameStorageFolderPort} from "@/shared/interface/folders";

const validationSchema: yup.ObjectSchema<IRenameStorageFolderPort> = yup.object().shape({
    title: yup
        .string()
        .required(),
});

export default validationSchema;