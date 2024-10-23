
export default function InterestingFacts({fact}: {fact: string}) {
   return (
      <section className="mt-6 md:mt-10">
         <h2 className="text-emerald-400 text-3xl font-semibold">Did you know?</h2>
         <div className="w-10/12 md:w-6/12 text-white mt-4">
            <p>{fact}</p>
         </div>
      </section>
   )
}