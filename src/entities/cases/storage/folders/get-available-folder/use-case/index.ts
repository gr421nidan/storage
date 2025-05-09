import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import userGetAvailableFolderRepository from "@/entities/repo/storage/folders/get-available-folder";
import {IGetAvailableFolderDto} from "@/shared/interface/folders";
import { AxiosError} from "axios";
import { IApiErrorDto } from "@/shared/interface/auth";

const useGetAvailableFolderUseCase = (folderId: string) => {
    const execute = async () =>  userGetAvailableFolderRepository(folderId);
    const { data, ...rest } = useQuery<
        IGetAvailableFolderDto,
        AxiosError<IApiErrorDto>
    >({
        queryKey: [QueryKey.ACCESS_FOLDER, folderId],
        queryFn: execute,
        retry: false,
    });

    return {
        folder: data as IGetAvailableFolderDto,
        ...rest,
    };
};

export default useGetAvailableFolderUseCase;
