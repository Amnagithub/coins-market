"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-full max-h-fit">
      <div className="container p-11 max-w-full ">
        <div className=" text-1xl lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-6 text-slate-700 font-serif flex justify-center">
          Welcome to Live Coin Market
        </div>
        <div className=" max-h-fit flex flex-col gap-4 px-12 lg:px-56 md:px-44 sm:px-14 ">
          <div className="bg-neutral text-neutral-content rounded-full text-center">
            <button className="btn btn-ghost text-md sm:text-xl md:text-1xl lg:text-2xl font-serif ">
              <Link href="/coin-csr">Coin Market CSR</Link>
            </button>
          </div>

          <div className="bg-neutral text-neutral-content rounded-full text-center">
            <button className="btn btn-ghost text-md sm:text-xl md:text-1xl lg:text-2xl font-serif ">
              <Link href="/coin-isr">Coin Market ISR</Link>
            </button>
          </div>

          <div className="bg-neutral text-neutral-content rounded-full text-center">
            <button className="btn btn-ghost text-md sm:text-xl md:text-1xl lg:text-2xl font-serif ">
              <Link href="/coin-ssg">Coin Market SSG</Link>
            </button>
          </div>

          <div className="bg-neutral text-neutral-content rounded-full text-center">
            <button className="btn btn-ghost text-md sm:text-xl md:text-1xl lg:text-2xl font-serif ">
              <Link href="/coin-ssr">Coin Market SSR</Link>
            </button>
          </div>
          <div />
        </div>
        <div />
      </div>
    </div>
  );
}
