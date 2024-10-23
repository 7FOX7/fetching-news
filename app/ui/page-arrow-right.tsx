import Link from "next/link";

export default function PageArrowRight({href, isDisabled}: {href: string, isDisabled: boolean}) {
   return ( 
         <div className={`${isDisabled ? "bg-gray-400" : "bg-emerald-400"} rounded-sm md:rounded-md ml-4 md:ml-8`}>
            {isDisabled ?
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
               </svg>
               : 
               <Link
                  href={href}
                  aria-label="Open next page"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-9">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
               </Link>
            }
         </div>
   )
}