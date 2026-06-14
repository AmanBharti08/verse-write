import Image from "next/image";
import Link from "next/link";

import img from "../public/main-image.png";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <main className="flex w-screen h-screen overflow-hidden">
        <div className="w-1/2 relative overflow-hidden">
          <Image
            src={img}
            alt="image of a writing"
            fill
            priority
            className="object-cover"
          ></Image>
        </div>
        <section className="w-1/2 flex flex-col h-full justify-center items-center bg-zinc-950 text-white gap-5">
          <h1 className=" text-4xl font-extrabold">VERSE WRITE</h1>
          <p>Start Writing Your Verse With Ease Like Never Before</p>
          <div className="flex  mt-5 gap-5">
            <Link href="/signin">
              <button className="w-40 bg-black px-2 py-4 cursor-pointer rounded-2xl shadow-white shadow">
                SIGN IN
              </button>
            </Link>

            <Link href="/signup">
              <button className="w-40 bg-black px-2 py-4 cursor-pointer rounded-2xl shadow-white shadow">
                SIGN UP
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
