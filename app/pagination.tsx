'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import PageArrows from "./ui/page-arrows";

export default function Pagination() {
   const searchParams = useSearchParams();
   console.log('the original searchParams: ' + searchParams) 
   const pathname = usePathname(); 
   const currentPage = Number(searchParams.get('page')) || 1 

   function createPage(page: number) {
      const params = new URLSearchParams(searchParams)
      params.set('page', page.toString())

      console.log('updated search params: ' + `${pathname}?${params}`)
      return `${pathname}?${params}`
   }
   return (
      <PageArrows 
         prevPage={createPage(currentPage - 1)}
         nextPage={createPage(currentPage + 1)}
         leftArrowIsDisabled={currentPage <= 1}
         rightArrowIsDisabled={currentPage >= 2}
      />
   )
}