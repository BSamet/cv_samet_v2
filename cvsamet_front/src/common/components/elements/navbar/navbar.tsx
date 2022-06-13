import React from 'react';
import styles from "../../../styles/Home.module.scss";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

const Navbar = () => {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            className={styles.navbar}
        >
            <Toolbar>
                <nav className={styles.navbar__nav}>
                    <Link
                        href="#"
                        className={styles.navbar__button}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="#"
                        className={styles.navbar__button}
                    >
                        Compétences professionnelles
                    </Link>
                    <Link
                        href="#"
                        className={styles.navbar__button}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#"
                        className={styles.navbar__button}
                    >
                        Centres d'intérêt
                    </Link>
                    <Link
                        href="#"
                        className={styles.navbar__button}
                    >
                        Contact
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;