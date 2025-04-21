import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useCreateFolderUseCase from "../use-case";
import {ICreateStorageFolderPort} from "@/shared/interface/folders";

interface ICreateFolderPresenterParams {
    currentFolder?: string;
    onClose?: () => void;
}
const useCreateFolderPresenter = ({ currentFolder, onClose }: ICreateFolderPresenterParams = {}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ICreateStorageFolderPort>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            parent_folder_id: currentFolder || null,
        },
    });
    const {mutateAsync} = useCreateFolderUseCase();
    const onSubmit = handleSubmit(async (data: ICreateStorageFolderPort) => {
        await mutateAsync(
            { ...data, parent_folder_id: currentFolder || null },
            {
                onSuccess: () => {
                    reset();
                    if (onClose) onClose();
                },
            }
        );
    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useCreateFolderPresenter;
