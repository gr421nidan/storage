import React, { useState } from "react";
import NavbarWidget from "@/widgets/navbar";
import HeaderWidget from "@/widgets/header";
import SidebarWidget from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <HeaderWidget toggleNavbar={toggleNavbar} className="fixed top-0 w-full z-10" />
            <NavbarWidget isOpen={isNavbarOpen} className="flex fixed left-0 " />
            <main className="flex pl-[193px] pr-[430px] pt-[166px] ">
                <Outlet />
            </main>

            <SidebarWidget className="fixed right-0 top-0 h-screen z-20" />


        </div>
    );
};

export default MainLayout;