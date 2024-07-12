"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="border text-black items-center flex w-auto px-4 p-2 gap-3"
      onClick={() => {
        signOut();
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faRightFromBracket} className="h-6" />
      <span>Logout</span>
    </button>
  );
}
