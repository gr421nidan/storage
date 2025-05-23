import {ERoleID} from "@/shared/enum/auth";

interface ISignInPort {
    password: string;
    email: string;
}

interface ISignInDto {
    accessToken: string;
    id: string;
    role_id:ERoleID;
    storage_id:string;
}

export type {ISignInPort, ISignInDto}
