import { redirect } from "next/navigation"
import { getSelection } from "../lib/actions"
import SelectionButtons from "../ui/selection-buttons"

export default async function Page() {
   const selection = await getSelection()
   if(selection) {
      redirect('/')
   }
   return (
      <div className="w-full h-screen bg-purple-500 flex justify-center items-center">
         <SelectionButtons />
      </div>
   )
}