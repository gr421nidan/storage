import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IFormUpdateUsersData} from "@/shared/type/admin";
import useUpdateUserGrantUseCase from "../use-case";

const useUpdateUsersGrantPresenter = (userId: string) => {
    const {register, watch, handleSubmit, setValue, formState: {errors}} = useForm<IFormUpdateUsersData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserGrantUseCase();
    const onSubmit = handleSubmit(async (data: IFormUpdateUsersData) => {
        await mutateAsync({data, userId});
    })

    return {
        watch,
        register,
        onSubmit,
        errors,
        setValue,
    };
};
export default useUpdateUsersGrantPresenter;
