interface IUpdateUserPort {
    surname?: string;
    firstname?: string;
    patronymic?: string
    phone?: string;
}

interface IUpdateUserDto {
    message: string;
}

interface IUpdateUserPhotoPort {
    file: File;
}

interface IPasswordUserChangePort {
    oldPassword: string;
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
    IFormPasswordChangeData
};
