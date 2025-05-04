import { useState, useMemo, ReactNode } from "react"
import { EducationType } from "types"
import { EducationContext } from "./useFormContextHooks"

export const EducationProvider = ({ children }: { children: ReactNode }) => {
  const [educationForm, setEducationForm] = useState<EducationType[]>([])

  const value = useMemo(
    () => ({ educationForm, setEducationForm }),
    [educationForm]
  )

  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  )
}
