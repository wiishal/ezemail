"use client";

import { useState } from "react";
import GenerateInputs from "../component/GenerateInputs";
import GenerateResult from "../component/GenerateResult";

function GeneratePage() {
  const [results, setResults] = useState<string[]>([]);
  return (
    <div
      className={`flex align-middle bg-neutral-900 justify-center items-top w-full h-screen `}
    >
      <div
        className="flex flex-row items-center justify-center bg-neutral-900 lg:w-5/6 sm:w-full w-full text-white "
      >
        <GenerateInputs setResults={setResults} />
        <GenerateResult results={results} />
      </div>
    </div>
  );
}

export default GeneratePage;
