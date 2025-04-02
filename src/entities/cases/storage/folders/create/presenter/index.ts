import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useAddUserUseCase from "../use-case";
import {ICreateStorageFolderPort} from "@/shared/interface/folders";

const useCreateFolderPresenter = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ICreateStorageFolderPort>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useAddUserUseCase();
    const onSubmit = handleSubmit(async (data: ICreateStorageFolderPort) => {
        await mutateAsync(data);
        reset();

    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useCreateFolderPresenter;
