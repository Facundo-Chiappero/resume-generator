import {
  useEducation,
  useExperience,
  useHeadData,
  usePersonalData,
  useProject,
  useSkills,
} from "@context/useFormContextHooks"
import { useIsPro } from "@hooks/useIsPro"
import CreateIcon from "@mui/icons-material/Create"
import { getSuggestion } from "@utils/getSuggestion"
import { toast } from "react-toastify"

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

  const { personalDataForm } = usePersonalData()
  const { headDataForm } = useHeadData()
  const { educationForm } = useEducation()
  const { experienceForm } = useExperience()
  const { projectForm } = useProject()
  const { skillsForm } = useSkills()

  if (!isPro) return

  const handleClick = async (
    setFormEntry: React.Dispatch<React.SetStateAction<T>>
  ) => {
    setLoading(true)
    const suggestion = await getSuggestion({
      instruction: `I have this text: "${previousValue}". Please improve its formatting, correct spelling errors, and ensure proper capitalization and punctuation while preserving the original content. Additionally, enhance the text to make it more polished, professional, and compelling, as if presenting the user's skills, experience, or achievements in the best possible light. Follow this specific guidance: ${instruction}. Important: DO NOT replace it with unrelated content - only enhance what's already there. If, perchance, I do not provide a text, you can make it up.
      `,
      headDataForm,
      personalDataForm,
      educationForm,
      experienceForm,
      projectForm,
      skillsForm,
    })

    if (suggestion.status !== 200) {
      toast.error(suggestion.message)
      setLoading(false)

      return
    }

    setFormEntry((prev: T) => ({
      ...prev,
      [property]: suggestion.message,
    }))
    setLoading(false)
  }

  return (
    <>
      <button
        className="absolute top-3.5 right-3"
        type="button"
        tabIndex={tabIndex}
        onClick={() => handleClick(setFormEntry)}
      >
        <CreateIcon />
      </button>
    </>
  )
}
