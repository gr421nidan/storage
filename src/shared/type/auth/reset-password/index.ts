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

type IResetPasswordDto = IResetCodeDto;


interface IFormNewPasswordData {
    password: string;
    confirm_password: string;
    confirmation_code?: string;
}

interface IFormSendCodeData {
    confirmation_code: string;
}

type IFormSendEmailData = IResetCodePort;

export type {
    IResetPasswordDto,
    IResetCodeDto,
    IResetPasswordPort,
    IResetCodePort,
    IFormNewPasswordData,
    IFormSendEmailData,
    IFormSendCodeData
};


