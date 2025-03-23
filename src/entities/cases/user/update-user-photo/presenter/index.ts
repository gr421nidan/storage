import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IFormUpdatePhotoData} from "@/shared/type/user";
import useUpdateUserPhotoUseCase from "@/entities/cases/user/update-user-photo/use-case";

const useUpdateUserPhotoPresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormUpdatePhotoData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserPhotoUseCase();
    const onSubmit = handleSubmit(async (data: IFormUpdatePhotoData) => {
        await mutateAsync(data);
    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useUpdateUserPhotoPresenter;
