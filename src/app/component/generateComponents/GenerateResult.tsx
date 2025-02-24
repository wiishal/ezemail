import { Dispatch, JSX, SetStateAction } from "react";
import Typewriter from "typewriter-effect";
import RenderGeneratedResult from "./RenderGeneratedResult";

export default function GenerateResult({
  results,
  setIsgenerating,
}: generateResultProps): JSX.Element {
  console.log(results.length);

  return (
    <div className="  overflow-y-auto font-mono h-full lg:w-4/6 w-full p-3 gap-3 text-sm max-h-full scrollbar-thin scrollbar-track-pink-400 scrollbar-thumb-white">
      {results.length === 0 ? (
        <div>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(25)
                .typeString("Enter Context TO generate")
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
      ) : (
        <div className=" h-fit ">
          {results.map((item, index) => (
            <div key={index} className="p-3 m-3 rounded-xl  border-pink-600">
              <RenderGeneratedResult
                str={item}
                setIsgenerating={setIsgenerating}
              />{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface generateResultProps {
  results: string[];
  setIsgenerating: Dispatch<SetStateAction<boolean>>;
}
