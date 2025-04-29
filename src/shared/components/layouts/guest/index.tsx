import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import HeaderGuestWidget from "@/widgets/header-guest";
import NavbarGuestWidget from "@/widgets/navbar-guest";

const GuestLayout: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderGuestWidget toggleNavbar={toggleNavbar} />
            <NavbarGuestWidget isOpen={isNavbarOpen} />
            <main className="pl-[193px] pr-[54px] pt-[166px]">
                <h2>Материалы для просмотра</h2>
                <div className="h-1 mt-4 mb-[40px] bg-purple"></div>
                <Outlet />
            </main>
        </div>
    );
};

export default GuestLayout;
