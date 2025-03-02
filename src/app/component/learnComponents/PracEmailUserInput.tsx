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
    <div className="flex flex-col w-1/2 lg:w-1/2  m-3 gap-2 ">
      <div className="flex flex-row justify-between ">
        <ul className="flex flex-row gap-2 font-thin">
          <li
            onClick={() => changeStage(Stage.Write)}
            className="border py-2 px-3 cursor-pointer rounded-md"
          >
            Write
          </li>
          <li
            onClick={() => changeStage(Stage.Analysis)}
            className="border py-2 px-3 cursor-pointer rounded-md"
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
