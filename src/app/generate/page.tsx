import { JSX } from "react";
import { Metadata } from "next";
import GeneratePage from "../component/GeneratePage";

export default function page(): JSX.Element {
  return (
    <div
      className={`flex flex-col align-middle bg-black justify-center items-center w-full h-screen`}
    >
      <div className="font-luckyguy text-3xl mb-4 text-pink-400  max-h-fit border-red-600">
        EZ EMAIL
      </div>
      <div className="h-5/6 w-full ">
        <GeneratePage />
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: "Generate With EZ",
  description: "Generate Email/learn with Proffetional tone",
};
