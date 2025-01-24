import { JSX } from "react";
import { Metadata } from "next";
import LearnPage from "../pages/LearnPage";

export default function page(): JSX.Element {
  return (
    <div
      className={`flex flex-col align-middle bg-neutral-900 justify-center items-center w-full h-screen`}
    >
      <div className="font-luckyguy text-3xl text-pink-400 border border-black m-5">
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
