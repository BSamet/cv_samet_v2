import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {CardContent, Divider} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CvSamet from "../../../assets/portfolio/cv_sametbulut.png"
import Smcom from "../../../assets/portfolio/smcom.png"
import Avenir from "../../../assets/portfolio/Avenir.png"
import Ebn from "../../../assets/portfolio/ebn.png"

export const worksData = [
    {
        title: "Portfolio de Samet Bulut",
        image: CvSamet,
        detail: "Mon portfolio en ligne",
        technologies: ["nextJs", "TypeScript", "MUI", "Sass", "Git"],
        link: "https://github.com/BSamet/cv_samet_v2"
    },
    {
        title: "SMCOM",
        image: Smcom,
        detail: "Création d'une application web permettant à des utilisateurs de pouvoir visualiser et d’interagir avec des machines à commande numérique.",
        technologies: ["Angular", "JsonSever", "API Rest", "Swagger", "Git"],
        link: "https://github.com/BSamet/smcom"
    },
    {
        title: "Avenir",
        image: Avenir,
        detail: "Création d'une application mobile permettant d'apporter bien-être et motivation à l’utilisateur.",
        technologies: ["Ionic", "NestJs", "Tailwind", "TypeScript", "PostgreSQL", "Docker", "Swagger", "Git"],
        link: "https://github.com/BSamet/avenir"
    },
    {
        title: "Ebn",
        image: Ebn,
        detail: "Mise en place d'une application web et mobile d'optimisation de la collecte les biodéchets de la ville de Mulhouse, particuliers ou professionnels.",
        technologies: ["ReactJS", "ReactNative", "NestJs", "TypeScript", "Sass", "MySql", "Docker", "Swagger", "Git"],
        link: "https://github.com/BSamet/ebn"
    },
]

const Works = () => {
    return (
        <section className={styles.works}>
            <div className={styles.works__header}>
                <h1>Portfolio</h1>
            </div>
            <Divider className={styles.works__divider} variant="middle"/>
            <div className={styles.works__description}>
                {worksData.map((work, index) => (
                    <Card key={index} sx={{maxWidth: 500, borderRadius: 5, marginBottom: 1, marginTop: 1}}
                          elevation={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={work.image.src}
                            title={work.title}
                            alt={work.title}
                        />
                        <CardContent className={styles.works__description__card}>
                            <h3>{work.title}</h3>
                            <div className={styles.works__description__cardDetails}>
                                <Divider sx={{marginTop: 3}} variant="middle"/>
                                <div>
                                    <h6>Description du projet</h6>
                                    <p>{work.detail}</p>
                                </div>
                                <Divider sx={{marginTop: 3}} variant="middle"/>
                                <div>
                                    <h6>Technologies</h6>
                                    <p>{work.technologies.join(", ")}</p>
                                </div>
                                <Divider sx={{marginTop: 3}} variant="middle"/>
                                <div>
                                    <h6>GitHub</h6>
                                    <p><a href={work.link} target={"_blank"} rel="noreferrer">{work.title}</a></p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Works;
