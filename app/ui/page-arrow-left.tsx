import Link from "next/link"

export default function PageArrowLeft({href, isDisabled}: {href: string, isDisabled: boolean}) {
   return (
         <div className={`${isDisabled ? "bg-gray-400" : "bg-emerald-400"} rounded-sm md:rounded-md mr-4 md:mr-8`}>
            {isDisabled ?
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-9 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
               </svg>
               :
               <Link
                  href={href}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-9">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
               </Link>
            }
         </div>
   )
}