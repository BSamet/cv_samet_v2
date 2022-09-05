import React from 'react';
import styles from "../../../styles/Home.module.scss";
import {Card, CardContent, Divider} from "@mui/material";
import jetBrains from "../../../assets/toolsPicture/jetbrains-logo.png"
import git from "../../../assets/toolsPicture/Git.png"
import mamp from "../../../assets/toolsPicture/mamp.png"
import docker from "../../../assets/toolsPicture/Docker.png"
import vscode from "../../../assets/toolsPicture/vscode.png"
import chromeDevTools from "../../../assets/toolsPicture/chrome_dev_tools.png"
import npm from "../../../assets/toolsPicture/npm.png"
import wordpress from "../../../assets/toolsPicture/wordpress.png"
import gimp from "../../../assets/toolsPicture/gimp.png"
import photoshop from "../../../assets/toolsPicture/photoshop.png"
import adobeIllustrator from "../../../assets/toolsPicture/adobeIllustrator.png"
import maven from "../../../assets/toolsPicture/maven.png"
import wildfly from "../../../assets/toolsPicture/wildfly.png"
import windowsWSL2 from "../../../assets/toolsPicture/windows.png"
import linux from "../../../assets/toolsPicture/linux.png"
import slack from "../../../assets/toolsPicture/slack.png"
import jira from "../../../assets/toolsPicture/jira.png"
import confluence from "../../../assets/toolsPicture/confluence.png"

export const toolsData = [
    {
        tool: "JetBrains",
        image: jetBrains
    },
    {
        tool: "Git",
        image: git
    },
    {
        tool: "Mamp/Wamp/Lamp",
        image: mamp
    },
    {
        tool: "Docker",
        image: docker
    },
    {
        tool: "Visual Studio Code",
        image: vscode
    },
    {
        tool: "Chrome DevTools",
        image: chromeDevTools
    },
    {
        tool: "NPM",
        image: npm
    },
    {
        tool: "Maven",
        image: maven
    },
    {
        tool: "WildFly",
        image: wildfly
    },
    {
        tool: "WordPress",
        image: wordpress
    },
    {
        tool: "Slack",
        image: slack
    },
    {
        tool: "Jira",
        image: jira
    },
    {
        tool: "Confluence",
        image: confluence
    },
    {
        tool: "Gimp",
        image: gimp
    },
    {
        tool: "Photoshop",
        image: photoshop
    },
    {
        tool: "Adobe Illustrator",
        image: adobeIllustrator
    },
    {
        tool: "Windows & WSL 2",
        image: windowsWSL2
    },
    {
        tool: "Linux",
        image: linux
    },
]

const Tools = () => {
    return (
        <section className={styles.tools}>
            <div className={styles.tools__header}>
                <h1>Outils</h1>
            </div>
            <Divider className={styles.tools__divider} variant="middle"/>
            <div className={styles.tools__description}>
                {toolsData.map((tool, index) => (
                    <Card elevation={3} sx={{paddingTop: 2, borderRadius: 5}} key={index}>
                        <img
                            height={50}
                            src={tool.image.src}
                            alt="JetBrains"
                        />
                        <CardContent>
                            <h3>
                                {tool.tool}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Tools;
