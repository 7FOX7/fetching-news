
import { getSelection } from "./lib/actions"
import { getData } from "./lib/actions"
import { redirect } from "next/navigation"
import { AnimalData } from "./lib/definitions"
import Pagination from "./pagination"
import Images from "./ui/images"
import LatestNews from "./ui/latest-news"
import InterestingFacts from "./ui/interesting-facts"

export default async function Home() {
   const selection = await getSelection()
   if(!selection) {
      redirect('/selection')
   } 

   const data = await getData();
   const animalData: AnimalData = data[selection.value][0]

   return (
      <>
         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Images
               imgSrc1={animalData.imgUrl1}
               imgAlt1={animalData.imgAlt1}
               imgSrc2={animalData.imgUrl2}
               imgAlt2={animalData.imgAlt2}
            />
            <LatestNews news={animalData.news} />
         </section>
         <InterestingFacts fact={animalData.interestingFact} />
         <Pagination />
      </>
   )
}
