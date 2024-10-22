import { redirect } from "next/navigation"
import { getSelection } from "../lib/actions"
import SelectionButtons from "../ui/selection-buttons"

export default async function Page() {
   const selection = await getSelection()
   if(selection) {
      redirect('/')
   }
   return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
         <SelectionButtons />
      </div>
   )
}