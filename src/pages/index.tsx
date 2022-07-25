import type { NextPage } from 'next'
import Head from 'next/head'
import React from "react";
import styles from "../common/styles/Home.module.scss";
import AboutMe from "../common/components/elements/aboutMe/aboutMe";
import WorkExperiences from "../common/components/elements/workExperiences/workExperiences";
import Schooling from "../common/components/elements/schooling/schooling";
import Language from "../common/components/elements/language/language";
import StrongPoint from "../common/components/elements/strongPoint/strongPoint";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Samet Bulut</title>
        <meta name="description" content="CV de Samet BULUT" />
        <meta name="author" content="Samet BULUT" />
      </Head>
        <AboutMe />
        <WorkExperiences />
        <Schooling />
        <div className={styles.home__languageAndStrongPointSection}>
          <Language />
          <StrongPoint />
        </div>
    </section>
  )
}

export default Home
