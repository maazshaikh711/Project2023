// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const getData = async () => {
   
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=82d7943d-8194-43d9-85f6-b1541c6163e7",
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )
   
    const data = await response.json()

    res.status(200).json({ data })
  }

  getData()
}

// export default function handler(req, res) {
//   const [repeater,setRepeater]=useState(0)
//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true)
//       const response = await fetch(
//               "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=82d7943d-8194-43d9-85f6-b1541c6163e7",
//               {
//                 method: 'GET',
//                 headers: {
//                   Accept: '*/*',
//                 },
//               },
//             )
//             const data = await response.json()
//             res.status(200).json({ data })
//       setIsLoading(false)
//     }
  
//     getData()
//     setTimeout(() => setRepeater(prevState=>prevState+1), 100000);
//   },[repeater])



