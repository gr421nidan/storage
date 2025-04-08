import {ERoleID} from "@/shared/enum/auth";

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

interface IUpdateUserDto {
    message: string;
}
export type {IGetUserProfileDto, IUpdateUserDto};