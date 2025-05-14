interface IResetCodePort {
    email: string;
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
    IResetPasswordPort,
    IResetCodePort,
    IFormNewPasswordData,
    IFormSendCodeData
};
