"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Learn from "./learnComponents/Learn";
import { JSX } from "react";
import LoginAlert from "./LoginAlert";

function LearnPage(): JSX.Element {
  const { user, isLoading } = useUser();

  if (isLoading) return <div> Loading...</div>;

  if (user) {
    return (
      <div
        className={`flex align-middle bg-neutral-900 justify-center items-top w-full h-full overflow-auto`}
      >
        <Learn />
      </div>
    );
  } else {
    return <LoginAlert />;
  }
}

export default LearnPage;
