
import { getAnimalData } from "./lib/actions"
import Pagination from "./pagination"
import Images from "./ui/images"
import LatestNews from "./ui/latest-news"
import InterestingFacts from "./ui/interesting-facts"

export default async function Home() {
   const animalData = await getAnimalData()
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

export const dynamic = 'force-dynamic'