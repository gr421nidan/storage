import {useForm} from "react-hook-form";
import {IFormAddUserData} from "@/shared/type/admin/add-users";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useAddUserUseCase from "../use-case";
import {AxiosError} from "axios";
import {enqueueSnackbar} from "notistack";

const useAddUserPresenter = () => {
    const {register, handleSubmit, watch, setValue, reset, formState: {errors}} = useForm<IFormAddUserData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useAddUserUseCase();
    const onSubmit = handleSubmit(async (data: IFormAddUserData) => {
        const formattedData = {
            ...data,
            grant_id: Number(data.grant_id),
        };
        try {
            await mutateAsync(formattedData);
            reset();
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 404) {
                    enqueueSnackbar("Пользователя с такой почтой нет", {variant: 'errorSnackbar'});
                }
                if (error.response.status === 409) {
                    enqueueSnackbar("Пользователь с данной почтой уже добавлен в хранилище", {variant: 'errorSnackbar'});
                }
                if (error.response.status === 403) {
                    enqueueSnackbar("Вы не можете добавить администратора", {variant: 'errorSnackbar'});
                }
            }
        }
    })

    return {
        register,
        onSubmit,
        errors,
        watch,
        setValue,
    };
};
export default useAddUserPresenter;
