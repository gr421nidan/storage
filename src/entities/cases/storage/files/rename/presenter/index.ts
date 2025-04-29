import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useRenameFileUseCase from "../use-case";
import { IRenameFilePort } from "@/shared/interface/files";

interface IRenameFilePresenterParams {
    fileId: string;
    currentTitle: string;
    onClose?: () => void;
}
const getTitleWithoutExtension = (title: string) =>
    title.replace(/\.[^/.]+$/, "");

const useRenameFilePresenter = ({ fileId, currentTitle, onClose }: IRenameFilePresenterParams) => {
    const pureTitle = getTitleWithoutExtension(currentTitle);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IRenameFilePort>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            title: pureTitle,
        },
    });

    const { mutateAsync } = useRenameFileUseCase(fileId);

    const onSubmit = handleSubmit(async (data: IRenameFilePort) => {
        await mutateAsync(
            { title: data.title },
            {
                onSuccess: () => {
                    reset();
                    onClose?.();
                },
            }
        );
    });
    return {
        register,
        onSubmit,
        errors,
    };
};

export default useRenameFilePresenter;
