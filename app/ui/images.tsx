"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function Images({image1, image2}: {image1: string, image2: string}) {
   const searchParams = useSearchParams()
   const page = Number(searchParams.get('page')) || 1
   return (
      <>
         <div className="bg-red-500">
            <Image
               src={page === 1 ? image1 : image2}
               alt=""
               width={15}
               height={12}
            />
         </div>
      </>
   )
}