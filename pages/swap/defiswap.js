import React, { useState, useEffect } from "react";
import {  Popover, Radio, message } from "antd";
import {Input, Card, Col, Row, Button, Text, 
  Modal, useModal, Avatar, Grid, Spacer } from "@nextui-org/react";
import Web3 from 'web3';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { Alchemy, Network } from "alchemy-sdk";
import  Erc20 from './erc20.json';
import qs from 'qs';
import swap1 from './swap1.png';
import Link from 'next/link'
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
  ArrowUpOutlined 
} from "@ant-design/icons";
import styles from "./swap.module.css";
import Image from "next/image";
import eth from "./eth.png";
import swap from './swap.png'

const defiswap = () => {
  const { visible, setVisible } = useModal();
  const [flogo, getFromLogo] = useState([]);
  const [fname, getFromName] = useState(['Swap From']);
  const [faddr, getFromAddr] = useState([]);
  const [fdec, getFromDec] = useState([]);
  const [tlogo, getToLogo] = useState([]);
  const [tname, getToName] = useState(['Swap To']);
  const [taddr, getToAddr] = useState([]);
  const [tdec, getToDec] = useState([]);
  const [holdup, setHold] = useState('');
  const [wallet, getWallet] = useState([]);
  const [ alert, setAlert ] = useState(false);
  const settings = {
    apiKey: "PYh86g3D2_EoSL79t36eHst4v0jTXl9d",
    network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

    var zeroxapi = 'https://goerli.api.0x.org'
  useEffect(() => {
  }, [getFromLogo,getFromName,getFromAddr,getFromDec])

  useEffect(() => {
  }, [getToLogo,getToName,getToAddr])

  useEffect(() => {
    const delayDebounce= setTimeout(() => {
      getPrice();
    }, 1000)
     return () => clearTimeout(delayDebounce)
  }, [holdup])
  
  useEffect(() => {
    const delayDebounce= setTimeout(() => {
      getQuote();
    }, )})

  // useEffect(() => {
  //   setTimeout(() =>{
  //       checkBalance();
  //   },2000)
    
  // })
  useEffect(() => {
    setTimeout(() =>{
        displayBalance();
    },2000)
    
  })
  let currentTrade = {};
  let currentSelectSide = null;
  let toTrade = {};
  let toSelectSide = null;

  const sendAlert = () => setAlert(true);

  const fromHandler = (side) => {
    if (wallet.includes('0x')) {
       setVisible(true);
       currentSelectSide = side;
       listFromTokens();
    }
    else {
      sendAlert();
    }
  }

  const toHandler = (side) => {
        setVisible(true);
        toSelectSide = side;
        listToTokens();
        // getPrice()
  };

  var account = null;
  var web3 = null;

  const closeHandler = () => {
      setVisible(false);
      setAlert(false);
      console.log("closed");
    };
    async function connect() {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      web3 = new Web3(connection);
      await connection.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      account = accounts[0];
      
      document.getElementById("wallet-address").textContent = (account.slice(0,4) +"..." +account.slice(38));
      if (account !== null ){
        document.getElementById("status").textContent = 'CONNECTED!';
      }
      else {
        document.getElementById("status").textContent = 'CONNECT';
      }
      getWallet(account);
      checkBalance()
    }

    async function listFromTokens(){
      let response = await fetch('http://localhost:3000/api/tokens');
      let tokenListJSON = await response.json();
      
      // let nresponse = await fetch('https://tokens.coingecko.com/uniswap/all.json');
      // let ntokenListJSON = await nresponse.json();
      // console.log("listing available tokens: ", ntokenListJSON);
      var tokens = tokenListJSON.tokens
      let parent = document.getElementById("token_list");
      for (const i in tokens){
        let div = document.createElement("div");
        div.className = "token_row";
        let html = `
        <img className="token_list_img" width="12%" src="${tokens[i].logoURI}">
          <span className="token_list_text">${tokens[i].symbol}</span>
          `;
        div.innerHTML = html;
        div.onclick = () => {
          selectFrom(tokens[i]);
        };
        parent.appendChild(div)
      }
    }


  function selectFrom(token) {
      currentTrade[currentSelectSide] = token;
      console.log("This is Select S ide",currentTrade);
      closeHandler();
      var fromName = token.name;
      var fromLogo = token.logoURI;
      var fromAddr = token.address;
      var fromDec = token.decimals;
      getFromName(fromName);
      getFromLogo(fromLogo);
      getFromAddr(fromAddr);
      getFromDec(fromDec);
  }
  const nweb3 = new Web3("https://eth-goerli.g.alchemy.com/v2/PYh86g3D2_EoSL79t36eHst4v0jTXl9d");
  // const nweb3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/Efz2bahZx7GjFM0SJAzL5bWvwY3uu0t3");
  let address = "0x29c068ab72c421B92c316f88B709BE9bd6f3e23A";
  let balance;

async function checkBalance() {
  try {
  
      nweb3.eth.getBalance(address).then((balanceInWei) => {

        if (balanceInWei === '0x0000000000000000000000000000000000000000000000000000000000000000') {
          document.getElementById("get_balance").innerHTML = '0.00'
        }
        else{
             balance = ((balanceInWei)/1E18).toFixed(3);
          document.getElementById("get_balance").innerHTML =balance
          console.log(balance)
        }
       
      });
  } catch (error) {
      console.log(error);
  }
}


async function displayBalance(){
try{
const tokenContractAddresses = [faddr];
const data = await alchemy.core.getTokenBalances(
  wallet,
  tokenContractAddresses
)
console.log(data)
data.tokenBalances.find(item => {
  let rawbalance = parseInt(item.tokenBalance, 16).toString()
  console.log("RawBalance",rawbalance)

  let formatbalance = String(Web3.utils.toWei(rawbalance))
  
  console.log("formatbalance: " + formatbalance)
  let nbalance =Number(Web3.utils.fromWei(formatbalance))
  console.log("nbalance: " + (nbalance/1E18))
  let balance = (nbalance/1E18);
  console.log("balance: " + balance.toFixed(6))
  if (item.tokenBalance === '0x0000000000000000000000000000000000000000000000000000000000000000') {
    document.getElementById("get_balanceToken").innerHTML = '0.00'
  }
  else {
    document.getElementById("get_balanceToken").innerHTML = balance.toFixed(3)
  }

 })
}catch (error){
  console.log(error)
  if (error){
    document.getElementById("get_balanceToken").innerHTML = '0.00'
  }

}
}

  async function listToTokens(){
    let response = await fetch('http://localhost:3000/api/tokens');
    let tokenListJSON = await response.json();
    var tokens = tokenListJSON.tokens
    let parent = document.getElementById("token_list");
    for (const i in tokens){
      let div = document.createElement("div");
      div.className = "token_row";
      let html = `
      <img className="token_list_img" width="12%" src="${tokens[i].logoURI}">
      <span className="token_list_text">${tokens[i].symbol}</span>
        `;
      div.innerHTML = html;
      div.onclick = () => {
        selectTo(tokens[i]); 
      };
      parent.appendChild(div)
    }
  }

function selectTo(token) {
    toTrade[toSelectSide] = token;
    console.log("This is To Trade",toTrade);
    closeHandler();
    var toName = token.name;
    var tologo = token.logoURI;
    var toAddr = token.address;
    var toDec = token.decimals;
    getToName(toName);
    getToLogo(tologo);
    getToAddr(toAddr);
    getToDec(toDec);
    // displayBalance();
}
async  function  getPrice(){
  console.log("Getting Price");
  if (!faddr || !taddr || !document.getElementById("from_amount").value) return;
  let  amount = Number(document.getElementById("from_amount").value * 10 ** fdec);
  const params = {
    sellToken: faddr,
    buyToken: taddr,
    sellAmount: amount,
  }
  const response = await fetch(zeroxapi +`/swap/v1/price?${qs.stringify(params)}`);
  // const sources = await fetch(zeroxapi + `/swap/v1/quote?${qs.stringify(params)}`);
  var swapPriceJSON = await  response.json();
  console.log("Price: ", swapPriceJSON);

  // var swapOrders = await sources.json();
  // try {await swapOrders.orders.find(item => {
  //  document.getElementById("defisource").innerHTML = item.source;
  // })}
  // catch (error) {
  //   document.getElementById("defisource").innerHTML = "Pool Not Available";
  // }

  var rawvalue = swapPriceJSON.buyAmount / (10 ** tdec)
  var value = rawvalue.toFixed(3);
  // document.getElementById("to_amount").innerHTML = value
  // document.getElementById("gas_estimate").innerHTML = swapPriceJSON.estimatedGas;
  document.getElementById("to_amount").innerHTML = value
  document.getElementById("gas_estimate").innerHTML = swapPriceJSON.estimatedGas;
}
async function getQuote(){
  console.log("Getting Quote");

  if (!faddr || !taddr || !document.getElementById("from_amount").value) return;
  let  amount = Number(document.getElementById("from_amount").value * 10** fdec);
  const params = {
    sellToken: faddr,
    buyToken: taddr,
    sellAmount: amount,
  }

  // Fetch the swap quote.
  // https://api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=ETH&sellAmount=1000000000000000000&takerAddress=0xab5801a7d398351b8be11c439e05c5b3259aec9b
  const sources = await fetch(zeroxapi +`/swap/v1/quote?${qs.stringify(params)}`);
  // const nsources = await fetch(zeroxapi +`/swap/v1/quote?buyToken=DAI&sellToken=ETH&sellAmount=1000000000000000000&takerAddress=0x29c068ab72c421B92c316f88B709BE9bd6f3e23A`)
  // console.log("Calling to 0x api swap",nsources)
  var swapOrders = await sources.json();
  // try {await swapOrders.orders.find(item => {
  //  document.getElementById("defisource").innerHTML = item.source;
  // })}
  // catch (error) {
  //   document.getElementById("defisource").innerHTML = "Pool Not Available";
  // }
  
  console.log("Quote FROM ALCAMEY: ", swapOrders);
  
  

  return swapOrders;
}
async function swapit() {
  try{
    if (!faddr || !taddr || !document.getElementById("from_amount").value) return;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    web3 = new Web3(connection);
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const userWallet = await signer.getAddress();
    let  amount = Number(document.getElementById("from_amount").value * 10 ** fdec);
    const params = {
      sellToken: faddr,
      buyToken: taddr,
      sellAmount: amount,
    }
    const fromTokenAddress = faddr;
    const getquote = await fetch(zeroxapi + `/swap/v1/quote?${qs.stringify(params)}`);
    var quote = await getquote.json()
    console.log(quote)
    var proxy = quote.allowanceTarget
    var amountstr = amount.toString();
    const ERC20Contract = new ethers.Contract(fromTokenAddress, Erc20, signer);
    console.log(ERC20Contract)
    const approval = await ERC20Contract.approve(proxy, amountstr)
    await approval.wait()
    console.log(approval)
    console.log("trying swap");
    const txParams = {
      ...quote,
      from: userWallet,
      to: quote.to,
      value: (quote.value).toString(16),
      gasPrice: null,
      gas: quote.gas,
    }
    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [txParams],
    });
  
      console.log("trying swap");
  
  //   const web3 = new Web3(Web3.givenProvider);
    
  //   // The address, if any, of the most recently used account that the caller is permitted to access
  //   let accounts = await ethereum.request({ method: "eth_accounts" });
  //   let ad = accounts[0];
  //   const from ="0x29c068ab72c421B92c316f88B709BE9bd6f3e23A"
  //   console.log("takerAddress: ", ad);
  //   // const swapQuoteJSON = await getQuote(takerAddress);
  //   let  amount = Number(document.getElementById("from_amount").value * 10 ** fdec);
  //   const params = {
  //     sellToken: faddr,
  //     buyToken: taddr,
  //     sellAmount: amount,
  //     takerAddress:from,
  // }
    
  //   const getquote = await fetch(zeroxapi + `/swap/v1/quote?${qs.stringify(params)}`);
  //   var quote = await getquote.json()
  //   console.log("getting quotes for swap",quote)
  //   // Set Token Allowance
  //   // Set up approval amount
   
  //   const fromTokenAddress =faddr;
  //   // const tokenContractAddresses = [faddr];
  //   const maxApproval = new BigNumber(2).pow(256).minus(1);
    
  //   const ERC20TokenContract = new web3.eth.Contract(Erc20, fromTokenAddress);
  //   console.log("setup ERC20TokeneContract: ", ERC20TokenContract);
  
  //   // Grant the allowance target an allowance to spend our tokens.
    
  //    const takerAddress="0x29c068ab72c421B92c316f88B709BE9bd6f3e23A"
    
  //   const tx = await ERC20TokenContract.methods.approve(
  //     quote.allowanceTarget,
  //     maxApproval
       
  //   )
  //   .send({from : takerAddress})
  //   .then(tx => {
  //       console.log("tx: ", tx)
  //   });
      
  //   const recipet=await web3.eth.sendTransaction(quote);
  //   console.log("recipet: ", recipet)  
  }
  catch (err) {
    console.log("error: ", err)
  }
}
  return (
    <>
      <div className={styles.body}>
        <header className={styles.header}>
          <div className={styles.leftH}>
            <div className={styles.headerItem}>
            <Link href={"/"}>
            <Image
                src={swap}
                className="rounded-full"
                width={300}
                height={200}
                alt=""
              />
              </Link>
            </div>
          </div>

          <div className={styles.rightH}>
            <div className={styles.headerItem}>
              <Image
                src={eth}
                className="rounded-full"
                width={50}
                height={50}
                alt=""
              />
              Ethereum
            </div>
            <div className={styles.connectButton} id="login-button" onClick={connect}>
            <p
                  css={{ color: "white" }}
                  size={16}
                  weight="bold"
                  transform="uppercase"
                  id='status'
                >
                  CONNECT
                </p>
                <p
              size={20}
              id="wallet-address"
              css={{ color: "#39FF14", textShadow: "0px 0px 3px #000000",marginRight: "$2" }}
            />
             
            </div> {/* {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"} */}
          </div>
        </header>
        <div className={styles.container}>
        {/* <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      ></Modal> */}
          <div className={styles.tradeBox}>
            <div className={styles.tradeBoxHeader}>
              <h4>Swap Tokens</h4>
              <Image
                src={swap1}
                className="rounded-full"
                width={50}
                height={50}
                alt=""
              />

              <SettingOutlined />
            </div>
            <div >
            <Grid.Container gap={1} justify='center'>
                    {/* <Button rounded color="primary" onPress={connect} css={{boxShadow:'0px 0px 4px #000000'}}>
                <Text
                  css={{ color: "white" }}
                  size={16}
                  weight="bold"
                  transform="uppercase"
                  id='status'
                >
                  CONNECT
                </Text>
              </Button> */}
              {/* <Link href={"/crypto/news"}>
    <div className={styles.navItem}>
      <div className={styles.navLink}>CryptoNews</div>
      <div className={styles.badge} />
    </div>
    </Link> */}
      {/* <Row justify="center">
      <Grid sm={4} >
    <Card 
      variant="bordered"
    >
      <Card.Header>
        <Row >
          <Col>
            <img src="n2dex2-base.png" width={"80%"} />
            </Col>
            <Col>
            <Avatar
              src="profile.jpg"
              css={{ size: "$20" }}
              zoomed
              bordered
              color="gradient"
            />
          </Col>
          <img src="0xpicw.png" width={"80%"} />
        </Row>
      </Card.Header>
      <Text
        h3={true}
        color="white"
        css={{
          textShadow: "0px 0px 1px #000000",
          display: "flex",
          justifyContent: "center",
          textRendering:'geometricPrecision',
          fontFamily:'SF Pro Display',
          fontWeight:'$bold',
          m:'$0'
        }}
      >
        Token Swap
      </Text>
      </Card>
      </Grid>
      </Row> */}
      <Modal
        scroll
        closeButton
        blur
        aria-labelledby="connect_modal"
        onClose={closeHandler}
        open={alert}
      > Please Connect Wallet
        <Modal.Footer>
        <Button auto flat color="primary" onClick={connect}>
            Connect Wallet
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Text h5='true'>FROM TOKEN</Text> */}
      <Row justify="center">
      <Grid sm={6}>
        <Col>
        <Card variant="bordered" css={{
          color: "white",
          opacity: "80%",
          fontFamily: "SF Pro Display",
          fontWeight: "300",
          fontSize: "30px",
          textShadow: "0px 0px 2px #000000",
          boxShadow: "0px 0px 4px #39FF14",
        }}>
          
        <Col>
            <Input type='text'
            size="$3xl"
            css={{fontFamily:'SF Pro Display',color:'white'}} 
            className="number"
            color="default"
            placeholder="0"
            id="from_amount"
            onChange={(e) => setHold(e.target.value)}
            />
            </Col>
            </Card>
            </Col>
            <Col>
            <a onClick={fromHandler}>
            <Text size='$3xl' css={{fontFamily:'SF Pro Display',
            textShadow:'0px 0px 1px #000000',
            fontWeight:'400',
            color:'white',
            ml:'$10',
            paddingLeft:'10px'
      
            }} ><img src={flogo} style={{width:'50px'}}/>{' '+fname}</Text>
            </a>
            <Row justify="center">
            <Text css={{marginLeft:'2px', fontSize:'$md',color:"white"}}>Balance Token:</Text><Text css={{marginLeft:'$3', fontSize:'$lg', fontFamily:'SF Pro Display', color:"$blue600"}} id='get_balanceToken'></Text>
            </Row>
            </Col>
            </Grid>
          </Row>
      <Modal
        scroll
        closeButton
        blur
        aria-labelledby="token_modal"
        onClose={closeHandler}
        open={visible}
      >
        <Modal.Body>
        <Input type='text'
            size="$3lg"
            css={{fontFamily:'SF Pro Display',color:'white'}} 
            className="number"
            color="default"
            placeholder="Paste Token Address"
            />
            <Text size={16}>Select a Token:</Text>
          <div id="token_list"></div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Row justify="center">
        <img src="arrow.png" width={"2%"} />
      </Row> */}
      <Row justify="center">
      <Grid sm={6}>
      <Card
        variant="bordered" css={{
          color: "black",
          opacity: "80%",
          fontFamily: "SF Pro Display",
          fontWeight: "300",
          fontSize: "30px",
          textShadow: "0px 0px 2px #000000",
          boxShadow: "0px 0px 4px #39FF14",
          
        }}
      >
          <Col>
          <Text type='text'
            size="$3xl"
            css={{fontFamily:'SF Pro Display',color:'black',
           }} 
            className="number"
            color="default" 
            id="to_amount" 
            placeholder="0"/>
          </Col>
          </Card>
          <Spacer />
          <Col>
          <a onClick={toHandler}>
            <Text size='$3xl' css={{fontFamily:'SF Pro Display',
            textShadow:'0px 0px 1px #000000',
            fontWeight:'400',
            color:'white',
            height:"auto",
            }}><ArrowDownOutlined /><ArrowUpOutlined/><img src={tlogo} style={{width:'50px'}}/>{tname}</Text>
            </a>
            </Col>
        </Grid>
      </Row>
      {/* <Grid sm={4}>
      <Row justify="center">
        
      <Card isPressable css={{backgroundColor:'#39FF14'}} onPress={connect}>
                <Text
                  css={{display:'flex',justifyContent:'center',color: "black", textShadow:'0px 0px 2px #000000' }}
                  size="$3xl"
                  weight="bold"
                  transform="uppercase">
                 SWAP !
                </Text>
              </Card>
             
              </Row>
              </Grid> */}
      <Row justify="center">
      <Grid sm={4}>
      <Row>
      <Text size={20} css={{marginLeft:'$5', color:'white'}} >Gas Estimate: </Text> 
      <p style={{fontFamily:'SF Pro Display',
      fontSize:'24px',
      marginLeft:'4px', 
      color:'#39FF14',fontWeight:'bold',
      textShadow:'0px 0px 1px #000000'}} id='gas_estimate'></p>
      </Row>
      <Row>
      {/* <Text size={24} css={{marginLeft:'$5', color:'white'}} >LP Provider: </Text>  */}
      {/* <p style={{fontFamily:'SF Pro Display',
      fontSize:'25px', 
      marginLeft:'4px', 
      color:'#39FF14',
      fontWeight:'bold',
      textShadow:'0px 0px 1px #000000'}} id='defisource'></p> */}
      </Row>
      </Grid>
      </Row>
      <Row justify="center">
      <Grid sm={4}>
        <Row justify="center">
      <Card
        css={{
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        }}
      >
          {/* <Row justify="center" css={{mt:'$2'}}> */}
              {/* <Text color="#fff" size={10}>
                Secured with
              </Text> */}
              {/* <img src="alchemy-white.png" width={"30%"} /> */}
              {/* </Row> */}
              <Row justify="center" css={{mt:'$2'}}>
            <Text
              size={20}
              id="wallet-address"
              css={{ color: "#39FF14", textShadow: "0px 0px 3px #000000",marginRight: "$2" }}
            />
            
            </Row>
            <Row justify="center">
            <Text css={{marginLeft:'$3', fontSize:'$lg'}}>Balance Wallet:</Text><Text css={{marginLeft:'$3', fontSize:'$lg', fontFamily:'SF Pro Display', color:"$blue600"}} id='get_balance'></Text>
            </Row>
      </Card>
      </Row>
      </Grid>
      </Row>
    </Grid.Container>         
              {/* <Input placeholder="0" value={taddr} disabled={true} /> */}
            
              {/* <div className={styles.switchButton} onClick={switchTokens}>
                <ArrowDownOutlined className={styles.switchArrow} />
              </div> */}
              {/* <div className={styles.assetOne} onClick={listToTokens}>
              <p>{' '+fname}</p>
             */}
                {/* <img src={tokenOne.img} alt="assetOneLogo" className={styles} />
            {tokenOne.symbol} */}
{/*       
                <DownOutlined />
              </div> */}
              {/* <div className={styles.assetTwo} onClick=""> */}
              {/* <p>{' '+tname}</p> */}
                {/* <img src={tokenTwo.img} alt="assetOneLogo" className="assetLogo" />
            {tokenTwo.symbol} */}
                {/* <DownOutlined />
              </div> */}
            </div>
            <div className={styles.swapButton} disabled={!faddr} onClick={swapit}>Swap</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default defiswap;
