import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b flex justify-between p-5">
      <div className="flex gap-4">
        <Link href={"/"}>Linkful</Link>
        <nav className="flex gap-10 text-slate-500">
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
      <nav className="flex gap-5 text-slate-500 text-lg">
        <Link href={"/signin"}>Sign In</Link>
        <Link href={"/register"}>Register</Link>
      </nav>
    </header>
  )
}
