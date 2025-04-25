import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import useRenameFolderUseCase from "../use-case";
import {IRenameStorageFolderPort} from "@/shared/interface/folders";
import validationSchema from "../validation";

interface IRenameFolderPresenterParams {
    folderId: string;
    currentTitle: string;
    onClose?: () => void;
}

const useRenameFolderPresenter = ({folderId, currentTitle, onClose}: IRenameFolderPresenterParams) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IRenameStorageFolderPort>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: currentTitle,
        },
    });

    const {mutateAsync} = useRenameFolderUseCase(folderId);

    const onSubmit = handleSubmit(async (data: IRenameStorageFolderPort) => {
        await mutateAsync(data, {
            onSuccess: () => {
                reset();
                onClose?.();
            },
        });
    });

    return {
        register,
        onSubmit,
        errors,
    };
};

export default useRenameFolderPresenter;
