import React, {useState} from 'react';
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
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SportsIcon from '@mui/icons-material/Sports';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider} from "@mui/material";

export const navbarData = [
    {
        title: "Accueil",
        icon: HomeIcon,
    },
    {
        title: "Compétences professionnelles",
        icon: KeyboardDoubleArrowUpIcon,
    },
    {
        title: "Portfolio",
        icon: HistoryEduIcon,
    },
    {
        title: "Centres d'intérêt",
        icon: SportsIcon,
    },
    {
        title: "Contact",
        icon: ContactsIcon,
    },
]

const Navbar = () => {
    const [navLocation, setNavLocation] = useState('Accueil');
    const [state, setState] = React.useState({
        bottom: false,
    });

    function setNavigation(title: string) {
        setNavLocation(title)
    }

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
                            <ListItemButton
                                onClick={() => setNavigation(pages.title)}
                                sx={pages.title === navLocation ? {color: "#ffffff"} : {color: "#999999"}}
                                className={styles.navbar__navDrawer__button}
                            >
                                <ListItemIcon>
                                    <pages.icon className={styles.navbar__navDrawer__buttonIcon}/>
                                </ListItemIcon>
                                <ListItemText primary={pages.title}/>
                            </ListItemButton>
                        </ListItem>
                        <Divider style={{ background: 'white' }} variant="middle"/>
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
                                onClick={() => setNavigation(nav.title)}
                                sx={nav.title === navLocation ? {color: "#ffffff"} : {color: "#999999"}}
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