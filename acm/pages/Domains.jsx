import React from 'react';
import Image from "next/image";
import box from '../public/assets/box.png';
import { cn } from "@/lib/utils";
import Title from "@/components/Title";

const Card = ({ domain }) => {
    return (
        <div className="relative inline-block">
            <Image
                src={box}
                alt="acm"
                className="
                    w-[280px] h-[240px]
                    sm:w-[340px] sm:h-[300px]
                    lg:w-[450px] lg:h-[400px]
                "
            />

            <p className="
                absolute inset-0 flex items-center justify-center pt-30
                text-[20px] sm:text-[26px] lg:text-[38px] sm:pt-50
                font-[700] text-black
            ">
                {domain}
            </p>

            {/* Gradient below each card */}
            <div 
                className="pointer-events-none absolute z-0 
                    w-[360px] h-[56px]
                    sm:w-[440px] sm:h-[68px]
                    md:w-[510px] md:h-[79px]
                    lg:w-[580px] lg:h-[90px]
                    top-[200px] left-[-40px]
                    sm:top-[310px] sm:left-[-50px]
                    md:top-[330px] md:left-[-58px]
                    lg:top-[340px] lg:left-[-65px]"
                style={{
                    opacity: 1,
                    background: 'radial-gradient(37.26% 37.26% at 50% 50%, rgba(255, 169, 41, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)'
                }}
            />
        </div>
    );
};


const Domains = () => {
    return (
        <div
            id="domains"
            className="relative w-full flex flex-col p-6 sm:p-10 mt-10 items-center overflow-hidden"
        >

            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:50px_50px]",
                    "[background-image:linear-gradient(to_right,rgba(164,126,27,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(164,126,27,0.45)_1px,transparent_1px)]",
                )}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            <Title title={'Domains'} />
            
            <div className="
                relative z-10 w-full
                grid grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-x-8 gap-y-12
                justify-items-center
            ">
                <Card domain="TECH" />
                <Card domain="RESEARCH" />
                <Card domain="DESIGN" />
                <Card domain="CODING" />
                <Card domain="AIML" />
                <Card domain="EXTRA" />
            </div>

        </div>
    );
};

export default Domains;
