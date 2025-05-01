import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IConnectStorageS3Form} from "@/shared/interface/storage";
import useConnectStorageS3UseCase from "../use-case";

const useConnectStorageS3Presenter = () => {
    const {mutateAsync} = useConnectStorageS3UseCase();
    const {register, handleSubmit, formState: {errors}} = useForm<IConnectStorageS3Form>({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = handleSubmit(async (data) => {
        await mutateAsync(data);
    });

    return {
        register,
        onSubmit,
        errors,
    };
};

export default useConnectStorageS3Presenter;