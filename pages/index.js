import CMCtable from '../components/cmc-table/cmcTable'
import Header from '../components/header'
import Trending from '../components/trending'
// import SwapCryptoModal from '../components/swapCryptoModal'
import Head from 'next/head'
import Swapheader from '../components/swapheader'

export default function Home() {
  
  return (
    
    <div className='min-h-screen'>
      <Head>
      <title>CoinMartBlockchain</title>
      </Head>
      <Header />
      {/* <SwapCryptoModal /> */}
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCtable />
    </div>
  )
}
