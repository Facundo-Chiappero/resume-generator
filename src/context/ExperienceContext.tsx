import { useState, useMemo, ReactNode } from "react"
import { ExperienceType } from "types"
import { ExperienceContext } from "./useFormContextHooks"

export const ExperienceProvider = ({ children }: { children: ReactNode }) => {
  const [experienceForm, setExperienceForm] = useState<ExperienceType[]>([])

  const value = useMemo(
    () => ({ experienceForm, setExperienceForm }),
    [experienceForm]
  )

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  )
}
