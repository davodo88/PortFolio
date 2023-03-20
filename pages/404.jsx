import Link from "next/link";

export default function FourOhFour() {
  return (
    <section className="bg-black  text-white flex flex-col justify-around w-screen h-screen">
      <h1 className="mx-auto">Are you lost?</h1>
      <button className="mx-auto">
        <Link href="/">
          <a>Go home</a>
        </Link>
      </button>
    </section>
  )
};
