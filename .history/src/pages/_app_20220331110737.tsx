import { Header } from '../components/Header'
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import '../styles/global.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      
      <Component {...pageProps} />
      <Header />
    </SessionProvider>
  )
  
}

export default MyApp
