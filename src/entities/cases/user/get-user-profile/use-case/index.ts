import {useQuery} from "@tanstack/react-query";
import getUserProfileRepository from "@/entities/repo/user/get-user-profile";
import {ERoleID} from "@/shared/type/auth";
import QueryKey from "@/shared/common/enum/query-key";
import {AUTH_TOKEN_KEY} from "@/shared/config";

const useGetUserProfileUseCase = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const { data, error, isLoading } = useQuery({
        queryKey: [QueryKey.USER_PROFILE],
        queryFn: getUserProfileRepository,
        enabled: !!token,
    });
    const isAdmin = Boolean(data?.role_id === ERoleID.ADMIN);
    return {
        data,
        error,
        isAdmin,
        isLoading
    };
};
export default useGetUserProfileUseCase;