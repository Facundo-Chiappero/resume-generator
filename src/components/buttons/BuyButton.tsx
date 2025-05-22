import { SignedIn } from "@clerk/clerk-react"
import { Dispatch } from "react"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  callToAction: string
}

export default function BuyButton({ isOpen, setIsOpen, callToAction }: Props) {
  return (
    <SignedIn>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="
          w-full inline-flex items-center justify-center
          px-3 py-1.5 mr-2
          font-medium text-[0.8125rem] leading-[1.38462]
          bg-[#2F3037] hover:bg-[#3B3C45] text-white border border-[#2F3037]
          rounded-md
          shadow-[0_0_0_1px_#2F3037,0_1px_1px_0_rgba(255,255,255,0.07)_inset,0_2px_3px_0_rgba(34,42,53,0.2),0_1px_1px_0_rgba(0,0,0,0.24)]
          
          select-none cursor-pointer
          transition-colors duration-100 
          relative isolate
          before:content-[''] before:absolute before:inset-0
          before:rounded-inherit
          before:bg-gradient-to-b before:from-white/10 before:to-transparent
          before:-z-10

          focus:outline-2 focus:outline-violet-500 focus-visible:outline-violet-500
        "
      >
        {callToAction}
      </button>
    </SignedIn>
  )
}
