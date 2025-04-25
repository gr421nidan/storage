interface IGetUserDto {
    id: string
    img: string | null;
    surname: string;
    firstname: string;
    patronymic: string | null;
    grant_id: number;
    is_active: boolean;
}

export type {IGetUserDto};