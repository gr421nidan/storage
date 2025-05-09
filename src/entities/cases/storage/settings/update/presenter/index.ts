import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useUpdateUserUseCase from "../use-case";
import {IUpdateStorageForm} from "@/shared/interface/storage";

const useUpdateStoragePresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IUpdateStorageForm>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserUseCase();
    const onSubmit = handleSubmit(async (data: IUpdateStorageForm) => {
        await mutateAsync(data);
    });

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useUpdateStoragePresenter;
