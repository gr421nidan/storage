import {IPasswordUserChangePort, IUpdateUserPort} from "@/shared/interface/user";

interface IFieldProfile {
    name: keyof IUpdateUserPort;
    placeholder: string;
    value: string | null | undefined;
}

interface IFormPasswordChangeData extends IPasswordUserChangePort {
    passwordRepeater:string;
}
export type {IFieldProfile, IFormPasswordChangeData};