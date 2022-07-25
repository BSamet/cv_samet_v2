import React, {useState} from 'react';
import styles from "../../../styles/Home.module.scss";
import {Chip, Divider, ListItem, ListItemAvatar, ListItemText, Paper, Rating} from "@mui/material";

export const devSkillsData = [
    {
        language: "HTML5",
        framework: [],
        level: 4.5,
        color: "#DD4B25"
    },
    {
        language: "CSS3",
        framework: [
            {
                title: "SASS"
            },
            {
                title: "Bootstrap"
            },
            {
                title: "Tailwind CSS"
            }
        ],
        level: 4.5,
        color: "#254BDD"
    },
    {
        language: "PHP",
        framework: [],
        level: 3,
        color: "#7377AD"
    },
    {
        language: "SQL",
        framework: [
            {
                title: "MySQL",
            },
            {
                title: "PostGreSQL",
            },
            {
                title: "MongoDB",
            }
        ],
        level: 3.5,
        color: "#92959d"
    },
    {
        language: "Javascript",
        framework: [
            {
                title: "Angular",
            },
            {
                title: "Ionic",
            },
            {
                title: "VueJS",
            },
            {
                title: "React",
            },
            {
                title: "React Native",
            },
            {
                title: "NextJs",
            },
            {
                title: "NodeJs",
            },
            {
                title: "ExpressJs",
            },
            {
                title: "NestJs",
            },
            {
                title: "jQuery",
            },
        ],
        level: 4,
        color: "#CBB12F"
    },
    {
        language: "Java",
        framework: [
            {
                title: "SpringBoot",
            },
            {
                title: "JavaEE",
            },
        ],
        level: 3.5,
        color: "#E8302C"
    },
    {
        language: "C/C++",
        framework: [],
        level: 1,
        color: "#6295CB"
    }
]

const DevSkills = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const expandList = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className={styles.devSkills}>
            <div className={styles.devSkills__header}>
                <h1>Compétences</h1>
            </div>
            <Divider className={styles.devSkills__divider} variant="middle"/>
            <div className={styles.devSkills__description}>
                {devSkillsData.sort((a, b) => b.level - a.level).map((devSkill, index) => (
                    <Paper elevation={3}>
                        <ListItem key={index} className={styles.devSkills__description__list}>
                            <ListItemAvatar>
                                <h6>{devSkill.language}</h6>
                            </ListItemAvatar>
                            {/*TODO Error here*/}
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Rating name="half-rating-read" defaultValue={devSkill.level} precision={0.5}
                                                readOnly size="large" style={{marginLeft: "2%"}}/>
                                    </React.Fragment>}
                                secondary={
                                    <div style={{display: "flex", flexWrap: "wrap"}}>
                                        {devSkill.framework.map((framework, index) => (
                                            <Chip key={index} style={{backgroundColor: devSkill.color, color: "white", margin: 2}}
                                                  label={framework.title}/>
                                        ))}
                                    </div>
                                }
                            />
                        </ListItem>
                    </Paper>
                ))}
            </div>
        </section>
    );
};

export default DevSkills;
