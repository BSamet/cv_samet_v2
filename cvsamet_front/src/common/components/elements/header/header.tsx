import React from 'react';
import styles from  "../../../styles/Home.module.scss";
import {Paper} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AvatarPicture from "../../../assets/picture/samet_carré.jpg"
import Image from 'next/image'

const Header = () => {
    return (
        <Paper elevation={1} className={styles.headerSection}>
            <div className={styles.headerSection__cvAndMailInfoSection}>
                <div className={styles.headerSection__cvAndMailInfo}>
                    <CallIcon className={styles.headerSection__cvAndMailInfo__icon} />
                    <p>06.79.33.88.20</p>
                </div>
                <div className={styles.headerSection__cvAndMailInfo}>
                    <EmailIcon className={styles.headerSection__cvAndMailInfo__icon} />
                    <p>samet.sb.68@gmail.com</p>
                </div>
            </div>
            <div className={styles.headerSection__mainHeader}>
                <Image src={AvatarPicture} width={100} height={100}/>
            </div>
        </Paper>
    );
};

export default Header;
