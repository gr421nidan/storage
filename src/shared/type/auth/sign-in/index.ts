import {ERoleID} from "@/shared/type/auth";

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

type IFormSignInData = ISignInPort;

export type {ISignInPort, ISignInDto, IFormSignInData}
