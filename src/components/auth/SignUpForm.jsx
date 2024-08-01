"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RoleSelector from "./RoleSelector";
import Image from "next/image";
import loginIllustration from "@/../public/assets/img/login_illustration.png";
import Link from "next/link";
import { SocialSignInButton } from "./SignInForm";
import googlePNG from "@/../public/assets/img/google.png";
import applePNG from "@/../public/assets/img/apple.png";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    console.log(response);
    if (response.ok) {
      router.push("/auth/signin");
    } else {
      // Handle error
    }
  };

  return (
    <div className="flex min-h-screen bg-[#ffc29e] text-white">
      <div className="hidden  lg:w-1/2 lg:flex justify-center items-center">
        <Image
          src={loginIllustration}
          alt="Workspace Illustration"
          className="w-[40vw]"
          objectFit="cover"
        />
      </div>
      <div className="w-full max-w-md m-auto">
        <div className="border-black border-2  shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg  p-8 bg-white">
          <h1 className="text-3xl text-black font-bold mb-2">Welcome</h1>
          <p className="text-gray-900 mb-3">
            Already have a account?{" "}
            <Link
              href="/auth/signin"
              className="text-blue-400 font-medium hover:underline"
            >
              Sign in
            </Link>
            .
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={`w-full  rounded-md focus:outline-none 
                    border-black border-2 p-2.5  focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#ffc29e]/30 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                `}
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full  rounded-md focus:outline-none 
                    border-black border-2 p-2.5  focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#ffc29e]/30 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                "
                required
              />
            </div>
            <RoleSelector value={role} onChange={setRole} />
            <button
              type="submit"
              className="rounded-2xl w-full bg-[#a6fbff] hover:bg-[#a6fbff]/80 border-2 bord er-dashed border-black  px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Create Account Now
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">or</p>
          </div>

          <SocialSignInButton
            src={googlePNG}
            alt="Google Logo"
            text="Sign up with Google"
          />
          <SocialSignInButton
            src={applePNG}
            alt="Apple Logo"
            text="Sign up with Apple"
          />
        </div>
      </div>
    </div>
  );
}
