import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between relative`}
    >

      <Head>
        <title>H1to</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-56">
        Tailwind CSS
      </h1>

      <ModeToggle />
    </main>
  );
}
