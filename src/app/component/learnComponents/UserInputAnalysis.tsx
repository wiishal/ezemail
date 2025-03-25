import { AnalysisState } from "@/app/types/type.email";
import { JSX } from "react";

export default function UserInputAnalysis({
  analysis,
}: {
  analysis: AnalysisState | undefined;
}): JSX.Element {
  
 

  return (
    <div className="h-[50vh] lg:h-full lg:overflow-auto ">
      <div className="lg:h-fit h-[50vh] border border-transparent border-b-white lg:p-4">
        <h2 className="text-lg font-semibold mb-2">Email Analysis</h2>
        <p className="text-white font-thin">
          {analysis?.improvements || "No content provided."}
        </p>
      </div>
      <div className="mx-1 border border-gray-500 my-3 p-2 ">
        <table className="w-full border-collapse  border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className=" border border-transparent border-b-white px-4 py-1 text-left">
                Criteria
              </th>
              <th className=" border border-transparent border-b-white px-4 py-1 text-left">
                Rating (1-10)
              </th>
              <th className=" border border-transparent border-b-white px-4 py-1 text-left">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            {analysis?.evaluation.map((item, index) => (
              <tr key={index} className="hover:bg-slate-800">
                <td className=" border-gray-300 px-4 py-2">{item.criteria}</td>
                <td className=" border-gray-300 px-4 py-2">{item.rating}</td>
                <td className=" border-gray-300 px-4 py-2">{item.comment}</td>
              </tr>
            )) || (
              <tr>
                <td
                  colSpan={3}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}