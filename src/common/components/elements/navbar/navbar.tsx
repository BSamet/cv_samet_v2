import React from 'react';
import styles from "../../../styles/Home.module.scss";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider} from "@mui/material";
import {useRouter} from "next/router";

export const navbarData = [
    {
        title: "Accueil",
        icon: HomeIcon,
        link: "/"
    },
    {
        title: "Compétences professionnelles",
        icon: LogoDevIcon,
        link: "/skills"
    },
    {
        title: "Portfolio",
        icon: BackupTableIcon,
        link: "/portfolio"
    },
    {
        title: "Centres d'intérêt",
        icon: InterestsIcon,
        link: "/interests"
    },
    {
        title: "Contact",
        icon: ContactsIcon,
        link: "/contact"
    },
]

const Navbar = () => {
    const router = useRouter();
    const pagesPath = router.asPath
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const navList = (anchor: string) => (
        <Box
            sx={{width: "auto"}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={styles.navbar__navDrawer}>
                {navbarData.map((pages, index) => (
                    <div key={index}>
                        <ListItem disablePadding>
                            <Link href={pages.link} style={{ textDecoration: 'none' }}>
                                <ListItemButton
                                    sx={pages.link === pagesPath ? {color: "#ffffff"} : {color: "#999999"}}
                                    className={styles.navbar__navDrawer__button}
                                >
                                    <ListItemIcon>
                                        <pages.icon className={styles.navbar__navDrawer__buttonIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={pages.title}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider style={{background: 'white'}} variant="middle"/>
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className={styles.navbar}
        >
            <Toolbar className={styles.navbar__normalNav}>
                <nav className={styles.navbar__nav}>
                    {navbarData.map((nav, index) => (
                        <Link
                            key={index}
                            className={styles.navbar__button}
                            sx={nav.link === pagesPath ? {color: "#ffffff"} : {color: "#999999"}}
                            href={nav.link}
                        >
                            {nav.title}
                        </Link>
                    ))}
                </nav>
            </Toolbar>

            <Toolbar className={styles.navbar__minNav}>
                <Button onClick={toggleDrawer('bottom', true)}><MenuIcon fontSize={'large'}/></Button>
                <Drawer
                    anchor={'bottom'}
                    open={state['bottom']}
                    onClose={toggleDrawer('bottom', false)}
                >
                    {navList('bottom')}
                </Drawer>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;