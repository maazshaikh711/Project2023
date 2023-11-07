import React from "react";
import Link from "next/link";
const styles = {
    navLink: `text-white flex mx-[10px]`,
    
  }
export const news = ({articles}) => {
  return (
    <div className=' pt-10 h-screen-  text-center  text-red-300 text-5xl'>NFT Top Most News
    <hr class="w-1/5 mx-auto color to-cyan-300"></hr>
    <Link href={"/"}><button type="button" class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-300 active:shadow-lg transition duration-150 ease-in-out">Back</button></Link> 
    <div class="pt-5 pb-0">
      <div className='flex-col my-10'>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
             {
              articles.map((post)=>{
                if (post.urlToImage==null){
                  post.urlToImage ='data:image/jpeg;base64,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'
                 }
              return (
                <a href={post.url}>
                  
                   
                 <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg ">
                 <img src={post.urlToImage} alt="mountain" class="w-full" />
                 <div class="px-6 py-4">
                   <div class="font-bold text-xl mb-2 text-red-300">{post.title}</div>
                   <p class="text-cyan-300 text-base">
                     {post.description}
                  </p>
                 </div>
               </div>
               
               
                </a>
               
               )
              }
)
}
</div>
</div>
</div>
</div>
  );
};
export const getServerSideProps = async()=>{
  const response = await fetch("https://newsapi.org/v2/everything?q=nft&apiKey=0728bbf8d6d7480b90b9cc9021a36d57")
 const json = await response.json()
 const {articles} = json
 return {
  props:
  {
    articles,
  }
 }
}
export default news;
