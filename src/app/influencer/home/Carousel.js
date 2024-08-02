"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-0 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-3 h-3 rounded-full  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <svg
            className="w-3 h-3 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-0 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-3 h-3 rounded-full  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <svg
            className="w-3 h-3 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
