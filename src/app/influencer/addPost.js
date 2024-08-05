"use client";
import NeoBorder from "@/components/global/border";
import BottomSheet from "@/components/global/bottom-sheet/bottom-sheet";
import NeoButton from "@/components/global/button";
import confetti from "canvas-confetti";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addpost } from "@/_actions/post_actions";
const tadaAnimation = {
  "0%": { transform: "scale3d(1, 1, 1)" },
  "10%, 20%": { transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
  "30%, 50%, 70%, 90%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  },
  "40%, 60%, 80%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  },
  "100%": { transform: "scale3d(1, 1, 1)" },
};
function AddPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const fileInputRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleImageUpload = (event) => {
    if (images.length > 8) {
      alert("You can only upload up to 8 images.");
      return;
    }
    const files = Array.from(event.target.files);
    if (images.length + files.length > 8) {
      alert("You can only upload up to 8 images.");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const refresh = () => {
    setImages([]);
    setText("");
  };

  const handlePost = async () => {
    if (text !== "" || images.length > 0) {
      await addpost({
        data: {
          caption: text,
          images: images,
        },
      }).then((res) => {
        toggleOpen();
        refresh();
        handleConfetti();
      });
    }
  };

  useEffect(() => {
    if (!isOpen) refresh();
  }, [isOpen]);

  return (
    <>
      <div>
        <NeoButton
          width="w-fit"
          paddingX="px-5 "
          paddingY="py-1.5 "
          backgroundColor="bg-[#fff59f]"
          borderRadius="rounded"
          hoverBackgroundColor="hover:bg-[#fff59f]/80"
          hoverTranslateX="hover:translate-x-[-2px]"
          hoverTranslateY="hover:translate-y-[-2px]"
          hoverShadow="hover:shadow-[2px_2px_0px_black]"
          activeTranslateX="active:translate-x-[1px]"
          activeTranslateY="active:translate-y-[1px]"
          activeShadow="active:shadow-[1px_1px_0px_black]"
          handleClick={toggleOpen}
        >
          Post
        </NeoButton>

        <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <section className="h-[85vh] flex flex-col justify-start item-center w-full pt-2 ">
            {/* ... (previous code remains the same) ... */}

            <div className="w-full h-full overflow-y-auto hide-scrollbar">
              <NeoBorder
                offset_x={5}
                offset_y={5}
                className="rounded-md p-3 mr-1 h-fit flex flex-col justify-start items-center gap-3"
              >
                <div className="flex justify-between items-center w-full">
                  <Image
                    className="w-10 h-10 p-1 rounded-full bg-pink-300"
                    src="/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Bordered avatar"
                    width={20}
                    height={20}
                  />

                  <svg
                    className="h-10 w-10 hover:bg-[#a7a6ff]/60 rounded-full cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="#a7a6ff"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 6.99997C7 6.11 7 5.66502 6.7322 5.37712C6.65621 5.29543 6.54711 5.21375 6.44732 5.16384C6.09566 4.98796 5.70533 5.10252 4.92468 5.33164C3.41701 5.77413 2.5 6.35887 2.5 6.99997C2.5 7.64107 3.41701 8.22581 4.92468 8.66831C5.70533 8.89743 6.09566 9.01199 6.44732 8.8361C6.54711 8.7862 6.65621 8.70451 6.7322 8.62282C7 8.33492 7 7.88994 7 6.99997ZM17 6.99997C17 7.88994 17 8.33492 17.2678 8.62282C17.3438 8.70451 17.4529 8.7862 17.5527 8.8361C17.9043 9.01199 18.2947 8.89743 19.0753 8.66831C20.583 8.22581 21.5 7.64107 21.5 6.99997C21.5 6.35887 20.583 5.77413 19.0753 5.33164C18.2947 5.10252 17.9043 4.98796 17.5527 5.16384C17.4529 5.21375 17.3438 5.29543 17.2678 5.37712C17 5.66502 17 6.11 17 6.99997Z"
                        fill="#a7a6ff"
                        fillOpacity="0.24"
                      ></path>
                      <path
                        d="M5.96062 15.3157L3.5 18L7.96641 19.2181C8.48244 19.3588 8.74045 19.4292 9.00474 19.4646C9.26903 19.5 9.53647 19.5 10.0713 19.5H14.1218C14.5605 19.5 14.7798 19.5 14.9974 19.4761C15.215 19.4522 15.4291 19.4047 15.8573 19.3095L19.5 18.5L18.3779 16.6298L18.3779 16.6298C17.9603 15.9338 17.7515 15.5859 17.5165 15.3796C16.8622 14.8056 15.9118 14.7206 15.1661 15.1694C14.8982 15.3307 14.6309 15.6361 14.0965 16.2469L14.0965 16.2469C13.8499 16.5287 13.7266 16.6695 13.6002 16.7482C13.2491 16.9665 12.7999 16.9463 12.4698 16.6973C12.351 16.6076 12.2408 16.4562 12.0206 16.1534L11.6456 15.6377C10.5357 14.1116 9.98076 13.3485 9.21743 13.1943C9.0305 13.1565 8.83911 13.1457 8.64911 13.1621C7.87325 13.2292 7.2357 13.9247 5.96062 15.3157Z"
                        fill="#a7a6ff"
                        fillOpacity="0.24"
                      ></path>
                      <path
                        d="M3.5 18L5.96062 15.3157C7.2357 13.9247 7.87325 13.2292 8.64911 13.1621C8.83911 13.1457 9.0305 13.1565 9.21743 13.1943C9.98076 13.3485 10.5357 14.1116 11.6456 15.6377L12.0206 16.1534C12.2408 16.4562 12.351 16.6076 12.4698 16.6973C12.7999 16.9463 13.2491 16.9665 13.6002 16.7482C13.7267 16.6695 13.8499 16.5287 14.0965 16.2469V16.2469C14.6309 15.6361 14.8982 15.3307 15.1661 15.1694C15.9118 14.7206 16.8622 14.8056 17.5165 15.3796C17.7515 15.5859 17.9603 15.9339 18.3779 16.6298L19.5 18.5"
                        stroke="#222222"
                      ></path>
                      <path
                        d="M6.5 9V5"
                        stroke="#33363F"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M17.5 9V5"
                        stroke="#33363F"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M2.5 17V7M21.5 7V17"
                        stroke="#33363F"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M17.5074 4.96298C19.1476 5.27007 20.3747 5.70633 21.0117 6.20882C21.6488 6.71132 21.6628 7.25408 21.0518 7.75881C20.4409 8.26354 19.2364 8.70415 17.6123 9.0171C15.9882 9.33004 14.0283 9.49914 12.0154 9.5C10.0024 9.50085 8.0405 9.33343 6.41253 9.02187C4.78457 8.71031 3.57474 8.27073 2.95756 7.76652C2.34037 7.26231 2.34774 6.71955 2.97859 6.21651C3.60943 5.71347 4.83116 5.27617 6.46753 4.96768"
                        stroke="#222222"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M21.5 17C21.5 17.663 20.4991 18.2989 18.7175 18.7678C16.9359 19.2366 14.5196 19.5 12 19.5C9.48044 19.5 7.06408 19.2366 5.28249 18.7678C3.50089 18.2989 2.5 17.663 2.5 17"
                        stroke="#222222"
                      ></path>
                    </g>
                  </svg>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                </div>
                <textarea
                  className="w-full p-1.5 border-slate-200 border rounded h-[20vh] max-h-[40vh]"
                  placeholder="Enter Text..."
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
              </NeoBorder>

              {/* Image grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4">
                <AnimatePresence>
                  {images.map((image, index) => (
                    <motion.div
                      key={image + index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.3 },
                      }}
                      layout
                    >
                      <NeoBorder
                        offset_x={0}
                        offset_y={0}
                        className="relative rounded-lg"
                      >
                        <Image
                          src={image}
                          alt={`Uploaded ${index}`}
                          layout="responsive"
                          width={1}
                          height={1}
                          className="w-full h-auto object-contain aspect-square"
                        />
                        <NeoButton
                          width="w-fit"
                          paddingX="px-0.5"
                          paddingY="py-0.5"
                          marginTop="right-0.5 absolute top-1"
                          backgroundColor="bg-[#fc6060]"
                          borderRadius="rounded-full"
                          textSize="text-sm"
                          hoverBackgroundColor="hover:bg-[#b9fda6]/80"
                          hoverTranslateX="hover:translate-x-[-2px]"
                          hoverTranslateY="hover:translate-y-[-2px]"
                          className="translate-x-[-2px] translate-y-[-2px] shadow-[2px_2px_0px_black]"
                          hoverShadow="hover:shadow-[2px_2px_0px_black]"
                          activeTranslateX="active:translate-x-[1px]"
                          activeTranslateY="active:translate-y-[1px]"
                          activeShadow="active:shadow-[1px_1px_0px_black]"
                          handleClick={() => removeImage(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                          </svg>
                        </NeoButton>
                      </NeoBorder>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <NeoButton
              width="w-fit"
              paddingX="px-5 "
              paddingY="py-2 "
              marginTop="ml-auto mt-2"
              backgroundColor="bg-[#b9fda6]"
              borderRadius="rounded-full"
              textSize="text-sm"
              hoverBackgroundColor="hover:bg-[#b9fda6]/80"
              hoverTranslateX="hover:translate-x-[-2px]"
              hoverTranslateY="hover:translate-y-[-2px]"
              className="translate-x-[-2px] translate-y-[-2px] shadow-[2px_2px_0px_black]"
              hoverShadow="hover:shadow-[2px_2px_0px_black]"
              activeTranslateX="active:translate-x-[1px]"
              activeTranslateY="active:translate-y-[1px]"
              activeShadow="active:shadow-[1px_1px_0px_black]"
              handleClick={handlePost}
            >
              Add to Feed
            </NeoButton>
          </section>
        </BottomSheet>
      </div>
    </>
  );
}

export default AddPost;
