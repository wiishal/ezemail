import { Dispatch, JSX, SetStateAction } from "react";

export default function UserInputWrite({
  content,
  setContent,
  changeStage,
  getAnalysis,
}: {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  getAnalysis: (userinputs: string) => void;
  changeStage: (stage: Stage) => void;
}): JSX.Element {
  function handleFinish(userinputs: string) {
    if (userinputs === "") {
      alert("Provide your writings!!");
      return;
    }
    getAnalysis(userinputs);
    changeStage(Stage.Analysis);
  }
  return (
    <div className="border lg:h-full p-4 lg:overflow-auto lg:border-transparent ">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full lg:h-4/5 h-[50vh] bg-black border p-4 text-sm rounded-md scrollbar-thin scrollbar-track scrollbar-thumb-grey"
        placeholder="Write your email here..."
      />
      <div className="flex flex-row gap-5 mx-1 my-3 p-3   ">
        <button
          onClick={() => handleFinish(content)}
          className="rounded-md  bg-pink-300 py-2 px-4 text-sm text-black font-medium"
        >
          Finish
        </button>
        <button
          onClick={() => setContent("")}
          className="rounded-md  bg-neutral-100 py-2 px-4 text-sm text-black font-medium"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

enum Stage {
  Write = "Write",
  Analysis = "Analysis",
}
