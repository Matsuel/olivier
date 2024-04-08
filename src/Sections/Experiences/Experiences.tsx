import React from 'react';

import styles from './Experiences.module.scss';

interface ExperiencesProps {

}

const Experiences = ({ }: ExperiencesProps) => {
    return (
        <section className={styles.Experiences_container} id="experiences">
            <h1 className={styles.Experiences_title}>
                C'est les expériences là
            </h1>

            <p>
                Ici y'aura des trucs sur les expériences
                genre le nom de l'entreprise, le poste, les missions, les technologies utilisées, les dates, etc.
            </p>
            
        </section>
    );
};

export default Experiences;
