import {Store} from "@tanstack/store";
import {ERoleID} from "@/shared/type/auth";

interface IUserState {
    user_id: string | null;
    role_id: ERoleID | null;
    storage_id: string | null;
}

const userStore = new Store<IUserState>({
    user_id:  null,
    role_id: null,
    storage_id: null,
});


const setUserData = (user_id: string, role_id: ERoleID, storage_id: string) => {
    userStore.setState((prev) => ({
        ...prev,
        user_id,
        role_id,
        storage_id,
    }));
};

 const clearUserData = () => {
    userStore.setState(() => ({
        user_id: null,
        role_id: null,
        storage_id: null,
    }));
};

export { setUserData, clearUserData, userStore };