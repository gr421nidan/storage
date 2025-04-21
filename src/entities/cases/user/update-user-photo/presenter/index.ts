import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useUpdateUserPhotoUseCase from "@/entities/cases/user/update-user-photo/use-case";
import { useState } from "react";
import {IUpdateUserPhotoPort} from "@/shared/interface/user";
import { head } from "lodash";

interface IUpdateUserPhotoPresenterProps {
    onClose: () => void;
}

const useUpdateUserPhotoPresenter = ({ onClose }: IUpdateUserPhotoPresenterProps) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IUpdateUserPhotoPort>({
        resolver: yupResolver(validationSchema),
    });
    const { mutateAsync } = useUpdateUserPhotoUseCase();

    const onSubmit = handleSubmit(async (data: IUpdateUserPhotoPort) => {
        await mutateAsync(data, {
            onSuccess: () => {
                setFileName(null);
                onClose();
            },
        });
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = head(event.target.files);
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