import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../common/components/elements/header/header";
import React from "react";
import AboutMe from "../common/components/elements/aboutMe/aboutMe";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Samet Bulut</title>
        <meta name="description" content="CV de Samet BULUT" />
        <meta name="author" content="Samet BULUT" />
      </Head>
        <Header />
        <AboutMe />
    </section>
  )
}

export default Home
