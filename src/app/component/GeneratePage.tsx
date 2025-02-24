"use client";

import { useState } from "react";
import GenerateInputs from "./generateComponents/GenerateInputs";
import GenerateResult from "./generateComponents/GenerateResult";

function GeneratePage() {
  const [results, setResults] = useState<string[]>([]);
  const [isGenerating, setIsgenerating] = useState<boolean>(false);
  return (
    <div className="flex items-center flex-col lg:flex-row bg-black justify-center w-full h-fit lg:h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center p-3 min-h-screen lg:h-5/6 lg:w-5/6 w-full text-white gap-6">
        {" "}
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
