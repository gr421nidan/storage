import {ERoleID} from "@/shared/emum/auth";

interface IGetUserProfileDto {
    id: string;
    surname: string;
    firstname: string;
    patronymic: string | null;
    phone: string | null;
    role_id: ERoleID;
    img: string | null;
    bucket_name: string | null;
}

export type {IGetUserProfileDto};