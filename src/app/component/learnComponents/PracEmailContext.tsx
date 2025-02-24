import { emailContextCall } from "@/app/services/email.Services";
import { emailCtx } from "@/app/types/type.email";
import { emailCtxPrompt } from "@/app/util/prompt";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import RenderEmailCtx from "./RenderEmailCtx";

export default function PracEmailContext({
  setEmailCtx,
}: {
  setEmailCtx: Dispatch<SetStateAction<emailCtx[]>>;
}): JSX.Element {
  const [currEmail, setCurremail] = useState<string>();

  async function generateEmailCntx() {
    const prompt = emailCtxPrompt("beginer");
    const res = await emailContextCall(prompt);

    if (!res.success) {
      alert("failed to get email ctx");
      return;
    }
    if (res.data?.message) {
      const key = Math.floor(1000 + Math.random() * 9000);
      setEmailCtx((prev) => [
        ...prev,
        { key: key, email: res.data?.message.replace(/\*/g, "") || "" },
      ]);
      setCurremail(res.data.message);
    }
  }
  return (
    <div className="lg:w-1/2 w-full  p-6  border-r-neutral-700 gap-3 h-full  ">
      <div className=" flex flex-col lg:h-5/6 h-fit  p-4 overflow-auto">
        <RenderEmailCtx currEmail={currEmail} />
      </div>
      <div className="mx-4 p-3  ">
        <button
          className="rounded-md ml-6 bg-neutral-100 py-2 px-4 text-sm text-black font-medium"
          onClick={generateEmailCntx}
        >
          {currEmail ? "Next" : "Start"}
        </button>
      </div>
    </div>
  );
}
