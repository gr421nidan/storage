import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import formatedDate from "@/shared/utils/formatedDate";
import {IGetAvailableFileDto} from "@/shared/interface/files";
import userGetAvailableFileRepository from "@/entities/repo/storage/files/get-available-file";

const useGetAvailableFileUseCase = (fileId: string) => {
    const execute = async () => {
        const fileData = await userGetAvailableFileRepository(fileId);
        return fileData
            ? {
                ...fileData,
                created_at: fileData.created_at ? formatedDate(fileData.created_at) : null,
            }
            : null;
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.ACCESS_FILE, fileId],
        queryFn: execute,
    });

    return {
        file: data as IGetAvailableFileDto,
        ...rest,
    };
};

export default useGetAvailableFileUseCase;
