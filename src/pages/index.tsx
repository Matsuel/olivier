import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between relative`}
    >

      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-56">
        Tailwind CSS
      </h1>

    </main>
  );
}
