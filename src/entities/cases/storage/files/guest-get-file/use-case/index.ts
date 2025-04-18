import {useQuery} from "@tanstack/react-query";
import QueryKey from "@/shared/common/enum/query-key";
import guestGetFileRepository from "@/entities/repo/storage/files/guest-get-file";
import {IGuestGetFileDto} from "@/shared/interface/files";
import formatedDate from "@/shared/utils/formatedDate";

const useGuestGetFileUseCase = (fileId: string) => {
    const execute = async () => {
        const response = await guestGetFileRepository(fileId);
        const fileData = response.data;
        return fileData
            ? {
                ...fileData,
                created_at: fileData.created_at ? formatedDate(fileData.created_at) : null,
            }
            : null;
    };

    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.GUEST_FILE, fileId],
        queryFn: execute,
    });

    return {
        file: data as IGuestGetFileDto,
        ...rest,
    };
};

export default useGuestGetFileUseCase;
