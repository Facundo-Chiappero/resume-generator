import { PricingTable } from "@clerk/clerk-react"
import { FAQAccordion } from "@components/FAQAccordion"
import { UPGRADE_TITLE } from "@utils/consts"

export default function Upgrade() {
  return (
    <main className="min-h-screen flex flex-wrap justify-center items-center max-w-[800px] mx-auto mt-8 content-center gap-8">
      <h1 className="light-text-secondary title text-light-text-primary dark:text-dark-text-primary text-4xl font-bold text-center">
        {UPGRADE_TITLE}
      </h1>
      <article className="w-full  px-4  flex-row flex  ">
        <PricingTable />
      </article>

      <FAQAccordion />
    </main>
  )
}
