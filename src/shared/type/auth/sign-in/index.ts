interface ISignInPort {
    password: string;
    email: string;
}

interface ISignInDto {
    accessToken: string;
    id: number;
}

type IFormSignInData = ISignInPort;

export type {ISignInPort, ISignInDto, IFormSignInData}
