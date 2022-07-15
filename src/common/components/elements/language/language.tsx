import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

export const languageData = [
    {
        language: "Français",
        level: 100,
    },
    {
        language: "Turc",
        level: 100,
    },
    {
        language: "Anglais",
        level: 70,
    },
    {
        language: "Allemand",
        level: 15,
    },
]

const Language = () => {
    return (
        <section className={styles.language}>
            <div className={styles.language__header}>
                <h1>Formations</h1>
            </div>
            <Divider className={styles.language__divider} variant="middle"/>
            <div className={styles.language__description}>
                {languageData.map((language, index) => (
                    <div key={index}>
                        <p>{language.language} :</p>
                        <LinearProgress variant="determinate" value={language.level} />
                        <span className={styles.language__description__level}>{language.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Language;
