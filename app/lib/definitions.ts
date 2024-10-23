export type AnimalData = {
   imgUrl1: string,
   imgAlt1: string, 
   imgUrl2: string,
   imgAlt2: string,
   interestingFact: string, 
   news: News
}

export type News = {
   title: string, 
   content: string
}[]