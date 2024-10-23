import PageArrowLeft from "./page-arrow-left"
import PageArrowRight from "./page-arrow-right"

export default function PageArrows({
   prevPage, 
   nextPage, 
   leftArrowIsDisabled, 
   rightArrowIsDisabled}: {
      prevPage: string, 
      nextPage: string, 
      leftArrowIsDisabled: boolean, 
      rightArrowIsDisabled: boolean
   }) {
      return (
         <div className="flex justify-center mt-8">
            <PageArrowLeft 
               href={prevPage}
               isDisabled={leftArrowIsDisabled}
            />
            <PageArrowRight
               href={nextPage}
               isDisabled={rightArrowIsDisabled}
            />
         </div>
      )
}