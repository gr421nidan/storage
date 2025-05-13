import {api} from "@/shared/api";
import {IResetCodePort, IResetPasswordPort} from "@/shared/interface/auth";

export const sendResetCodeUser = async (data: IResetCodePort): Promise<void> => {
    await api.post("/user/send-reset-code", data);
};

export const resetPasswordUser = async (data: IResetPasswordPort): Promise<void> => {
    await api.patch("/user/reset-password", data);
};
