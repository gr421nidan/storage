import {ReactNode} from "react";
import Input from "@/shared/components/inputs/base-input";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {errorTextStyles} from "@/features/auth/style.ts";
import Button from "@/shared/components/buttons/button";
import useConnectStorageS3Presenter from "@/entities/cases/storage/ connect-storage-s3/presenter";
import {IConnectStorageS3Form} from "@/shared/interface/storage";

const ConnectStorageStepThree = (): ReactNode => {
    const {register, onSubmit, errors} = useConnectStorageS3Presenter();
    const inputSize = "w-[582px] h-[54px]"
    const isError = (field: keyof IConnectStorageS3Form): boolean => !!errors[field];
    const fields: { name: keyof IConnectStorageS3Form; placeholder: string }[] = [
        {name: "endpoint", placeholder: "Endpoint"},
        {name: "bucket_name", placeholder: "Регион"},
        {name: "access_key", placeholder: "Access Key ID"},
        {name: "secret_key", placeholder: "Secret Access Key"},
    ];
    return (
        <div className="px-[87px] pt-[43px] flex flex-col items-center">
            <p className="font-semibold text-2xl mb-[37px] dark:text-white">Вводим все ранее собранные данные:</p>
            <form onSubmit={onSubmit} className="flex flex-col gap-[40px] items-center">
                {fields.map(({name, placeholder}) => (
                    <div key={name}>
                        <Input
                            type="text"
                            placeholder={placeholder}
                            className={cn(inputsStyles({error: isError(name)}), inputSize)}
                            {...register(name)}
                        />
                        {errors[name] && <p className={errorTextStyles()}>{errors[name].message}</p>}
                    </div>
                ))}
                <Button type="submit" className="w-[381px] h-[52px] mt-[27px]">Проверить подключение</Button>
            </form>
        </div>
    );
};

export default ConnectStorageStepThree;
