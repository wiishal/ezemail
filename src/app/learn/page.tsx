import { JSX } from "react";
import { Metadata } from "next";
import LearnPage from "../component/LearnPage";

export default function page(): JSX.Element {
  return (
    <div
      className={`flex flex-col align-middle bg-black justify-center items-center w-full lg:h-screen h-screen overflow-auto`}
    >
      <div className="flex items-center w-2/3 justify-center font-luckyguy text-3xl text-pink-400 border border-black m-5">
        EZ EMAIL
        
      </div>
      <LearnPage />
    </div>
  );
}
export const metadata: Metadata = {
  title: "Learn With EZ",
  description: "Generate Email/learn with Proffetional tone",
};
