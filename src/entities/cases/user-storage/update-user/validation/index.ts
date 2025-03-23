import * as yup from "yup";
import {IFormUpdateUsersData} from "@/shared/type/admin";

const validationSchema: yup.ObjectSchema<IFormUpdateUsersData> = yup.object().shape({
    grant_id: yup
        .number()
        .required("Поле обязательно к заполнению")

});

export default validationSchema;