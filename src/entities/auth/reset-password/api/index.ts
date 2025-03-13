import { api } from "@/shared/api";
import {
    IResetCodePort,
    IResetCodeDto,
    IResetPasswordPort,
    IResetPasswordDto
} from "@/shared/type/auth";


export const sendResetCodeUser = async (
    data: IResetCodePort
): Promise<IResetCodeDto> => {
    try {
        const response = await api.post<IResetCodeDto>("/user/send-reset-code", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};


export const resetPasswordUser = async (
    data: IResetPasswordPort
): Promise<IResetPasswordDto> => {
    try {
        const response = await api.patch<IResetPasswordDto>("/user/reset-password", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
