import type { NextPage } from 'next'
import Head from 'next/head'
import Main from "./main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Samet Bulut</title>
        <meta name="description" content="CV de Samet BULUT" />
        <meta name="author" content="Samet BULUT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}

export default Home
