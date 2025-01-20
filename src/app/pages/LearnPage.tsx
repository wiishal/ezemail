"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Learn from "../component/Learn";
import { JSX } from "react";

function LearnPage(): JSX.Element {
  const { user, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) return <div> isLoading</div>;

  if (user) {
    return (
      <div
        className={`flex align-middle bg-neutral-900 justify-center items-top w-full h-screen `}
      >
        <Learn />
      </div>
    );
  } else {
    router.push("/api/auth/login");
  }
  return <div></div>;
}

export default LearnPage;
