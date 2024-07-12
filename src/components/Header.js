import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-red border-b flex justify-between p-5">
      <div className="flex gap-5">
        <Link href={"/"}>
          <span>
            <FontAwesomeIcon icon={faLink} className="h-6" />
          </span>
          Linkful
        </Link>
        <nav className="flex gap-10 text-slate-500">
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
      <nav className="flex gap-5 text-slate-500">
        <form>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"English"}>Choose Language</option>
            <option value="US">English</option>
            <option value="CN">Chinese</option>
          </select>
        </form>
        {session ? (
          <>
            <Link href={"/account"} className="text-lg">
              {session?.user?.name}
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
