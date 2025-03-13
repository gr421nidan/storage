import { useNavigate } from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

const useLogout = () => {
    const navigate = useNavigate();

    return () => {
        localStorage.removeItem("accessToken");
        navigate(ERouterPath.SIGN_IN_PAGE, { replace: true });
    };
};
export default useLogout;