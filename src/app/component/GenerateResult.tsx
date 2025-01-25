import { JSX } from "react";
import Typewriter from "typewriter-effect";
import RenderGeneratedResult from "./RenderGeneratedResult";

export default function GenerateResult({
  results,
}: generateResultProps): JSX.Element {
  console.log(results.length);
  return (
    <div className=" border-blue-900 overflow-y-auto font-mono h-full w-4/6 p-3 gap-3 text-sm max-h-full scrollbar-thin scrollbar-thumb-blue-900 scrollbar-white-red-900">
      {results.length === 0 ? (
        <div>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(25)
                .typeString("Enter Context TO generate")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
      ) : (
        <div className=" h-fit scrollbar-thin scrollbar-thumb-blue-900 scrollbar-white-red-900">
          {results.map((item, index) => (
            <div key={index} className="p-3 m-3  border-pink-600">
              <RenderGeneratedResult str={item}></RenderGeneratedResult>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface generateResultProps {
  results: string[];
}
