import { useQuery } from "@tanstack/react-query";
import { IGetUserProfileDto } from "@/shared/type/user/get-user-profile";
import { setUserData } from "@/app/store";
import getUserProfileRepository from "@/entities/repo/user/get-user-profile";

const useGetUserProfileUseCase = () => {
    return useQuery<IGetUserProfileDto, Error>({
        queryKey: ["userProfile"],
        queryFn: async () => {
            const data = await getUserProfileRepository();
            setUserData(data.id, data.role_id, data.storage_id);
            console.log(data.role_id)
            return data;
        },

    });
};

export default useGetUserProfileUseCase;
