import * as yup from "yup";
import {IDeleteLogsPort} from "@/shared/interface/logs-user";

const validationSchema: yup.ObjectSchema<IDeleteLogsPort> = yup.object().shape({
    clearing_interval: yup
        .number()
        .required(),
});

export default validationSchema;