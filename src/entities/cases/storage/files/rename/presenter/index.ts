import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useRenameFileUseCase from "../use-case";
import {IRenameFileForm} from "@/shared/interface/files";

interface IRenameFilePresenterProps {
    fileId: string;
    currentTitle: string;
    onClose?: () => void;
}
const getTitleWithoutExtension = (title: string) =>
    title.replace(/\.[^/.]+$/, "");

const useRenameFilePresenter = ({ fileId, currentTitle, onClose }: IRenameFilePresenterProps) => {
    const pureTitle = getTitleWithoutExtension(currentTitle);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IRenameFileForm>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: pureTitle,
        },
    });

    const { mutateAsync } = useRenameFileUseCase(fileId);

    const onSubmit = handleSubmit(async (data) => {
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

export default useRenameFilePresenter;
