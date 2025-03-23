import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useChangePasswordUseCase from "../use-case";
import {IFormPasswordChangeData} from "@/shared/type/user";
import validationSchema from "../validation";

const useChangePasswordPresenter = () => {
    const { mutateAsync } = useChangePasswordUseCase();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormPasswordChangeData>({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = handleSubmit(async (data) => {
        const { password, newPassword } = data;
        await mutateAsync({ password, newPassword });
    });

    return {
        register,
        onSubmit,
        errors,
        watch,
    };
};

export default useChangePasswordPresenter;
