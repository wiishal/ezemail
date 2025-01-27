"use client";

import { useState } from "react";
import GenerateInputs from "../component/GenerateInputs";
import GenerateResult from "../component/GenerateResult";

function GeneratePage() {
  const [results, setResults] = useState<string[]>([]);
  const [isGenerating,setIsgenerating] = useState<boolean>(false)
  return (
    <div
      className={`flex align-middle bg-neutral-900 justify-center items-top w-full h-screen `}
    >
      <div className="flex  flex-row items-center justify-center p-3 bg-neutral-900 h-5/6 lg:w-5/6 sm:w-full w-full text-white ">
        <GenerateInputs
          setResults={setResults}
          setIsgenerating={setIsgenerating}
          isGenerating={isGenerating}
        />
        <GenerateResult results={results} setIsgenerating={setIsgenerating} />
      </div>
    </div>
  );
}

export default GeneratePage;
