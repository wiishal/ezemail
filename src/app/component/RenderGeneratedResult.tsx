
import { Dispatch, SetStateAction, useState } from "react";
import Typewriter from "typewriter-effect";

interface RenderProps {
  str: string;
  setIsgenerating:Dispatch<SetStateAction<boolean>>;
}
export default function RenderGeneratedResult({ str,setIsgenerating }: RenderProps) {

  return (
    <div
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      className="border rounded-xl bg-neutral-800 border-b-lime-600 border-transparent p-3 "
    >
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeDelay(25)
              .typeString(str)
              .callFunction(() => {
                console.log("String typed out!");
                setIsgenerating(false)
              })
          }}
        />
      </div>
    </div>
  );
}
