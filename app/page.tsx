import { getSelection } from "./lib/actions"
import { redirect } from "next/navigation"

export default async function Home() {
   const selection = await getSelection()
   if(!selection) {
      redirect('/selection')
   } 
   
   return <p>You are all good</p>
}
