"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import { Luckiest_Guy, Audiowide } from "next/font/google";
import Link from "next/link";
import Images from "next/image";

const luckiest_Guy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

const audiowidefont = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return (
    <div
      className={`flex align-middle bg-neutral-200 justify-center items-top w-full h-screen `}
    >
      <div className="flex flex-col border justify-normal w-4/6 ">
        <div className="border p-2 m-5">
          <p
            className={`${luckiest_Guy.className} text-3xl text-pink-400 text-center`}
          >
            EzEmail
          </p>
        </div>
        <div className="flex justify-center items-center border  text-white p-2 m-5 h-3/6">
          <p
            className={`text-5xl text-center text-neutral-600 ${audiowidefont.className}`}
          >
            Only Email Tool You'll Ever Need: Create, Learn, Succeed!
          </p>
        </div>
        <div className="border p-2 m-5 text-neutral-200 flex gap-10 justify-center items-center">
          <Link href="/generate">
            <button className="flex flex-row gap-2 bg-cgreen px-6 py-2 border rounded-xl font-semibold hover:bg-white hover:text-black hover:border-black">
              Generate
              <Images
                src="/assets/right-arrow.png"
                alt="logo"
                width={25}
                height={50}
              />
            </button>
          </Link>
          <Link href="/learn">
            <button className="flex flex-row gap-2 bg-cgreen px-6 py-2 border rounded-xl font-semibold hover:bg-white hover:text-black hover:border-black">
              Learn
              <Images
                src="/assets/right-arrow.png"
                alt="logo"
                width={25}
                height={50}
              />
            </button>
          </Link>
        </div>
        {!user ? (
          <div className="flex justify-center items-center">
            <a
              href="/api/auth/login"
              className=" px-6 py-2 w-fit text-white bg-black rounded-xl border font-semibold hover:bg-slate-200 hover:border-black hover:text-black"
            >
              login
            </a>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-black">Hi! {user.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
