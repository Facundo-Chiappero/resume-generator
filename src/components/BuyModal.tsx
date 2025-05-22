import { Dispatch } from "react"
import PayPalButton from "./buttons/PayPalButton"
import Cross from "./icons/Cross"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  name: string
  price: string
  userId: string | undefined
}

export default function BuyModal({
  isOpen,
  setIsOpen,
  name,
  price,
  userId,
}: Props) {
  return (
    <dialog
      className={`fixed inset-0 w-full h-full bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className="p-6 mx-4 bg-light-background-primary dark:bg-dark-background-secondary rounded-xl min-w-64 w-full max-w-[500px] shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Cross />
        </button>

        <h3 className="text-2xl font-bold mb-6 text-center text-white">
          Select payment method
        </h3>

        <section className="flex flex-col gap-4">
          <div className="bg-dark-background-tertiary p-3 rounded-lg text-center text-gray-300">
            <p className="text-lg font-semibold">Plan: {name}</p>
            <p className="text-xl text-white">
              Price: <span className="font-bold"> ${price}</span>
            </p>
          </div>

          <div className="flex justify-center items-center py-4 bg-dark-background-tertiary rounded-lg">
            <PayPalButton name={name} price={price} userId={userId} />
          </div>
        </section>
      </div>
    </dialog>
  )
}
