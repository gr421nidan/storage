interface IUpdateUserPort {
    surname?: string | null;
    firstname?: string | null;
    patronymic?: string | null;
    phone?: string | null;
}

type IFormUpdateUserData = IUpdateUserPort;

interface IUpdateUserDto {
    message: string;
    status: number;
}

interface IUpdateUserPhotoPort {
    file: File;
}

type IFormUpdatePhotoData = IUpdateUserPhotoPort;

interface IPasswordUserChangePort {
    password: string;
    newPassword: string;
}
interface IFormPasswordChangeData extends IPasswordUserChangePort {
    passwordRepeater:string;
}

export type {
    IUpdateUserPort,
    IUpdateUserDto,
    IUpdateUserPhotoPort,
    IPasswordUserChangePort,
    IFormUpdateUserData,
    IFormUpdatePhotoData,
    IFormPasswordChangeData
};
