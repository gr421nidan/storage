import React, { useState } from "react";
import NavbarWidget from "@/widgets/navbar";
import { Outlet } from "react-router-dom";
import HeaderWidget from "@/widgets/header";

const MainSecondaryLayout: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <HeaderWidget toggleNavbar={toggleNavbar}/>
            <NavbarWidget isOpen={isNavbarOpen} />
            <main className=" pl-[193px] pr-[430px] pt-[166px]">
                <Outlet />
            </main>
        </div>
    );
};

export default MainSecondaryLayout;