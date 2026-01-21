"use client";

import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: "/img1.jpg", height: "h-[400px]" },
    { src: "/img2.jpg", height: "h-[200px]" },
    { src: "/img3.jpg", height: "h-[320px]" },
    { src: "/img4.jpg", height: "h-[250px]" },
    { src: "/img5.jpg", height: "h-[380px]" },
    { src: "/img6.jpg", height: "h-[150px]" },
    { src: "/img7.jpg", height: "h-[420px]" },
    { src: "/img8.jpg", height: "h-[280px]" },
    { src: "/img9.jpg", height: "h-[350px]" }
  ];

  return (
    <section className="w-full min-h-[823px] bg-black px-[20px] md:px-[100px] py-[80px] box-border">
      <div className="relative flex justify-center mb-[80px]">
        <img
          src="/assets/decor.png" 
          alt="decor"
          className="absolute -top-[45px] left-45 -translate-x-1/2 w-[114px] h-auto z-20 pointer-events-none"
        />
        <h1 className="text-white text-center font-extrabold text-[40px] md:text-[93px] leading-[100%] tracking-[-2px] font-inter z-10">
          Explore Our Gallery
        </h1>
      </div>

      <div className="max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px] space-y-[30px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-full ${image.height} bg-yellow-400 rounded-[18px] overflow-hidden break-inside-avoid transition-transform hover:scale-[1.02] duration-300`}
            >
              <img 
                src={image.src} 
                alt={`Gallery item ${index}`}
                loading="lazy"
                className="w-full h-full object-cover" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #facc15; 
          border-radius: 10px;
        }
        .break-inside-avoid {
          break-inside: avoid;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default Gallery;