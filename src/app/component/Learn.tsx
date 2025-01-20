import { JSX } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function Learn(): JSX.Element {
  const { user } = useUser()

  return (
    <div className="text-black border border-black w-full">

      <h1 className="text-white">{user?.name}</h1>
    </div>
  );
}

export default Learn;
