
import {useForm} from "react-hook-form";
import {IFormAddUserData} from "@/shared/type/admin/add-users";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../../../../entities/admin/add-user/validation-add-user-form";
import useAddUserUseCase from "@/entities/admin/add-user/use-case";

const useAddUserPresenter = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormAddUserData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useAddUserUseCase(setError);
    const onSubmit = handleSubmit(async (data: IFormAddUserData) => {
        const formattedData = {
            ...data,
            grant_id: Number(data.grant_id),
        };
        await mutateAsync(formattedData);
    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useAddUserPresenter;
