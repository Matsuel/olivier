import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Image from "next/image";
import TopGradient from "@/assets/top-gradient.svg";
import BottomGradient from "@/assets/bot-gradient.svg";


export default function Home() {
  return (
    <>
      <Head>
        <title>Olivier tebar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Image src={TopGradient} alt="Top Gradient" className={styles.topGradient} />
        <Navbar />
        <Image src={BottomGradient} alt="Bottom Gradient" className={styles.botGradient} />
      </div>
    </>
  );
}
