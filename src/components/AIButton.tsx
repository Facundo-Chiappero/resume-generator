import { SignedIn } from "@clerk/clerk-react"
import { useIsPro } from "@hooks/useIsPro"
import CreateIcon from "@mui/icons-material/Create"
import { getSuggestion } from "@utils/getSuggestion"

type Props<T> = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setFormEntry: React.Dispatch<React.SetStateAction<T>>
  previousValue: string
  property: string
  instruction: string
  tabIndex: number
}
export default function AIButton<T>({
  setLoading,
  setFormEntry,
  previousValue,
  property,
  instruction,
  tabIndex,
}: Props<T>) {
  const isPro = useIsPro()
  if (!isPro) return

  const handleClick = async (
    setFormEntry: React.Dispatch<React.SetStateAction<T>>
  ) => {
    setLoading(true)
    const suggestion = await getSuggestion({
      instruction: `I have this text: "${previousValue}". Please improve its formatting, correct spelling errors, and ensure proper capitalization and punctuation while preserving the original content. Follow this specific guidance: ${instruction}. Important: DO NOT replace it with unrelated content - only enhance what's already there.`,
    })

    setFormEntry((prev: T) => ({
      ...prev,
      [property]: suggestion.message,
    }))
    setLoading(false)
  }

  return (
    <SignedIn>
      <button
        className="absolute top-3.5 right-3"
        type="button"
        tabIndex={tabIndex}
        onClick={() => handleClick(setFormEntry)}
      >
        <CreateIcon />
      </button>
    </SignedIn>
  )
}
