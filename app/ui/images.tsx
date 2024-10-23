"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function Images({
   imgSrc1, 
   imgAlt1, 
   imgSrc2, 
   imgAlt2}: {
      imgSrc1: string,
      imgAlt1: string
      imgSrc2: string,
      imgAlt2: string
   }) {
      const searchParams = useSearchParams()
      const page = Number(searchParams.get('page')) || 1
      return (
         <>
            <div>
               <Image
                  src={page === 1 ? imgSrc1 : imgSrc2}
                  alt={page === 1 ? imgAlt1 : imgAlt2}
                  width={400}
                  height={200}
                  priority={true}
                  style={{
                     width: "400px", 
                     height: "200px"
                  }}
               />
            </div>
         </>
      )
}