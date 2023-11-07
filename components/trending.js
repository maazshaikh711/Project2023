import { useState } from "react"
import Rate from "./cmc-table/rate"
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"
import TrendingCard from "./trendingCard"
import ReactSwitch from "react-switch"
import eth from "../assets/eth.png"
import cardano from "../assets/cardano.png"
import bnb from "../assets/bnb.png"
import uniswap from "../assets/uniswap.png"
import pet from "../assets/pet.png"
import icp from "../assets/ICP.png"
const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {
    const [checked, setChecked] = useState(false)

    const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "4.17%"
        }, {
            number: 2,
            symbol: "ETH",
            name: "Ethereum",
            icon: eth,
            isIncrement:false,
            rate: "10.48"
        }, {
            number: 3,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
            isIncrement: false,
            rate: "0"
        },
    ]
    const BiggestGainer= [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
            isIncrement: true,
            rate: "4.17%"
        }, {
            number: 2,
            symbol: "ADA",
            name: "Cardano",
            icon: cardano,
            isIncrement:true,
            rate: "4.41"
        }, {
            number: 3,
            symbol: "BNB",
            name: "Binance",
            icon: bnb,
            isIncrement: true,
            rate: "1.59"
        },
    ]
    const RecentlyAdded= [
        {
            number: 1,
            symbol: "PSDB",
            name: "Pet Shop",
            icon: pet,
            isIncrement: true,
            rate: "4.17%"
        }, {
            number: 2,
            symbol: "UNI",
            name: "Uniswap",
            icon: uniswap,
            isIncrement:true,
            rate: "4.41"
        }, {
            number: 3,
            symbol: "ICP",
            name: "Internet Computer",
            icon: icp,
            isIncrement: true,
            rate: "1.59"
        },
    ]
    return <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by Market Cap</h1>

                <div className="flex">
                    <p className="text-gray-400 ">Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} />
                </div>
            </div>
            <br />
            <div className="flex">
                <p>The global crypto market cap is $1.74T, a &nbsp; </p>
                <span> <Rate isIncrement={true} rate='0.53%' /> </span>
                <p> &nbsp; decrease over the last day. <span className="underline">Read More</span> </p>
            </div>
            <br />

            <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />
                <TrendingCard title='Biggest Gainers' icon={gainers} trendingData={BiggestGainer} />
                <TrendingCard title='Recently Added' icon={recent} trendingData={RecentlyAdded} />
            </div>
        </div>
    </div>
}

export default Trending