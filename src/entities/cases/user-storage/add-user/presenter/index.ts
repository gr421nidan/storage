import {useForm} from "react-hook-form";
import {IFormAddUserData} from "@/shared/type/admin/add-users";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "../validation";
import useAddUserUseCase from "../use-case";

const useAddUserPresenter = () => {
    const form = useForm<IFormAddUserData>({
        resolver: yupResolver(validationSchema),
    });
    const { mutateAsync } = useAddUserUseCase();

    const onSubmit = form.handleSubmit(async (data: IFormAddUserData) => {
        const formattedData = {
            ...data,
            grant_id: Number(data.grant_id),
        };
        await mutateAsync(formattedData);
        form.reset();
    });

    return {
        form,
        onSubmit,
    };
};
export default useAddUserPresenter;
