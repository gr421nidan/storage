interface IUpdateUserPort {
    surname?: string | null;
    firstname?: string | null;
    patronymic?: string | null;
    phone?: string | null;
}

interface IUpdateUserDto {
    message: string;
    status: number;
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
