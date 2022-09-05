import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Paper} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import Navbar from "../navbar/navbar";
import ProfilePicture from '../../../assets/picture/samet_carré.jpg';

const Header = () => {
    return (
        <React.Fragment>
            <Paper elevation={1} className={styles.headerSection}>
                <div className={styles.headerSection__cvAndMailInfoSection}>
                    <div className={styles.headerSection__cvAndMailInfo}>
                        <CallIcon className={styles.headerSection__cvAndMailInfo__icon}/>
                        <p>06.79.33.88.20</p>
                    </div>
                    <div className={styles.headerSection__cvAndMailInfo}>
                        <EmailIcon className={styles.headerSection__cvAndMailInfo__icon}/>
                        <p>samet.sb.68@gmail.com</p>
                    </div>
                </div>
                <div className={styles.headerSection__mainHeader}>
                    <Avatar
                        alt="SAMET BULUT"
                        src={ProfilePicture.src}
                        className={styles.headerSection__mainHeader__images}
                    />
                    <h1>SAMET BULUT</h1>
                    <p>Développeur Full Stack</p>
                </div>
            </Paper>
            <Navbar/>
        </React.Fragment>
    );
};

export default Header;
