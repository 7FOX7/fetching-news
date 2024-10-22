'use client'

import { setSelection } from "../lib/actions"

export default function SelectionButtons() {
   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      setSelection(e.currentTarget.value)
   }

   return (
      <div className="h-fit flex flex-col justify-between md:flex-row">
         <button onClick={handleClick} value="shark" className="relative inline-flex items-center justify-center p-0.5 md:mr-4 mb-4 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            🦈 Enter as a Shark
            </span>
         </button>
         <button onClick={handleClick} value="tiger" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            🐯 Enter as a Tiger
            </span>
         </button>
      </div>
   )
}