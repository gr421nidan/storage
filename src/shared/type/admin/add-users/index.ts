export enum EGrantID {
    VIEW = 0,
    FULL_ACCESS = 1,
}

interface IAddUserPort {
    email: string;
    grant_id: EGrantID;
}

type IFormAddUserData = IAddUserPort;

interface IAddUserDto {
    message: string;
}

export type {IAddUserPort, IFormAddUserData, IAddUserDto}