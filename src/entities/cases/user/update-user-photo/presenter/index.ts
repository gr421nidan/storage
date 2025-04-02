import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useUpdateUserPhotoUseCase from "@/entities/cases/user/update-user-photo/use-case";
import { useState } from "react";
import {IUpdateUserPhotoPort} from "@/shared/interface/user";

interface IUseUpdateUserPhotoPresenterProps {
    onClose: () => void;
}

const useUpdateUserPhotoPresenter = ({ onClose }: IUseUpdateUserPhotoPresenterProps) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IUpdateUserPhotoPort>({
        resolver: yupResolver(validationSchema),
    });
    const { mutateAsync } = useUpdateUserPhotoUseCase();

    const onSubmit = handleSubmit(async (data: IUpdateUserPhotoPort) => {
        await mutateAsync(data);
        setFileName(null);
        onClose();
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setFileName(file.name);
            setValue("file", file);
        }
    };

    return {
        register,
        onSubmit,
        errors,
        handleFileChange,
        fileName,
    };
};

export default useUpdateUserPhotoPresenter;
