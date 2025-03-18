import {ReactNode, useState} from 'react';
import Button from "@/shared/components/buttons/button";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import ThemeSwitcher from "@/shared/components/theme-switcher";
import OtpCodeInput from "@/shared/components/inputs/otp-input";
import Input from "@/shared/components/inputs/base-input";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import useLogout from "../../entities/cases/user/logout";

const MainPage = (): ReactNode => {
    const [otp, setOtp] = useState("");
    const logout = useLogout();
    return (
        <div>
            <Button onClick={logout} className="w-[200px] h-[52px]">Выход</Button>
            <p>Просто</p>
            <ThemeSwitcher/>
            <Button className="w-[455px] h-[52px]">🤡</Button>
            <Link to={ERouterPath.SIGN_UP_PAGE}>Регистрация</Link>
            <p>C иконками</p>
            <ButtonIcon icon="mdi:home" className="h-[52px]">Домой</ButtonIcon>
            <ButtonIcon icon="mdi:settings"/>
                <p>Просто</p>
                <div>
                    <Input placeholder="Имя*" className="w-[474px] h-[54px]"/>
                </div>
                <p>Пароль</p>
                <div>
                    <Input placeholder="Пароль*" type="password" className="w-[474px]  h-[54px]"/>
                </div>
                <div>
                    <p>Отп</p>
                    <OtpCodeInput value={otp} onChange={setOtp} numInputs={6}/>
                    <p>Чек-Бох</p>
                    <CheckboxInput name="me" value="1"  type="radio" className="w-[20px] h-[20px]"/>
                    <CheckboxInput name="me" value="2"  type="radio" className="w-[20px] h-[20px]"/>
                    <CheckboxInput name="к" value="32"  type="checkbox" className="w-[20px] h-[20px]"/>
                </div>
        </div>
    );
};

export default MainPage;
