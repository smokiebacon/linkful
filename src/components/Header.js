import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b flex justify-between p-5">
      <div className="flex gap-5">
        <Link href={"/"}>Linkful</Link>
        <nav className="flex gap-10 text-slate-500">
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
      <nav className="flex gap-5 text-slate-500 text-lg">
        <form>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Language</option>
            <option value="US">English</option>
            <option value="CN">Chinese</option>
          </select>
        </form>
        <Link href={"/signin"}>Sign In</Link>
        <Link href={"/register"}>Register</Link>
      </nav>
    </header>
  )
}
