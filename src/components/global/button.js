"use client";

import React from "react";

const NeoButton = ({
  children,
  className = "",
  marginTop = "sm:mt-4",
  backgroundColor = "bg-white",
  textColor = "text-black",
  textSize = "text-xs md:text-sm lg:text-base",
  display = "flex",
  alignItems = "items-center",
  justifyContent = "justify-center",
  borderRadius = "rounded-2xl",
  width = "w-full",
  hoverBackgroundColor = "hover:bg-white/80",
  borderStyle = "border-2 border-black",
  paddingX = "px-6 md:px-3",
  paddingY = "py-3 md:py-2",
  fontWeight = "font-semibold",
  textTransform = "uppercase",
  transition = "transition-all duration-300",
  hoverTranslateX = "hover:translate-x-[-4px]",
  hoverTranslateY = "hover:translate-y-[-4px]",
  hoverShadow = "hover:shadow-[4px_4px_0px_black]",
  activeTranslateX = "active:translate-x-[0px]",
  activeTranslateY = "active:translate-y-[0px]",
  activeShadow = "active:shadow-none",
  activeBorderRadius = "active:rounded-2xl",
  handleClick = () => {},
}) => {
  return (
    <button
      onClick={handleClick}
      className={`
        ${marginTop}
        ${backgroundColor}
        ${textColor}
        ${textSize}
        ${display}
        ${alignItems}
        ${justifyContent}
        ${borderRadius}
        ${width}
        ${hoverBackgroundColor}
        ${borderStyle}
        ${paddingX}
        ${paddingY}
        ${fontWeight}
        ${textTransform}
        ${transition}
        ${hoverTranslateX}
        ${hoverTranslateY}
        ${hoverShadow}
        ${activeTranslateX}
        ${activeTranslateY}
        ${activeShadow}
        ${activeBorderRadius}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default NeoButton;
