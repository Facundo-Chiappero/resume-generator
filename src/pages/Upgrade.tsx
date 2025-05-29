import { FAQAccordion } from "@components/FAQAccordion"
import PricingTable from "@components/pricing/PricingTable"
import { UPGRADE_TITLE } from "@utils/consts"

export default function Upgrade() {
  return (
    <main className="min-h-screen flex flex-wrap justify-center items-center max-w-[800px] mx-auto mt-20 content-center gap-8">
      <h1 className="light-text-secondary title   text-4xl font-bold text-center">
        {UPGRADE_TITLE}
      </h1>

      <PricingTable />

      <FAQAccordion />
    </main>
  )
}
