import React from 'react'
import {useState, useEffect} from 'react'
import Link from "next/link";
const styles = {
  navLink: `text-white flex mx-[10px]`,
  
}
export const Feed =({articles})=>{
  console.log(articles)

  return (
      
      <div className=' pt-10 h-screen-  text-center  text-red-300 text-5xl'>Bitcoin Top Most News
      <hr class="w-1/5 mx-auto color to-cyan-300"></hr>
      <Link href={"/"}><button type="button" class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-300 active:shadow-lg transition duration-150 ease-in-out">Back</button></Link> 
      <div class="pt-5 pb-0">
        <div className='flex-col my-10'>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
               {
                articles.map((post)=>{
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
)
}
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
export default Feed;



