"use client"

import { useSearchParams } from "next/navigation";
import { News } from "../lib/definitions";

export default function LatestNews({news}: {news: News}) {
   const searchParams = useSearchParams(); 
   const page = Number(searchParams.get('page')) || 1
   const startIndex = page === 1 ? 0 : 5
   const endIndex = page === 1 ? 5 : news.length
   
   return (
      <div className="bg-yellow-500">
         <h2>Latest news</h2>
         <div>
            {news.slice(startIndex, endIndex).map((_news, index) => {
               return (
                  <div key={index} className="bg-orange-500">
                     <h3>{_news.title}</h3>
                     <p>{_news.content}</p>
                  </div>
               )
            })}
         </div>
      </div>
   )
}