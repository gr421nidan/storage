import {useQuery} from "@tanstack/react-query";
import getUserProfileRepository from "@/entities/repo/user/get-user-profile";
import {AUTH_TOKEN_KEY} from "@/shared/config";

const useGetUserProfileUseCase = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    const { data, error } = useQuery({
        queryKey: ["userProfile"],
        queryFn: getUserProfileRepository,
        enabled: !!token,
    });

    return { data, error};
};
export default useGetUserProfileUseCase;