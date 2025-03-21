import { createContext, PropsWithChildren, useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import { IGetUserProfileDto } from "@/shared/type/user/get-user-profile";
import { setUserData } from "@/app/store";
import getUserProfileRepository from "@/entities/repo/user/get-user-profile";
import { AUTH_TOKEN_KEY } from "@/shared/config";

interface IUserProfileContextProps {
    isLoading: boolean;
    isError: boolean;
    user: IGetUserProfileDto | null;
}

const UserProfileContext = createContext<IUserProfileContextProps>({
    isLoading: false,
    isError: false,
    user: null,
});

const UserProfileProvider = ({ children }: PropsWithChildren) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    const { data, isLoading, isError } = useQuery<IGetUserProfileDto>({
        queryKey: ["userProfile"],
        queryFn: getUserProfileRepository,
        enabled: !!token, // Запрос выполняется только если токен есть
    });

    useEffect(() => {
        if (data) {
            setUserData(data.id, data.role_id, data.storage_id); // Заполняем стор
        }
    }, [data]);

    return (
        <UserProfileContext.Provider value={{ isLoading, isError, user: data ?? null }}>
            {children}
        </UserProfileContext.Provider>
    );
};

export { UserProfileContext, UserProfileProvider };
