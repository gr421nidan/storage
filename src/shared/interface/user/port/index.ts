interface IUpdateUserPort {
    surname?: string | null;
    firstname?: string | null;
    patronymic?: string | null;
    phone?: string | null;
}
interface IUpdateUserPhotoPort {
    file: File;
}

interface IPasswordUserChangePort {
    oldPassword: string;
    newPassword: string;
}

export type {IUpdateUserPort, IUpdateUserPhotoPort, IPasswordUserChangePort};