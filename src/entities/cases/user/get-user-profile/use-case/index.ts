import {useQuery} from "@tanstack/react-query";
import getUserProfileRepository from "@/entities/repo/user/get-user-profile";
import {ERoleID} from "@/shared/emum/user";
import QueryKey from "@/shared/common/enum/query-key";
import {AUTH_TOKEN_KEY} from "@/shared/config";

const useGetUserProfileUseCase = () => {
    const execute = getUserProfileRepository;
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const { data, ...rest } = useQuery({
        queryKey: [QueryKey.USER_PROFILE],
        queryFn: execute,
        enabled: !!token,
        select: (data) => {
            const isAdmin = data?.role_id === ERoleID.ADMIN;
            return {...data, isAdmin};
        }
    });
    return {
        data,
        ...rest
    };
};
export default useGetUserProfileUseCase;