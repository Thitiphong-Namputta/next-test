"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    console.log("session", session);
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
  return (
    <div>
      Not logged in <br />
      <button className="btn btn-ghost text-xl" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
}
