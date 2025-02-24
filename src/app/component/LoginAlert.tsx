import Link from "next/link";
import { JSX } from "react";

export default function LoginAlert(): JSX.Element {
    return (
      <div>
        <Link
          href="/api/auth/login"
          className=" px-6 py-2 w-fit text-white bg-black rounded-xl border font-semibold hover:bg-slate-200 hover:border-black hover:text-black"
        >
          login
        </Link>
      </div>
    );
}