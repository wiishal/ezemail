import { JSX } from "react";

export default function RenderEmailCtx({ currEmail }: { currEmail: string | undefined }): JSX.Element {
   if(!currEmail ) return <div className="font-thin ">press start to begin</div>;
  return (
    <div
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      className="border bg-black bg-opacity-100 flex items-center justify-center p-5 overflow-auto text-sm font-thin  "
    >
      {currEmail}
    </div>
  );
}