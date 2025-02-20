"use client";
import { Dispatch, JSX, SetStateAction } from "react";
import { ChangeEvent, useState } from "react";
import { BaseInputs } from "@/app/types/type.user";
import { geneatePrompt } from "../util/prompt";
import { call } from "../services/userService";

export default function GenerateInputs({
  setResults,
  setIsgenerating,
  isGenerating,
}: GenerateInputsProps): JSX.Element {
  const [inputs, setInputs] = useState<BaseInputs>({
    from: "",
    to: "",
    context: "",
  });

  function handleInputs(
    e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    field: keyof BaseInputs
  ) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: e.target.value,
    }));
  }

  async function pushInputs() {
    const inputsStates = checkInputs();
    if (inputsStates === false) return;
    
    setIsgenerating(true);
    const prompt = geneatePrompt(inputs);
    const getResult = await call(prompt);

    console.log(getResult);
    if (getResult.success) {
      if (getResult.data?.message) {
        setResults((prev) => [
          ...prev,
          (getResult.data as { message: string }).message,
        ]);
      }
      return;
    }
  }

  function checkInputs() {
    const isInputEmpty: boolean[] = Object.entries(inputs).map(
      ([key, value]) => {
        if (value == "") {
          console.log(`Input ${key} is invalid.`);
          return false;
        } else {
          return true;
        }
      }
    );
    const result = isInputEmpty.every((value) => value === true);
    return result;
  }

  return (
    <div className="w-2/6 h-full p-3 ">
      <div className="flex flex-col gap-3 m-3">
        <label htmlFor="">From</label>
        <input
          value={inputs?.from}
          onChange={(e) => handleInputs(e, "from")}
          type="text"
          className="bg-transparent border border-blue-700 rounded w-4/6 h-10 p-3 focus:ring focus:outline-none focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col gap-1 m-3">
        <label htmlFor="">To</label>
        <input
          value={inputs?.to}
          onChange={(e) => handleInputs(e, "to")}
          type="text"
          className="bg-transparent border border-blue-700 rounded w-4/6 h-10 p-3 focus:ring focus:outline-none focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col gap-1 m-3 h-3/6">
        <label htmlFor="">Context</label>
        <textarea
          value={inputs?.context}
          onChange={(e) => handleInputs(e, "context")}
          placeholder="Enter the context of email"
          name="context"
          id=""
          style={{
            resize: "none", // Disables the resize grabber
          }}
          className="bg-transparent border border-blue-700 rounded h-full p-3 focus:ring focus:outline-none focus:ring-blue-400"
        ></textarea>
      </div>
      <div className="flex items-end justify-start m-3 w-full ">
        {!isGenerating && (
          <button
            onClick={pushInputs}
            className="bg-blue-700 py-2 px-4 w-fit rounded-2xl"
          >
            Generate
          </button>
        )}
      </div>
    </div>
  );
}

interface GenerateInputsProps {
  setResults: Dispatch<SetStateAction<string[]>>;
  setIsgenerating: Dispatch<SetStateAction<boolean>>;
  isGenerating: boolean;
}
