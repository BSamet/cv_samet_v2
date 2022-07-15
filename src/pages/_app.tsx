import '../common/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from "../common/components/elements/header/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
