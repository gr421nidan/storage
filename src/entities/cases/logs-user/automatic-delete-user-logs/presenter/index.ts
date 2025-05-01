import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDeleteLogsPort } from "@/shared/interface/logs-user";
import validationSchema from "../validation";
import useAutomaticDeleteUserLogsUseCase from "../use-case";
import useAutomaticDeleteUsersLogsUseCase from "@/entities/cases/logs-user/automatic-delete-users-logs/use-case";

const useAutomaticDeleteLogsPresenter = (userId?: string) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IDeleteLogsPort>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            clearing_interval: undefined,
        },
    });

    const { mutateAsync: mutateAll } = useAutomaticDeleteUsersLogsUseCase();
    const { mutateAsync: mutateUser } = useAutomaticDeleteUserLogsUseCase(userId ?? "");

    const onSubmit = (forAll: boolean) =>
        handleSubmit(async (data) => {
            const mutateFn = forAll ? mutateAll : mutateUser;
            await mutateFn(data, {
                onSuccess: () => reset(),
            });
        });

    return {
        register,
        onSubmit,
        errors,
    };
};

export default useAutomaticDeleteLogsPresenter;
