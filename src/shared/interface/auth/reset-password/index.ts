interface IResetCodePort {
    email: string;
}

interface IResetCodeDto {
    message: string;
}

interface IResetPasswordPort {
    email: string;
    confirmation_code: string;
    password: string;
}

interface IFormNewPasswordData {
    password: string;
    confirm_password: string;
    confirmation_code?: string;
}

interface IFormSendCodeData {
    confirmation_code: string;
}

export type {
    IResetCodeDto,
    IResetPasswordPort,
    IResetCodePort,
    IFormNewPasswordData,
    IFormSendCodeData
};
