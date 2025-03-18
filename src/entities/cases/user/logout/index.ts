import { useNavigate } from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {clearUserData} from "@/app/store";

const useLogout = () => {
    const navigate = useNavigate();
    return () => {
        localStorage.removeItem("accessToken");
        clearUserData();
        navigate(ERouterPath.SIGN_IN_PAGE, { replace: true });
    };
};
export default useLogout;