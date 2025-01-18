"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function learn() {
  const { user } = useUser();

  if (!user) return <div>notlogged</div>;

  if (user) return <div>{user.name}</div>;
}
