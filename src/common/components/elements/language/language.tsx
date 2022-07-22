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
                <h1>Langues</h1>
            </div>
            <Divider className={styles.language__divider} variant="middle"/>
            <div className={styles.language__description}>
                {languageData.map((language, index) => (
                    <div key={index}>
                        <p><b>{language.language} :</b></p>
                        <LinearProgress className={styles.language__description__progressbar} variant="determinate" value={language.level} />
                        <span className={styles.language__description__level}><b>{language.level}%</b></span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Language;
