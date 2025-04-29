import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useAddUserAccessUseCase from "../use-case/";
import { IAddAccessForUserPort } from "@/shared/interface/folders";

const useAddUserAccessPresenter = (folderId: string) => {
    const {  register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors } } = useForm<IAddAccessForUserPort>({
        resolver: yupResolver(validationSchema),
    });

    const { mutateAsync } = useAddUserAccessUseCase(folderId);

    const onSubmit = handleSubmit(async (data: IAddAccessForUserPort) => {
        await mutateAsync(data, {
            onSuccess: () => {
                reset();
            },
        });
    });

    return {
        register,
        onSubmit,
        setValue,
        errors,
    };
};
export default useAddUserAccessPresenter;
