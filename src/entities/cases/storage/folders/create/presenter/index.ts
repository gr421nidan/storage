import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useAddUserUseCase from "../use-case";
import {ICreateStorageFolderPort} from "@/shared/interface/folders";

const useCreateFolderPresenter = (currentFolder?: string, onClose?: () => void) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ICreateStorageFolderPort>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            parent_folder_id: currentFolder || null,
        },
    });
    const {mutateAsync} = useAddUserUseCase();
    const onSubmit = handleSubmit(async (data: ICreateStorageFolderPort) => {
        await mutateAsync({ ...data, parent_folder_id: currentFolder || null });
        reset();
        if (onClose) onClose();

    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useCreateFolderPresenter;
