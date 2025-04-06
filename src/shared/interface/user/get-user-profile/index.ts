import {ERoleID} from "../../../enum/user/role";

interface IGetUserProfileDto {
    id: string;
    surname: string;
    firstname: string;
    patronymic: string | null;
    phone: string | null;
    role_id: ERoleID;
    img: string | null;
    bucket_name: string | null;
    storage_id: string;
}

export type {IGetUserProfileDto};