import React, {useState} from 'react';
import styles from "../../../styles/Home.module.scss";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

const Navbar = () => {
    const [navLocation, setNavLocation] = useState('');

    const navbarData = [
        {
            title: "Accueil"
        },
        {
            title: "Compétences professionnelles"
        },
        {
            title: "Portfolio"
        },
        {
            title: "Centres d'intérêt"
        },
        {
            title: "Contact"
        },
    ]

    function setNavigation (title: string) {
        setNavLocation(title)
    }

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className={styles.navbar}
        >
            <Toolbar>
                <nav className={styles.navbar__nav}>
                    {navbarData.map((nav, index) => {
                        return (
                            <Link
                                key={index}
                                className={styles.navbar__button}
                                onClick={() => setNavigation(nav.title)}
                                sx={nav.title === navLocation ? {color: "#ffffff"} : {color: "#999999"}}
                            >
                                {nav.title}
                            </Link>
                        )
                    })}
                </nav>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;