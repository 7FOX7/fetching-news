import { redirect } from "next/navigation"
import { getSelection } from "../lib/actions"
import SelectionButtons from "../ui/selection-buttons"

export default async function Page() {
   const selection = await getSelection()
   if(selection) {
      redirect('/?page=1')
   }
   return (
      <div className="w-full h-screen flex justify-center items-center">
         <SelectionButtons />
      </div>
   )
}

export const dynamic = 'force-static'