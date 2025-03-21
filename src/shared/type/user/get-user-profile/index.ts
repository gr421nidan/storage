import {ERoleID} from "@/shared/type/auth";

interface IGetUserProfileDto {
    id: string;
    surname:string;
    firstname:string;
    patronymic:string;
    email:string;
    phone:string;
    birthday:string;
    role_id: ERoleID;
    storage_id: string;
}
export type {IGetUserProfileDto};