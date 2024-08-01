"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigation = ({ items }) => {
  const pathname = usePathname();

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-0 border-t-2 border-black bg-yellow-300"
    >
      <div id="tabs" className="flex justify-around items-center">
        {items.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <Link href={item.path} key={index} passHref>
              <div
                className={`w-full text-center py-2 cursor-pointer h-[7vh] `}
              >
                <div
                  className={`p-2 rounded-full inline-flex justify-center items-center transition-all duration-75 ease-in-out ${
                    isActive
                      ? "bg-[#7df19c] border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                      : "hover:bg-[#7df19c]/30"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-6"
                  >
                    {item.svg}
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BottomNavigation;
