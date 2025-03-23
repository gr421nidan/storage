import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";

import {IFormUpdateUserData} from "@/shared/type/user";
import useUpdateUserUseCase from "../use-case";

const useUpdateUserPresenter = () => {
    const {register, handleSubmit, watch, setValue, formState: {errors}} = useForm<IFormUpdateUserData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserUseCase();
    const onSubmit = handleSubmit(async (data: IFormUpdateUserData) => {
        await mutateAsync(data);
    })

    return {
        register,
        onSubmit,
        errors,
        watch,
        setValue,
    };
};
export default useUpdateUserPresenter;
