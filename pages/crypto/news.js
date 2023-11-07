import React from "react";
import Link from "next/link"
const styles = {
  navLink: `text-white flex mx-[10px]`,
  
}
export const news = ({articles}) => {
  return (

    <div className=' pt-10 h-screen-  text-center  text-red-300 text-5xl'>Bitcoins Top Most News
    <hr class="w-1/5 mx-auto color to-cyan-300"></hr>
    <Link href={"/"}><button type="button" class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-300 active:shadow-lg transition duration-150 ease-in-out">Back</button></Link> 
    <div class="pt-5 pb-0">
      <div className='flex-col my-10'>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
             {
              articles.map((post)=>{
                console.log(post)
                if (post.urlToImage==null){
                 post.urlToImage ='data:image/jpeg;base64,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'
                }
               
              return (
                <a href={post.url}>
                  
                   
                 <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg ">
                 <img src={post.urlToImage} alt="Bitcoin" class="w-full" />
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
  const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=0728bbf8d6d7480b90b9cc9021a36d57")
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
