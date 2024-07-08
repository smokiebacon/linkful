import Header from "@/components/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-4 text-center mx-auto max-w-lg">
        <h1 className="text-4xl font-bold">Your one link for everything</h1>
        <h2 className="text-slate-500 text-xl mt-6">
          Share your links, social profiles, contact info, or anything on one
          page.
        </h2>
        <form className="text-center" type="text">
          <span className="px-2 ">linkful.com/</span>
          <input
            className="border-500 py-4"
            type="text"
            placeholder="username"
          ></input>
          <button className="bg-blue-500 text-white py-4 px-6" type="submit">
            Join Now
          </button>
        </form>
      </section>
    </main>
  )
}
