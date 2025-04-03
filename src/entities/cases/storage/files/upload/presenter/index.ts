import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IUploadFilePort} from "@/shared/interface/files";
import useUploadFileUseCase from "../use-case";
import {enqueueSnackbar} from "notistack";

const useUploadFilePresenter = (currentFolder?: string) => {
    const {register, handleSubmit, setValue, watch, formState: {errors}, reset} = useForm<IUploadFilePort>({
        resolver: yupResolver(validationSchema),
    });

    const {mutateAsync} = useUploadFileUseCase();
    const selectedFiles = watch("file", []);
    const onUploadFiles = (files: File[]) => {
        setValue("file", files);
    };

    const onSubmit = handleSubmit(async (data) => {
        if (data.file.length > 10) {
            enqueueSnackbar("Можно загрузить не более 10 файлов", { variant: "errorSnackbar" });
            return;
        }
        await mutateAsync({...data, folderId: currentFolder});
        reset();
    });

    return {
        register,
        onSubmit,
        errors,
        onUploadFiles,
        selectedFiles,
        setValue,
    };
};

export default useUploadFilePresenter;
