"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import GeneratePage from "../page/generatepage";

function Generate() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) return <div> isLoading</div>;
  if (user) {
    return (
      <div className={`flex align-middle bg-neutral-200 justify-center items-top w-full h-screen `}>
        <GeneratePage />
      </div>
    );
  } else {
    router.push("/api/auth/login");
  }
}

export default Generate;
