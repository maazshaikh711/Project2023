import '../styles/globals.css'
import './index.css'
// import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { NextUIProvider } from '@nextui-org/react';
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    // <MoralisProvider
    //   serverUrl='https://vlrdcbhyo4dj.grandmoralis.com:2053/server'
    //   appId='7B8Tc39fqOfOosQYksMjQsjqUuo57TALzP4Cz5RC'
    // >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    // </MoralisProvider>
  )
}

export default MyApp
