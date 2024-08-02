"use client";
import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loginIllustration from '@/../public/assets/img/signin_img.png';
import googlePNG from '@/../public/assets/img/google.png';
import applePNG from '@/../public/assets/img/apple.png';
import Link from "next/link";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result.ok) {
      router.push("/dashboard");
    } else {
      // Handle error
    }
  }, [email, password, router]);

  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e) => setPassword(e.target.value), []);

  return (
    <>

   
    <div className="flex h-full min-h-[100vh] bg-[#ffc29e] text-white items-start justify-start md:justify-center lg:justify-around overflow-hidden">
      <div className="hidden lg:w-1/2 lg:flex justify-center items-center">
        <Image src={loginIllustration} alt="Workspace Illustration" className="w-[40vw]" objectFit="cover" />
      </div>
      <div className="w-full max-w-md mb-auto mt-[10vh] mx-4 md:m-auto lg:mt-[10vh] lg:mx-4">
        <div className="border-black border-2 flex flex-col gap-2 md:gap-1 lg:gap-2  shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg p-8 bg-white">
          <h1 className="text-xl lg:text-3xl text-black font-bold ">Welcome back</h1>
          <p className="text-gray-900 md:text-sm lg:text-base">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-blue-400 font-medium hover:underline">
              Sign up
            </Link>
            .
          </p>
          <form onSubmit={handleSubmit}>
            <div className="my-3 md:my-1 lg:my-3">
              <label htmlFor="email" className="block text-sm font-medium mb-1 md:mb-0.5 lg:mb-1 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="name@company.com"
                className="w-full rounded-md focus:outline-none text-black border-black border-2 p-2.5 md:p-1 lg:p-2.5 focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#ffc29e]/30 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                required
              />
            </div>
            <div className="mb-3 md:mb-1 lg:mb-3">
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full rounded-md focus:outline-none text-black border-black border-2 p-2.5 md:p-1 lg:p-2.5 focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#ffc29e]/30 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                required
              />
            </div>
            <div className="flex items-center justify-end my-3 md:my-1 lg:my-3">
              <a href="#" className="text-sm font-medium text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="rounded-2xl w-full bg-[#a6fbff] text-xs md:text-sm lg:text-xs hover:bg-[#a6fbff]/80 border-2  border-black px-6 py-3 md:px-3 md:py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Sign in to your account
            </button>
          </form>
          <div className=" text-center">
            <p className="text-sm text-gray-400">or</p>
          </div>
          <SocialSignInButton src={googlePNG} alt="Google Logo" text="Sign in with Google" />
          <SocialSignInButton src={applePNG} alt="Apple Logo" text="Sign in with Apple" />
        </div>
      </div>
    </div>
    </>
  );
};

export const SocialSignInButton = ({ src, alt, text }) => (
  <button
    className="sm:mt-4 bg-white text-xs md:text-sm lg:text-base flex items-center justify-center rounded-2xl w-full hover:bg-white/80 border-2 border-black px-6 py-3 md:px-3 md:py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-2xl hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
  >
    <Image src={src} alt={alt} width={20} height={20} className="mr-2" />
    {text}
  </button>
);

export default SignInForm;
