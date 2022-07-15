import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider} from "@mui/material";

export const workExperiencesData = [
    {
        title: "Technico-commercial",
        company: "K&M Confort, France Solar, Vitale Energie.",
        date: "Oct 2018 - Mars 2021",
        description: "Technico-commercial B to B, Alsace et région voisine. Secteur de l'énergie renouvelable.",
    },
    {
        title: "Agent SSIAP 1",
        company: "Événementiel, Hôpital Belfort / Trévenans, Sécuritas.",
        date: "Janv 2016 - Mars 2019",
        description: "Service de Sécurité Incendie et d'Assistance à Personnes.",
    },
]

const WorkExperiences = () => {
    return (
        <section className={styles.workExperiences}>
            <div className={styles.workExperiences__header}>
                <h1>Expériences Professionnelles</h1>
            </div>
            <Divider className={styles.workExperiences__divider} variant="middle"/>
            <div className={styles.workExperiences__description}>
                {workExperiencesData.map((experience, index) => (
                    <div key={index}>
                        <div>
                            <span><i>{experience.date}</i></span>
                            <p><b>{experience.title} - {experience.company}</b></p>
                            <p>{experience.description}</p>
                        </div>
                        <Divider variant="middle"/>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperiences;
