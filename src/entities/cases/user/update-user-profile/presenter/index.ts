import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useUpdateUserUseCase from "../use-case";
import mapValues from 'lodash/mapValues';
import {IUpdateUserPort} from "@/shared/interface/user";

const useUpdateUserPresenter = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IUpdateUserPort>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useUpdateUserUseCase();
    const onSubmit = handleSubmit(async (data: IUpdateUserPort) => {
        const cleanedData =  mapValues(data, (value) => {
            return value === "" || value === undefined ? null : value;
        });
        await mutateAsync(cleanedData);
    });

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useUpdateUserPresenter;
