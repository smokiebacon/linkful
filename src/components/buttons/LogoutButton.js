"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="bg-red-500 text-white text-center w-full py-4 flex gap-4 justify-center"
      onClick={() => {
        signOut();
      }}
    >
      Log Out
    </button>
  );
}
