import React from "react";
import Image from "next/image";
import rob from "../public/assets/rob_blu.png";
import jelly from "@/public/assets/jelly.png";
import {cn} from "@/lib/utils";
import Title from "@/components/Title";

const AboutACM = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center py-8 sm:py-12 md:py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-0 overflow-hidden">


            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:50px_50px]",
                    "[background-image:linear-gradient(to_right,rgba(164,126,27,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(164,126,27,0.45)_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>


            {/* Left ACM - touching boundary */}
            <div className="hidden md:block absolute left-4 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-0">
                <p
                    className="new-letter text-[150px] md:text-[250px] lg:text-[350px] text-[#A47E1B] font-[600] leading-none opacity-30 md:opacity-50 lg:opacity-100"
                    style={{
                        transform: "rotate(90deg) translateX(-50%)",
                        transformOrigin: "left center",
                    }}
                >
                    ACM
                </p>
            </div>

            {/* <div className="absolute pl-[740px] pb-[700px] pointer-events-none z-10">
                <Image
                    src={jelly}
                    alt="jelly"
                    className="w-36 h-36"
                />
            </div> */}

            {/* Center Content */}
            <div className="flex-1 px-4 sm:px-6 md:px-8 lg:pl-50 lg:px-0 ml-0 md:ml-[100px] lg:ml-[200px] z-1 text-center lg:text-right">
                {/* <p className="text-[72px] font-[800] text-right pr-22">
                    About ACM
                </p> */}

                <div className="flex justify-center lg:justify-end mb-4 sm:mb-6">
                    <Title className={'text-center lg:text-right lg:mr-[80px]'} title={"About ACM"} />
                </div>



                <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-[400] mt-4 sm:mt-6 leading-[1.5] max-w-full lg:max-w-[800px] mx-auto lg:mx-0">
                    The Association for Computing Machinery (ACM) is the world's largest educational and scientific computing society. Since its inception in 1947, ACM has united educators, researchers, and professionals to advance computing as a science and a profession.
                    <br /><br />
                    It promotes the highest standards of technical excellence, fosters lifelong learning, and supports career development through a global network of conferences, publications, and professional communities. With a strong commitment to innovation and leadership, ACM continues to shape the future of computing worldwide.
                </p>
            </div>

            {/* Right Robot */}
            <div className="mt-8 lg:mt-0 lg:mr-[-70px] flex items-center justify-center lg:justify-end z-10">
                <Image
                    src={rob}
                    alt="acm"
                    className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto rotate-[-30deg]"
                    priority
                />
            </div>

        </div>
    );
};

export default AboutACM;
