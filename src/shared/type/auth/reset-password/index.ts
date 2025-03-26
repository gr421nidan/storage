import {IResetCodeDto, IResetCodePort} from "@/shared/interface/auth";

type IResetPasswordDto = IResetCodeDto;

type IFormSendEmailData = IResetCodePort;

export type {
    IResetPasswordDto,
    IFormSendEmailData,
};