"use client"

import { JSX } from "react";
import { useState } from "react";
import "react-resizable/css/styles.css";
import { emailCtx } from "@/app/types/type.email";
import PracEmailContext from "./PracEmailContext";
import PracEmailUserInput from "./PracEmailUserInput";

export default function PracticeEmail(): JSX.Element {

  const [emailCtx, setEmailCtx] = useState<emailCtx[]>([]);

  return (
    <div className="flex lg:flex-row h-full bg-black w-full overflow-auto text-white">
      <PracEmailContext setEmailCtx={setEmailCtx} />
      <PracEmailUserInput email={emailCtx[emailCtx.length - 1]} />
    </div>
  );
}
