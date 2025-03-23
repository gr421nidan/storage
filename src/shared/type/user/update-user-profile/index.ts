interface IUpdateUserPort {
    surname: string;
    firstname: string;
    patronymic?: string;
    phone?: string;
}

type IFormUpdateUserData = IUpdateUserPort;

interface IUpdateUserDto {
    message: string;
}

interface IUpdateUserPhotoPort {
    img: string;
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
