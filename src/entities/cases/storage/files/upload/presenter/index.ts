import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IUploadFilePort} from "@/shared/interface/files";
import useUploadFileUseCase from "../use-case";

const useUploadFilePresenter = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const {register, handleSubmit, setValue, watch, formState: {errors}, reset} = useForm<IUploadFilePort>({
        resolver: yupResolver(validationSchema),
    });

    const {mutateAsync} = useUploadFileUseCase();
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        reset();
        setModalOpen(false);
    };
    const selectedFiles = watch("file", []);
    const onUploadFiles = (files: File[]) => {
        setValue("file", files);
    };

    const onSubmit = handleSubmit(async (data) => {
        await mutateAsync({file: data.file});
        closeModal();
    });

    return {
        register,
        onSubmit,
        errors,
        isModalOpen,
        openModal,
        closeModal,
        onUploadFiles,
        selectedFiles,
        setValue
    };
};

export default useUploadFilePresenter;
