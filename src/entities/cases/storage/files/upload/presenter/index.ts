import {useForm} from "react-hook-form";
import {IFormUploadFilesData} from "@/shared/type/storage/upload-files";
import useUploadFileUseCase from "../use-case";

const useUploadFilePresenter = () => {
    const {mutateAsync} = useUploadFileUseCase();
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm<IFormUploadFilesData>();
    const onSubmit = handleSubmit(async (data: IFormUploadFilesData) => {
        await mutateAsync(data);
    })

    return {
        register,
        onSubmit,
        errors,
        setValue,
    };
};

export default useUploadFilePresenter;
