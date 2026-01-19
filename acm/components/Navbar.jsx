"use client";
import React, { useState } from "react";
import Image from "next/image";
import nav_logo from "../public/assets/nav_logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMenu();
    };

    return (
        <nav className="relative flex items-center justify-between py-3 sm:py-4 px-4 sm:px-8 md:px-12 z-50">
            <div className="text-lg font-bold">
                <Image src={nav_logo} alt={"ACM"} className={'w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]'}/>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                <a href={'#home'} onClick={(e) => handleSmoothScroll(e, '#home')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">Home</a>
                <a href={'#about'} onClick={(e) => handleSmoothScroll(e, '#about')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">About</a>
                <a href={'#domains'} onClick={(e) => handleSmoothScroll(e, '#domains')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">Domains</a>
                <p onClick={(e) => handleSmoothScroll(e, '#events')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">Events</p>
                <p onClick={(e) => handleSmoothScroll(e, '#gallery')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">Gallery</p>
                <p onClick={(e) => handleSmoothScroll(e, '#team')} className="text-[18px] xl:text-[22px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors">Team</p>

                <div className="bg-[#EDC531] rounded-[5px] hover:bg-[#DBB42C] transition-colors">
                    <p className="text-[20px] xl:text-[25px] font-bold text-black px-3 xl:px-4 py-2 cursor-pointer">
                        Contact Us
                    </p>
                </div>
            </div>

            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 focus:outline-none"
                aria-label="Toggle menu"
            >
                <span
                    className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0' : ''
                    }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <a 
                        href={'#home'} 
                        onClick={(e) => handleSmoothScroll(e, '#home')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        Home
                    </a>
                    <a 
                        href={'#about'} 
                        onClick={(e) => handleSmoothScroll(e, '#about')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        About
                    </a>
                    <a 
                        href={'#domains'} 
                        onClick={(e) => handleSmoothScroll(e, '#domains')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        Domains
                    </a>
                    <p 
                        onClick={(e) => handleSmoothScroll(e, '#events')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        Events
                    </p>
                    <p 
                        onClick={(e) => handleSmoothScroll(e, '#gallery')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        Gallery
                    </p>
                    <p 
                        onClick={(e) => handleSmoothScroll(e, '#team')}
                        className="text-[24px] font-bold cursor-pointer hover:text-[#A47E1B] transition-colors"
                    >
                        Team
                    </p>

                    <div className="bg-[#EDC531] rounded-[5px] hover:bg-[#DBB42C] transition-colors mt-4">
                        <p className="text-[24px] font-bold text-black px-6 py-3 cursor-pointer">
                            Contact Us
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
