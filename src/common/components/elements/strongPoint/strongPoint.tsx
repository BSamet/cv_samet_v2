import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider} from "@mui/material";

export const strongPointData = [
    {
        point: 'Curiosité',
    },
    {
        point: 'Persévérance'
    },
    {
        point: 'Rigueur'
    },
    {
        point: 'Autodidacte'
    },
    {
        point: 'Esprit d\'équipe'
    },
    {
        point: 'Bonne capacité d\'adaptation'
    },
]


const StrongPoint = () => {
    return (
        <section className={styles.strongPoint}>
            <div className={styles.strongPoint__header}>
                <h1>Points forts</h1>
            </div>
            <Divider className={styles.strongPoint__divider} variant="middle"/>
            <ul className={styles.strongPoint__description}>
                {strongPointData.map((strongPoint, index) => (
                    <li><b>{strongPoint.point}</b></li>
                ))}
            </ul>
        </section>
    );
};

export default StrongPoint;
