"use client";

import React from 'react';

const Gallery = () => {
  return (
    <section className="w-full min-h-[823px] bg-black px-[20px] md:px-[100px] py-[80px] box-border">
      
      {/* -------- TITLE WRAPPER -------- */}
      <div className="relative flex justify-center mb-[80px]">
        
        {/* Decorative Image - In Next.js, files in /public are served from / */}
        <img
          src="/assets/decor.png" 
          alt="decor"
          className="absolute -top-[48px] left-60 -translate-x-1/2 w-[114px] h-auto"
        />

        {/* Title */}
        <h1
          className="text-white text-center font-extrabold 
                     text-[40px] md:text-[93px] leading-[100%] tracking-[-2px] 
                     font-inter z-10">
          Explore Our Gallery
        </h1>
      </div>

      {/* -------- GALLERY GRID -------- */}
      {/* Using a masonry-style layout with columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-[30px]">
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-[30px]">
          <div
            className="rounded-[18px] h-[320px] bg-cover bg-center transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: "url('/assets/box.png')" }}
          />
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
          <div
            className="rounded-[18px] h-[320px] bg-cover bg-center transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: "url('/img_acm.JPG')" }}
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-[30px]">
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
          <div className="bg-yellow-400 rounded-[18px] h-[320px] transition-transform hover:scale-[1.02]" />
        </div>

      </div>
    </section>
  );
};

export default Gallery;