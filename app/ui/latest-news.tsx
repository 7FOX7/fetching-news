"use client"

import { useSearchParams } from "next/navigation";
import { News } from "../lib/definitions";

export default function LatestNews({news}: {news: News}) {
   const searchParams = useSearchParams(); 
   const page = Number(searchParams.get('page')) || 1
   const startIndex = page === 1 ? 0 : 5
   const endIndex = page === 1 ? 5 : news.length
   
   return (
      <article>
         <h2 className="text-emerald-400 text-3xl font-semibold">Latest news</h2>
            {news.slice(startIndex, endIndex).map((_news, index) => {
               return (
                  <div key={index} className="text-white mt-4">
                     <h3 className="text-emerald-400 text-xl font-medium">{_news.title}</h3>
                     <p>{_news.content}</p>
                  </div>
               )
            })}
      </article>
   )
}