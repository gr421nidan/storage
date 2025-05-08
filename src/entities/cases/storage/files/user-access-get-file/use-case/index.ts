import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import formatedDate from "@/shared/utils/formatedDate";
import userAccessGetFileRepository from "@/entities/repo/storage/files/user-access-get-file";
import {IUserAccessGetFileDto} from "@/shared/interface/files";

const useUserAccessGetFileUseCase = (fileId: string) => {
    const execute = async () => {
        const fileData = await userAccessGetFileRepository(fileId);
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
        file: data as IUserAccessGetFileDto,
        ...rest,
    };
};

export default useUserAccessGetFileUseCase;
