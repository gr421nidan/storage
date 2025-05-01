import React from "react";
import icon from "@/assets/icon.svg";
import Button from "@/shared/components/buttons/button";
const NotFoundPage: React.FC = () => {
    return (
        <div className="flex">
            <div className=" w-[550px] border-2 border-purple-light h-[550px] rounded-full flex items-center justify-center bg-purple-gr">
                <img src={icon} width="220" alt="Иконка облачного хранилища"/>
            </div>
            <div className="flex flex-col items-center text-white">
                <p className="font-bold text-[228px] font-manrope">404</p>
                <p className="text-[64px] font-light">Упс! Эту страницу мы<br/>еще не придумали.</p>
                <Button className="w-[287px] h-[71px]">Вернуться назад</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;