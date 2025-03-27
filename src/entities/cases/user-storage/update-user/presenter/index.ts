import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IFormUpdateUsersData} from "@/shared/type/admin";
import useUpdateUserGrantUseCase from "../use-case";

const useUpdateUsersGrantPresenter = (userId: string, onClose: () => void) => {
    const {register, watch, handleSubmit, setValue, formState: {errors}, reset} = useForm<IFormUpdateUsersData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserGrantUseCase();
    const onSubmit = handleSubmit(async (data: IFormUpdateUsersData) => {
        await mutateAsync({data, userId});
        reset();
        onClose();
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
