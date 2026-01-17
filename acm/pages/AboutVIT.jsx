import React from "react";
import Image from "next/image";
import rob from "../public/assets/rob_org.png";
import jelly from "@/public/assets/jelly.png";
import {cn} from "@/lib/utils";
import Title from "@/components/Title";

const AboutVIT = () => {
    return (
        <div  id={'about'} className="relative w-full min-h-screen flex flex-col lg:flex-row items-center py-8 sm:py-12 md:py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-0 overflow-hidden">

            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:30px_30px] sm:[background-size:40px_40px] md:[background-size:50px_50px]",
                    "[background-image:linear-gradient(to_right,rgba(164,126,27,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(164,126,27,0.45)_1px,transparent_1px)]",
                )}
            />

            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            {/* Custom radial gradient overlay */}
            <div 
                className="pointer-events-none absolute z-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1044px] lg:h-[1057px] top-[200px] right-[-150px] sm:top-[300px] sm:right-[-250px] md:top-[400px] md:right-[-350px] lg:top-[-10px] lg:right-[-600px]"
                style={{
                    opacity: 1,
                    background: 'radial-gradient(37.26% 37.26% at 50% 50%, rgba(255, 169, 41, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)'
                }}
            />

            {/* Left Robot */}
            <div className="mb-8 lg:mb-0 lg:ml-[-70px] flex items-center justify-center lg:justify-start z-10">
                <Image
                    src={rob}
                    alt="acm"
                    className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto rotate-[30deg]"
                    priority
                />
            </div>

            {/* <div className="absolute pl-[280px] pb-[640px] pointer-events-none z-10">
                <Image
                    src={jelly}
                    alt="jelly"
                    className="w-36 h-36"
                />
            </div> */}


            {/* Center Content */}
            <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-24 z-10 text-center lg:text-left">
                {/* <p className="text-[72px] font-[800] ">
                    About VIT
                </p> */}
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                    <Title title={"About VIT"} />
                </div>

                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-[400] mt-4 sm:mt-6 leading-[1.5] max-w-full lg:max-w-[800px] mx-auto lg:mx-0">
                    Founded in 1984, VIT Pune is one of India’s top engineering institutions,
                    renowned for academic excellence, global outlook, and a strong emphasis on
                    research and innovation.
                    <br /><br />
                    The university provides world-class infrastructure, experienced faculty,
                    and industry-connected programs designed to prepare students for professional
                    success. From pioneering research to impactful engineering projects, VIT
                    empowers students to make meaningful contributions across every field.
                </p>
            </div>

            {/* Right VIT - decorative background text */}
            <div className="hidden md:block absolute right-4 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-0">
                <p
                    className="new-letter text-[150px] md:text-[300px] lg:text-[400px] text-[#A47E1B] font-[800] leading-none opacity-30 md:opacity-50 lg:opacity-100"
                    style={{
                        transform: "rotate(-90deg) translateX(50%)",
                        transformOrigin: "right center",
                    }}
                >
                    VIT
                </p>
            </div>

        </div>
    );
};

export default AboutVIT;
