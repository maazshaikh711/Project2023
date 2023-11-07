// import React from 'react'
// import {useMoralis} from 'react-moralis'
// import {Moralis} from 'moralis';
//     const styles ={
//         button: `bg-[#6188FF] px-5 py-2 rounded-lg`,
//     }
// const login = () => {
//     const{authenticate,authError} = useMoralis()
     
//     return <button className={styles.button} onClick={authenticate}>Login To MestamaskWallet</button>
    

  
// }
// // const login = () => {
// //     const {isAuthenticating,user} = useMoralis()
// //     async function login() {
// //         let user = Moralis.User.current();
// //         if (!user) {
// //           user = await Moralis.authenticate({
// //             signingMessage: "Log in using Moralis",
// //           })
// //             .then(function (user) {
// //               console.log("logged in user:", user);
// //               const add= user.get("ethAddress")
// //             })
// //             .catch(function (error) {
// //               console.log(error);
// //             });
// //         }
// //       }
      
// //       async function logOut() {
// //         await Moralis.User.logOut();
// //         console.log("logged out");
// //       }
// //       return(
// //         <div>
        
// //         <button onClick={login} >🦊 Moralis Metamask Login</button>
// //         <button onClick={logOut} disabled={isAuthenticating}>
// //           Logout
// //         </button>
// //       </div>
// //       )
// // }



// // Moralis.start({
// //     serverUrl: 'https://nsxlz7mga518.usemoralis.com:2053/server',
// //     appId:"X7ARRUzuOPGeQDvEWxhNeumNnfLFUDZbuCKNSyqr"
// // })

// // function login  ()  {
    
// //     async function isLogin (){
    
// //         let user =Moralis.User.current();
// //         if(!user) {
// //             user = await Moralis.authenticate({
// //                 signingMessage:"Login To Moralis",
// //             })
// //             .then(function(user) {
// //                 console.log("Login Successful User",user);
// //                 docoument.getElementsById("btn-login").innerHTML = (user.get("ethAddress"))
// //             })
// //             .catch(function(error) {
// //                 console.error(error);
// //             })
// //         }    
    
// //      }
    
// //     return( <button 
// //         className={styles.button} 
// //         onClick={isLogin} 
// //         id="btn-login">
// //         Login To MestamaskWallet</button>)
    

  


// export default login