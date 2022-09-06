import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider, Paper} from "@mui/material";
import Sport from "../../../assets/interests/salle_de_sport.jpg"
import Game from "../../../assets/interests/jeux.jpg"
import Cinema from "../../../assets/interests/film.jpg"
import Music from "../../../assets/interests/musique.jpg"
import interests from "../../../../pages/interests";

export const interestsDetailsData = [
    {
        title: "Sport",
        image: Sport,
        detail: "Musculation, Boxe Anglaise, VTT",
    },
    {
        title: "Jeux Vidéo",
        image: Game,
        detail: "Hearthstone, Fortnite, Échecs",
    },
    {
        title: "Films/Séries",
        image: Cinema,
        detail: "Aventure, Fantasy, Animés japonais, ...",
    },
    {
        title: "Musique",
        image: Music,
        detail: "Rap, Pop, Hip-hop, Musique du monde, ...",
    },
]

const InterestsDetails = () => {
    return (
        <section className={styles.interestsDetails}>
            <div className={styles.interestsDetails__header}>
                <h1>Centres d'intérêt</h1>
            </div>
            <Divider className={styles.interestsDetails__divider} variant="middle"/>
            <div className={styles.interestsDetails__description}>
                {interestsDetailsData.map((interest, index) => (
                    <Paper key={index} className={styles.interestsDetails__description__paper}
                           sx={{
                               backgroundImage: `url(${interest.image.src})`,
                               backgroundSize: "cover",
                               backgroundPosition: "center",
                           }}>
                        <h3>{interest.title}</h3>
                        <p>{interest.detail}</p>
                    </Paper>
                ))}
            </div>
        </section>
    );
};

export default InterestsDetails;
