import { JSX, useEffect, useState } from "react";
import "react-resizable/css/styles.css";
import UserInputWrite from "./UserInputWrite";
import UserInputAnalysis from "./UserInputAnalysis";
import { AnalysisState, emailCtx } from "@/app/types/type.email";
import { analysisCtxPrompt } from "@/app/util/prompt";
import { getAnalysisResult } from "@/app/services/email.Services";
import Link from "next/link";

export default function PracEmailUserInput({email}: { email: emailCtx }): JSX.Element {
  const [stage, setStage] = useState<Stage>(Stage.Write);
  const [emailCtx,setEmailCtx] = useState<emailCtx>()
  const [content, setContent] = useState<string>("");
  const [currAnalysis,setCurrAnalysis]=useState<AnalysisState>()

  useEffect(() => {
    if(!email) return
    setContent("")
    setEmailCtx(email);
  }, [email]);

  async function getAnalysis(userinputs:string){
    if(!emailCtx){
      alert("there is no emailCtx")
      return
    }
    const prompt = analysisCtxPrompt({ scenario:emailCtx.email,userInput:userinputs });
    const res = await getAnalysisResult(prompt);
    const parsedResponse = JSON.parse(res.data.message);
    if(parsedResponse){
      setCurrAnalysis(parsedResponse);
    }
  }
  function changeStage(stage: Stage) {
    setStage(stage);
  }
  return (
    <div className="flex flex-col w-full lg:w-1/2 lg:p-2 gap-2 border lg:border-l-blue-700 border-transparent  pt-5">
      <div className="flex flex-row justify-between ">
        <ul className="flex flex-row gap-2 font-thin lg:ml-3">
          <li
            onClick={() => changeStage(Stage.Write)}
            className=" py-2 px-3 cursor-pointer rounded-md bg-neutral-700"
          >
            Write
          </li>
          <li
            onClick={() => changeStage(Stage.Analysis)}
            className="py-2 px-3 cursor-pointer rounded-md bg-neutral-700"
          >
            Analysis
          </li>
        </ul>
        <Link
          href="/api/auth/logout"
          className="rounded-md text-center bg-neutral-100 py-2 px-4 text-sm text-black font-medium"
        >
          Log out
        </Link>
      </div>

      {stage === Stage.Write && (
        <UserInputWrite
          content={content}
          setContent={setContent}
          changeStage={changeStage}
          getAnalysis={getAnalysis}
        />
      )}

      {stage === Stage.Analysis && (
        <UserInputAnalysis analysis={currAnalysis} />
      )}
    </div>
  );
}

enum Stage {
  Write = "Write",
  Analysis = "Analysis",
}
