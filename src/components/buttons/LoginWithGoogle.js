"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => {
        console.log("hello");
      }}
      className="bg-blue-500 text-white text-center w-full py-4 flex gap-4 justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign in with Google </span>
    </button>
  );
}
