import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
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

      <Hero />

      {/* <ModeToggle /> */}
    </main>
  );
}
