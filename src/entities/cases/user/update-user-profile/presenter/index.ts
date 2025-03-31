import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IFormUpdateUserData} from "@/shared/type/user";
import useUpdateUserUseCase from "../use-case";

const useUpdateUserPresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormUpdateUserData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserUseCase();
    const onSubmit = handleSubmit(async (data: IFormUpdateUserData) => {
        const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([, value]) => {
                return value !== "" && value !== null && value !== undefined;
            })
        );
        await mutateAsync(cleanedData);
    });

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useUpdateUserPresenter;
