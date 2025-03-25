import { JSX } from "react";

export default function RenderEmailCtx({
  currEmail,
}: {
  currEmail: string | undefined;
}): JSX.Element {
  if (!currEmail)
    return <div className="font-thin p-4 ">press start to begin</div>;
  return (
    <div
      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      className="flex items-center justify-center p-4 overflow-auto text-sm font-thin  "
    >
      {currEmail}
    </div>
  );
}
