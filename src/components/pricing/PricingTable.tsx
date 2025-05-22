import PlanCard from "./PlanCard"

const plans = [
  {
    name: "Free",
    description: "Standard Plan",
    price: "0",
    extraInfo: "Always free",
    features: ["Generate your own resume"],
    callToAction: "Base Plan",
  },
  {
    name: "Pro",
    description: "With this plan you can get AI generated responses",
    price: "1",
    extraInfo: "One Time Payment",
    features: ["Unlimited AI responses", "Cheaper than one coffee"],
    callToAction: "Get Pro",
  },
]

export default function PricingTable() {
  return (
    <section className="w-full mx-4 flex-row flex gap-4 pricingTable:flex-nowrap flex-wrap">
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </section>
  )
}
