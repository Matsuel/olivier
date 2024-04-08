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
            
        </section>
    );
};

export default Experiences;
