import React from 'react';

import styles from './Experiences.module.scss';
import Image from 'next/image';

type Experience = {
    image: string;
    name: string;
    company: string;
    date: string;
    position: string;
};

const ExperiencesList: Experience[] = [
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQGkJTWPpx1AUQ/company-logo_100_100/0/1631346552432?e=1720656000&v=beta&t=vYOnkYn2X2wqtydbaPBjK3WSeFlMOTyhHvi-EDrjAwE",
        name: "Game designer / artist",
        company: "Megalis Bretagne",
        date: "Décembre 2021 - Avril 2022",
        position: "Rennes, France",
    },
    {
        image: "",
        name: "Ingénieur Thermique",
        company: "Liebherr Aerospace Toulouse · CDI",
        date: "Juillet 2007 - Aout 2020",
        position: "Toulouse, France",
    },
    {
        image: "",
        name: "Ingénieur Thermique et mécanique",
        company: "MCA Ingénierie · CDIMCA",
        date: "Septembre 2000 - Juin 2007",
        position: "Marcoules, Argenteuil, Limeil-brévannes",
    }
];

type Formation = {
    image: string;
    name: string;
    school: string;
    date: string;
};

const FormationsList: Formation[] = [
    {
        image: "",
        name: "Activ'Design Rennes",
        school: "Licence, Game design",
        date: "Mai 2021 - Juin 2022",
    },
    {
        image: "https://media.licdn.com/dms/image/D4E0BAQGhVsXtqeW…eta&t=j_xdn06jZQKvclWYAcGpSBaaz1DDeaobMprzeRiB-RE",
        name: "Aix-Marseille Université",
        school: "Dess, Techniques de l'espace",
        date: "1999 - 2000",
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQGXZPFarym…eta&t=o-DpuS9IeMVgP7UKxLy2umoNVSBfqAgGBtVZL9wbpLg",
        name: "Université de Bordeaux",
        school: "Maîtrise, Mécanique",
        date: "1998 - 1999",
    }
];

const Experiences = () => {
    return (
        <section className={styles.Experiences_container} id="experiences">
            <h1 className={styles.Experiences_title}>
                Experiences
            </h1>

            <p>
                Ici y&apos;aura des trucs sur les expériences
                genre le nom de l&apos;entreprise, le poste, les missions, les technologies utilisées, les dates, etc.
            </p>
            
        </section>
    );
};

export default Experiences;
