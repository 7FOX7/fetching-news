
import { getSelection } from "./lib/actions"
import { getData } from "./lib/actions"
import { redirect } from "next/navigation"
import { AnimalData } from "./lib/definitions"
import Pagination from "./pagination"
import Images from "./ui/images"
import LatestNews from "./ui/latest-news"

export default async function Home() {
   const selection = await getSelection()
   if(!selection) {
      redirect('/selection')
   } 

   const data = await getData();
   const animalData: AnimalData = data[selection.value][0]

   return (
      <section className="w-full bg-red-500 grid grid-cols-1">
         <div className="bg-blue-500 grid grid-cols-1 md:grid-cols-2">
            <Images
               image1={animalData.image1}
               image2={animalData.image2}
            />
            <LatestNews news={animalData.news} />
         </div>
         <div>
            <h2>Did you know...</h2>
            <div>
               <p>{animalData.description}</p>
            </div>
         </div>
         <Pagination />
      </section>
   )
}
