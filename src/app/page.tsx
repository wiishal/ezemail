'use client'
import { Luckiest_Guy, Audiowide } from "next/font/google";
import Images from "next/image";


const luckiest_Guy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

const audiowidefont = Audiowide({
  subsets:["latin"],
  weight:"400"});

export default function Home() {

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
        <div className="flex justify-center items-center border  text-black p-2 m-5 h-3/6">
          <p
            className={`text-5xl text-center text-neutral-600 ${audiowidefont.className}`}
          >
            Only Email Tool You'll Ever Need: Create, Learn, Succeed!
          </p>
        </div>
        <div className="border p-2 m-5 text-neutral-200 flex gap-10 justify-center items-stretch">
          <button className="flex flex-row gap-2 bg-cgreen px-6 py-2 rounded-xl font-semibold">
            Generate
            <Images
              src="/assets/right-arrow.png"
              alt="logo"
              width={25}
              height={50}
            />
          </button>
          <button className="flex flex-row gap-2 bg-cgreen px-6 py-2 rounded-xl font-semibold">
            Learn
            <Images
              src="/assets/right-arrow.png"
              alt="logo"
              width={25}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
