import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Divider, Paper} from "@mui/material";
import jetBrains from "../../../assets/toolsPicture/jetbrains-logo.png"

const Tools = () => {
    return (
        <section className={styles.tools}>
            <div className={styles.tools__header}>
                <h1>Outils</h1>
            </div>
            <Divider className={styles.tools__divider} variant="middle"/>
            <div className={styles.tools__description}>
                <Paper className={styles.tools__description__card} elevation={3}>
                    <img
                        src={jetBrains.src}
                        alt="JetBrains"
                        className={styles.tools__description__card__image}
                    />
                    <Divider className={styles.tools__divider} variant="fullWidt "/>
                    <h3>JetBrains</h3>
                </Paper>
            </div>
        </section>
    );
};

export default Tools;
