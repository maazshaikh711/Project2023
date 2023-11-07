import React from 'react'
import Eth from '../assets/eth.png'
const swapheader = () => {
  return (
    <header>
    <div className="leftH">
      
      
        <div className="headerItem">Swap</div>
      
      
    </div>
    <div className="rightH">
      <div className="headerItem">
        <img src={Eth} alt="eth" className="eth" />
        Ethereum
      </div>
      <div className="connectButton" >
        {/* {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"} */}
      </div>
    </div>
  </header>
  )
}

export default swapheader