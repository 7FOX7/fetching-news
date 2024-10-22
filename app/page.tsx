
import { getSelection } from "./lib/actions"
import { getData } from "./lib/actions"
import { redirect } from "next/navigation"
import { AnimalData } from "./lib/definitions"

export default async function Home() {
   const selection = await getSelection()
   if(!selection) {
      redirect('/selection')
   } 

   const data = await getData();
   const animalData: AnimalData = data[selection.value][0]
   
   return (
      <p>{animalData.description}</p>
   )
}
