import { Dispatch, JSX, SetStateAction } from "react";
import { leaningStage } from "../../types/type.email";

export default function AskLeaningStage({
  setLearningStage,
}: {
  setLearningStage: Dispatch<SetStateAction<leaningStage | null>>;
}): JSX.Element {
  function setUserLeaningStage(stage: leaningStage) {
    localStorage.setItem("userStage", stage.toString());
    setLearningStage(stage);
  }
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <p className="text-white">let us know your stage</p>
      <div className="flex align-middle justify-center gap-4">
        <button
          onClick={() => setUserLeaningStage(leaningStage.Beginner)}
          className=" px-6 py-2 w-fit text-white bg-black rounded-xl border font-semibold hover:bg-slate-200 hover:border-black hover:text-black"
        >
          beginer
        </button>
        <button
          onClick={() => setUserLeaningStage(leaningStage.Mediocre)}
          className=" px-6 py-2 w-fit text-white bg-black rounded-xl border font-semibold hover:bg-slate-200 hover:border-black hover:text-black"
        >
          Mediocre
        </button>
      </div>
    </div>
  );
}
