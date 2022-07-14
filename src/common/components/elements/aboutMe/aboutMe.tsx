import React from 'react';
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";
import styles from "../../../styles/Home.module.scss";

const AboutMe = () => {
    const downloadCvOnClick = () => {
        const link = document.createElement("a");
        link.download = "cv_samet.pdf";
        link.href = "../../../assets/docs/cv_samet.pdf";
        link.click();
    };

    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMe__header}>
                <h1>À propos</h1>
                <h6><i>26 ans, Permis B, vivant à SOULTZ HAUT-RHIN</i></h6>
            </div>
            <Divider className={styles.aboutMe__divider} variant="middle"/>
            <div className={styles.aboutMe__description}>
                <p>
                    Passionné d’informatique depuis mon plus jeune âge, je n’ai cessé de suivre l’évolution de ces technologies.<br />
                    Suite à une reconversion professionnelle, j'ai souhaité me diriger dans le domaine du développement web en suivant des formations en autodidacte et en apprenant de nombreux logiciels ainsi que les bases de la programmation qui m'aideront à déboucher sur le métier de développeur web.<br />
                    <b>N'hésitez pas à me contacter.</b>
                </p>
                <Button variant="contained" className={styles.aboutMe__description__button}
                        onClick={downloadCvOnClick}
                >
                    <p><span>T</span>élécharger mon <span>CV</span></p>
                </Button>
            </div>
        </section>
    );
};

export default AboutMe;
