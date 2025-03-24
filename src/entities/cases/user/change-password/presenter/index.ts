import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import useChangePasswordUseCase from "../use-case";
import {IFormPasswordChangeData} from "@/shared/type/user";
import validationSchema from "../validation";

interface IUseUpdateUserPasswordProps {
    onClose: () => void;
}

const useChangePasswordPresenter = ({onClose}: IUseUpdateUserPasswordProps) => {
    const {mutateAsync} = useChangePasswordUseCase();
    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<IFormPasswordChangeData>({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = handleSubmit(async (data) => {
        const {oldPassword, newPassword} = data;
        await mutateAsync({oldPassword, newPassword});
        onClose();
    });

    return {
        register,
        onSubmit,
        errors,
        watch,
        reset,
    };
};

export default useChangePasswordPresenter;
