import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import {IAddAccessForUserPort} from "@/shared/interface/folders";
import useAddAccessForUserUseCase from "../use-case";

const useAddUserAccessPresenter = (folderId: string) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        watch,
        formState: {errors}
    } = useForm<IAddAccessForUserPort>({
        resolver: yupResolver(validationSchema),
    });

    const {mutateAsync} = useAddAccessForUserUseCase(folderId);

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
        control,
        watch,
    };
};
export default useAddUserAccessPresenter;
