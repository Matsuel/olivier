import React from 'react';

import styles from './Home.module.scss';
import { Emoji } from 'emoji-picker-react';

interface HomeProps {

}

const Home = ({ }: HomeProps) => {
    return (
        <section className={styles.Home_container} id="home">
            <div className={styles.Home_content}>
                <div className={styles.Home_profile} />
                <div className={styles.Home_content_text}>
                    <h1 className={styles.Home_name}>Olivier Tebar</h1>
                    <p className={styles.Home_description}>Game designer, France 🇫🇷 <Emoji unified="1f1e8-1f1f5" size={20}/></p>
                </div>
            </div>

            <div className={styles.Home_speech}>
                <p>Hi everyone.</p>

                <p>I am Hito, a <code>former R&D</code> engineer during about <code>20 years</code>. I have worked in different industries and been involved in a few major international projects. Despite my interest in this position, I fell the need to integrate an artistic side to my work.
                So I started a <code>retraining in 2021</code> in order to become a <code>game designer</code>.
                Both technical and artistic aspects mixed in one role, the best position i could imagine ever.</p>

                <p>So here we are. I am gonna try to show you some of my creations. Thank you to take a look to my works. Additionnal contents will be available soon.</p>

                <p><strong>Breaking news</strong> : Climb demo update is out.  :)</p>

                <p>Feel free to let constructive comments. Any advice is really welcome.</p>

                <p><code>Hito</code></p>
            </div>

        </section>
    );
};

export default Home;
