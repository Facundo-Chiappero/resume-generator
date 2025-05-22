import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"
import Check from "@components/icons/Check"
import SignInButton from "@components/buttons/SigninButton"
import { useState } from "react"
import BuyButton from "@components/buttons/BuyButton"
import BuyModal from "@components/BuyModal"
import { usePreventScroll } from "@hooks/usePrventScroll"
import { useGetUserPlan } from "@hooks/useGetUserPlan"

type Props = {
  plan: {
    name: string
    description: string
    price: string
    extraInfo: string
    features: string[]
    callToAction: string
  }
}

export default function PlanCard({ plan }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { currentPlan } = useGetUserPlan({ userId: user?.id })
  usePreventScroll({ isOpen })

  return (
    <>
      <article className="bg-light-background-black text-light-text-secondary dark:bg-dark-background-white dark:text-dark-text-secondary w-full rounded-xl py-4 grid gap-y-4  grid-rows-[auto_auto_1fr_auto]">
        <header className="px-4">
          <h3 className="text-xl -mb-1 font-bold">{plan.name}</h3>
          <small className="opacity-80 font-semibold">{plan.description}</small>
        </header>
        <main className="px-4 h-fit">
          <p className="text-xl font-bold">${plan.price}</p>
          <small className="opacity-80 font-semibold text-xs">
            {plan.extraInfo}
          </small>
        </main>
        <section className="p-4 bg-black dark:bg-white border-y border-black/25 text-sm">
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check />
                <span> {feature}</span>
              </li>
            ))}
          </ul>
        </section>
        {!(plan.name === "Free") ? (
          <footer className="h-fit flex justify-center font-semibold opacity-80 px-4">
            {currentPlan === plan.name ? (
              <p className="h-8">Current Plan</p>
            ) : (
              <>
                <SignedIn>
                  <BuyButton
                    callToAction={plan.callToAction}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                </SignedIn>
                <SignedOut>
                  <SignInButton
                    style={{ width: "100%" }}
                    text={plan.callToAction}
                  />
                </SignedOut>
              </>
            )}
          </footer>
        ) : (
          <div className="h-8"></div> // little trick to make the features section appear the same size even if the user is already a pro
        )}
      </article>

      <BuyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={plan.name}
        price={plan.price}
        userId={user?.id}
      />
    </>
  )
}
