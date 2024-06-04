import { StaticImageData } from "next/image";
import Liebherr from "@/assets/liebherr.svg";
import Megalis from "@/assets/megalis.jpg";

export type WorkType = {
    src: string | StaticImageData;
    title: string;
    company: string;
    date: string;
}

export const works: WorkType[] = [
    {
        src: Megalis,
        title: "Game designer/artist",
        company: "Megalis Bretagne",
        date: "Décembre 2021 - Avril 2022"
    },
    {
        src: Liebherr,
        title: "Igénieur thermique",
        company: "Liebherr Aerospace Toulouse · CDI",
        date: "Juillet 2007 - Aout 2020",
    },
    {
        src:"",
        title: "Ingénieur Thermique et mécanique",
        company: "MCA Ingénierie · CDIMCA",
        date: "Septembre 2000 - Juin 2007",
    }
]