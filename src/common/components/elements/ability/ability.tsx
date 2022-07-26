import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider} from "@mui/material";
import Image from 'next/image'
import frontEnd from '../../../assets/icon/front-end.svg'
import backEnd from '../../../assets/icon/back-end.svg'
import responsive from '../../../assets/icon/responsive.svg'

const Ability = () => {
    return (
        <section className={styles.ability}>
            <div className={styles.ability__header}>
                <h1>Capacité</h1>
            </div>
            <Divider className={styles.ability__divider} variant="middle"/>
            <div className={styles.ability__description}>
                <div className={styles.ability__description__block}>
                    <img
                        src={frontEnd.src}
                        alt="Développement Front-End"
                        className={styles.ability__description__block__frontEnd}
                    />
                    <h3>Développement Front-End</h3>
                </div>
                <div className={styles.ability__description__block}>
                    <img
                        src={backEnd.src}
                        alt="Développement Back-End"
                        className={styles.ability__description__block__backEnd}
                    />
                    <h3>Développement Back-End</h3>
                </div>
                <div className={styles.ability__description__block}>
                    <img
                        src={responsive.src}
                        alt="Responsive design"
                        className={styles.ability__description__block__responsive}
                    />
                    <h3>Responsive design</h3>
                </div>
            </div>
        </section>
    );
};

export default Ability;
