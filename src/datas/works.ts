import { StaticImageData } from "next/image";

export type WorkType = {
    src: string;
    title: string;
    company: string;
    date: string;
}

export const works: WorkType[] = [
    {
        src: "https://media.licdn.com/dms/image/C4D0BAQGkJTWPpx1AUQ/company-logo_100_100/0/1631346552432?e=1725494400&v=beta&t=z6TtL6uyaqYX_xQQw25f_4QNjgoNAmBqU33ehMEa2ss",
        title: "Game designer/artist",
        company: "Megalis Bretagne",
        date: "Décembre 2021 - Avril 2022"
    },
    {
        src:"",
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