import Image from 'next/image'
import Search from '../assets/svg/search'
// import { ConnectButton } from 'web3uikit'
// import  Login from './buttons/login'
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import swap from '../assets/swap.png'
// import {useMoralis} from "react-moralis"
import Link from 'next/link'
const styles = {
  navLink: `text-white flex mx-[10px] text-2xl`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#17171A] text-white h-50 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-50 max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924] mx-[10px]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
}

const Header = () => {
  const { getQuote } = useContext(CoinMarketContext)
  // const { isAuthenticated,logout,user} = useMoralis();
  return (
    <div className={styles.header}>
      {/* <Image
        alt=''
        // src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        width={220}
        height={220}
      /> */}
      <Image
       src={swap}
       width={300}
      height={500}
      
      
      />
       

       
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
        <Link href={"/"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Home</div>
        
            <div className={styles.badge} />
          </div>
          </Link>   
          
          <Link href={"/nft/news"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFTnews</div>
            <div className={styles.badge} />
          </div>
          </Link>

          <Link href={"/crypto/news"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>CryptoNews</div>
            <div className={styles.badge} />
          </div>
          </Link>
           
          <Link href={"/currencies/info"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Info</div>
            <div className={styles.badge} />
          </div>
          </Link>
          
          {/* <Link href={"/currencies/price"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Price</div>
         
          </div>
          </Link> */}
          <Link href={"/swap/defiswap"}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>SwapTokens</div>
            <div className={styles.badge} />
         
          </div>
          </Link>
        </nav>

        <div className='flex items-center'>
          {/* <ConnectButton /> */}
          {/* <Login /> */}
         {/* {isAuthenticated ?(<div className='px-10 py3 bg-black  rounded-lg flex-col'>
          <div><p>{user.get('ethAddress')}</p></div>
          <button  type='button'
           onClick={logout}
          className='px-6 py5 bg-blue-500 rounded-lg '>Logout</button>
         </div>):<Login />}  */}
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
