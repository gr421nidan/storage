import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import formatedDate from "@/shared/utils/formatedDate";
import {IGetAvailableFileDto} from "@/shared/interface/files";
import userGetAvailableFileRepository from "@/entities/repo/storage/files/get-available-file";
import { AxiosError} from "axios";
import { IApiErrorDto } from "@/shared/interface/auth";

const useGetAvailableFileUseCase = (fileId: string) => {
    const execute = async (): Promise<IGetAvailableFileDto> => {
        const fileData = await userGetAvailableFileRepository(fileId);
        return {
            ...fileData,
            created_at: formatedDate(fileData.created_at),
        };
    };

    const { data, ...rest } = useQuery<
        IGetAvailableFileDto,
        AxiosError<IApiErrorDto>
    >({
        queryKey: [QueryKey.ACCESS_FILE, fileId],
        queryFn: execute,
        retry: false,
    });

    return {
        file: data as IGetAvailableFileDto,
        ...rest,
    };
};

export default useGetAvailableFileUseCase;
