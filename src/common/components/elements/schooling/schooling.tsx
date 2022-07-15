import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider} from "@mui/material";
import WorkExperiences, {workExperiencesData} from "../workExperiences/workExperiences";

export const schoolingData = [
    {
        title: "Diplôme Universitaire en Génie Logiciel (en cours)",
        date: "2023",
        school: "Université de Haute-Alsace",
    },
    {
        title: "Formation SSIAP 1",
        date: "2016",
        school: "FACS Mulhouse",
    },
    {
        title: "CQP Agent de prévention et de sécurité\n",
        date: "2016",
        school: "FACS Mulhouse",
    },
    {
        title: "BAC Professionnel Commerce",
        date: "2015",
        school: "Lycée Joseph Storck",
    },
]

const Schooling = () => {
    return (
        <section className={styles.schooling}>
            <div className={styles.schooling__header}>
                <h1>Formations</h1>
            </div>
            <Divider className={styles.schooling__divider} variant="middle"/>
            <div className={styles.schooling__description}>
                {schoolingData.map((schooling, index) => (
                    <div key={index}>
                        <div className={styles.schooling__description__date}>
                            <span><i>{schooling.date}</i></span>
                        </div>
                        <Divider className={styles.schooling__description__divider} orientation={"vertical"} variant="middle"/>
                        <div className={styles.schooling__description__info}>
                            <p><b>{schooling.title}</b></p>
                            <em>{schooling.school}</em>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Schooling;
